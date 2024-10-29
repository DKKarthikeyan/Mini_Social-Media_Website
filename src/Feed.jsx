import React from 'react'
import Post from './Post'

function feed({posts}) {
   
  return (
    <>

    {
        posts.map((post)=>
            <Post key={post.id} post={post}   />
        )
    }


    
    
    </>
  )
}

export default feed