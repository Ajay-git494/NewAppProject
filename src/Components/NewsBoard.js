import React, { useEffect, useState } from 'react'
import { NewItem } from './NewItem';

const NewsBoard = ({catagory}) => {
    const [articles,setArticles]=useState([]);
    

    useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${catagory}&apiKey=a03976a01ada4f0ba7a8e1858847e6f2`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
      });
  }, [catagory]);
  return (
    <div>
        {/* <h2 className='text-center'> Latest <span className='badge text-danger fs-1'>News</span></h2> */}
        {articles.map((news, index) => (
        <NewItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage} 
          url={news.url}
        />
      ))}
    </div>
  )
}

export default NewsBoard