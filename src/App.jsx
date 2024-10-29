import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Newpost from './Newpost'
import Postpage from './PostPage'
import EditPost from './EditPost'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { DataProvider } from './UseContext/DataContext'




function App() {



  return (
    <div className="app">
      <DataProvider>
      
        <Header title="DK Social Media"/>
        <Nav/>
        
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='post'>
            <Route index element={ <Newpost/>} />
            <Route path=':id'element={ <Postpage/> } />
          </Route>

          <Route path='post/:id/edit/:id' element={<EditPost/>}  /> 
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Missing/>}/>     
          
        </Routes>
        
        <Footer/>

      </DataProvider>

     
      

    </div>
    

   
    
  )
}

export default App
