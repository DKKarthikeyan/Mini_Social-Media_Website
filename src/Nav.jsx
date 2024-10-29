import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './UseContext/DataContext';

function nav() {
  const {handleNav,homeNav,aboutNav,postNav,search,setSearch}=useContext(DataContext);

  useEffect(()=>{
    homeNav.current.firstElementChild.style.color="black";
    homeNav.current.style.backgroundColor="White"
 },[])



 
  return (
    <div className="nav">

      <label htmlFor="searchPost">
       <span>Search Post</span> 
        <input id='searchPost' type="text" placeholder='Search Post' value={search} onChange={(e)=>setSearch(e.target.value)} />
      </label>

      <ul>
      <li onClick={()=>handleNav(1)} ref={homeNav}><Link to='/'>Home</Link></li>
      <li onClick={()=>handleNav(2)} ref={aboutNav}><Link to='about'>About</Link></li>
      <li onClick={()=>handleNav(3)} ref={postNav}><Link to='post'>Post</Link></li>
      </ul>


    </div>
  )
}

export default nav