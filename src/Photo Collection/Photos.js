import React, { useState, useEffect } from 'react'
import './Photos.scss'
import Collection from './Collection'

function Photos() {
  const [searchValue, setSearchValue] = useState('')
  const [collection, setCollection] = useState([])
  const [categoryId, setCategoryId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  const PHOTOS_URL = 'https://64506630e1f6f1bb22971007.mockapi.io/photos'
  const category = `${categoryId ? `category=${categoryId}` : ''}`

  useEffect(() => {
    setIsLoading(true)
    fetch(`${PHOTOS_URL}?page=${page}&limit=3&${category}`)
      .then((res) => res.json())
      .then((data) => setCollection(data))
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false))
  }, [categoryId, page])

  const searchValueHandler = (event) => setSearchValue(event.target.value)
  const categoryActivateHandler = (index) => setCategoryId(index)

  const categoryes = [
    { name: 'Все' },
    { name: 'Море' },
    { name: 'Горы' },
    { name: 'Архитектура' },
    { name: 'Города' },
  ]

  return (
    <div className="Photos">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categoryes.map((category, index) => (
            <li
              key={index}
              className={index === categoryId ? 'active' : ''}
              onClick={() => categoryActivateHandler(index)}
            >
              {category.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={searchValueHandler}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идёт загрузка...</h2>
        ) : (
          collection
            .filter((obj) =>
              obj.name
                .toLowerCase()
                .trim()
                .includes(searchValue.toLowerCase().trim())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className={index + 1 === page ? 'active' : ''}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Photos
