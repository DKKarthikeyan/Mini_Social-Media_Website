import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './UseContext/DataContext'

function home() {
  const {isLoading,fetchError,searchResult:posts}=useContext(DataContext);
  
  return (
    



    
    <div className="home">

      {isLoading && !fetchError && <p className='loading' style={{color:"white"}}>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='error' style={{color:"red"}}>{fetchError}</p>}




      { !isLoading && !fetchError && (
        posts.length ? 

        (<Feed posts={posts}/>)  :

        (
        <p style={{padding :"1rem",color : "white",textAlign :"center"}}>No Posts Available...</p>
        )

      )


      }

    </div>
    
  )
}

export default home