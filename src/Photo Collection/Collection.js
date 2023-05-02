import React from 'react'

function Collection(props) {
  return (
    <div className="collection">
      <img className="collection__big" src={props.images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={props.images[1]} alt="Item" />
        <img className="collection__mini" src={props.images[2]} alt="Item" />
        <img className="collection__mini" src={props.images[3]} alt="Item" />
      </div>
      <h4>{props.name}</h4>
    </div>
  )
}

export default Collection
