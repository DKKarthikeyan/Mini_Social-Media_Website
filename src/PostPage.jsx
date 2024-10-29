import React, { useContext } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import DataContext from './UseContext/DataContext';

function postpage() {
  const {posts,handleDelete}=useContext(DataContext);

  const {id}=useParams();
  const post=posts.find((post)=>((post.id).toString())===id);


  return (
    <>

     {post &&

      <> 
        <article className="post">
        
          <h2 className="postPageTitle">{post.title}</h2>
          <p className="postPageDateTime">{post.dateTime}</p>      
          <p className="postPageBody">{post.body}</p>
          <button onClick={()=>handleDelete(post.id)}>Delete</button>
          <Link to={`edit/${post.id}`}>

            <button className='editButton'>Edit</button>
          
          </Link>
          
        



        </article>

      
      </>
      
     }

     {!post &&

      <>
        <div className="missing">

          <h2>Page Not Found..</h2>
          <p>Sorry For the Inconvenience</p>
          <p>Please Visit Our HomePage...</p>

        </div>
      
      
      </>
     
     
     
     }



      
    </>
    
  )
}

export default postpage