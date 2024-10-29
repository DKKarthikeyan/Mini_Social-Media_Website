import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './UseContext/DataContext';

function editPost() {
    const {handleEdit,posts,editBody,setEditBody,editTitle,setEditTitle}=useContext(DataContext);

    const {id}=useParams();

    const post=posts.find((post)=>(post.id).toString()===id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }

    },[])

    function handleSubmit(e){
      e.preventDefault();

    

      handleEdit(post.id);

    }

    function resetEdit(){

      setEditTitle(post.title);
      setEditBody(post.body);

    }



  return (
    <div className="newPost">

      <h2>Edit Post</h2>


      <form className='newPostForm' onSubmit={handleSubmit}>

      <div className="createTitle">
        <label htmlFor="title">

          <span>Title:</span>
          <input id='title' type="text" required placeholder='Enter Your Title Here...' minLength={1} value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />

        </label> 

      </div>

      <div className="createPost">
        <label htmlFor="post">
         

          <span>Post:</span>
          <textarea rows={6}  name=""  id='post' type="text" placeholder='Write your Post Here...' minLength={1} required value={editBody} onChange={(e)=>setEditBody(e.target.value)}/>

        
        </label>

      </div>

      <div className='editPostButton'>
      <button type='submit' >Submit</button>
      <button type='button' onClick={resetEdit}>Reset</button>


      </div>

      </form>

    </div>
  )
}

export default editPost

