import React from 'react'
import { Link } from 'react-router-dom';


function post({post}) {
  
  
  
  return (

   <article className="post">
    <Link to={`post/${post.id}`}>
      <h2 className="postTitle">{post.title}</h2>
      <p className="postDateTime">{post.dateTime}</p>
    </Link>
    
    
    <p className="postBody">{
      (post.body).length <= 40 ?
       post.body 
       : `${(post.body).slice(0,40)}...`  
       
      }
    </p>



   </article>
    
    
    
  )
}

export default post