import React from 'react'
import defa from './assets/defa.jpg';

export const NewItem = ({title, description, src, url}) => {
  
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:'345px'}}>
  <img src={src? src:defa} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title ? title.slice(0,50):"No title Available"}</h5>
    <p className="card-text">{description ? description.slice(0,90):"Go to Read More Button"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
