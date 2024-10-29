import React, { useContext } from 'react'
import DataContext from './UseContext/DataContext'

function newpost() {

  const {handleSubmit,title,setTitle,body,setBody}=useContext(DataContext)
  return (

    <div className="newPost">

      <h2>New Post</h2>


      <form className='newPostForm' onSubmit={handleSubmit} >

      <div className="createTitle">
        <label htmlFor="title">

          <span>Title:</span>
          <input id='title' type="text" required placeholder='Enter Your Title Here...' value={title} onChange={(e)=>setTitle(e.target.value)} />

        </label> 

      </div>

      <div className="createPost">
        <label htmlFor="post">
         

          <span>Post:</span>
          <textarea rows={6}  name=""  id='post' type="text" placeholder='Write your Post Here...' required value={body} onChange={(e)=>setBody(e.target.value)}/>

        
        </label>

      </div>

      <div className='newpostButton'>
      <button type='submit' >Submit</button>

      </div>

      </form>

    </div>
  )
}

export default newpost