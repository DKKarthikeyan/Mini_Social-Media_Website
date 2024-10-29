import React,{ useState,useEffect,useRef,createContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { format } from 'date-fns'



const DataContext=createContext({});



export const DataProvider=({children})=>{

    if(localStorage.getItem('DK_Posts')){
      var [posts,setPosts]=useState(JSON.parse(localStorage.getItem('DK_Posts')))
    }
    else{
      var [posts, setPosts] = useState([
        {
          "id": "1",
          "title": "Checking In 🙌",
          "dateTime": "April 29, 2024 7:45:00 PM",
          "body": "Just wanted to check in and say hello! Hope everyone's week is going well so far."
          
        },
        {
          "id": "2",
          "title": "Thoughtful Tuesday 🌱",
          "dateTime": "May 29, 2024 1:30:00 PM",
          "body": "Taking a moment to reflect and recharge today. Life’s too short to rush through everything."
          
        },
        {
          "id": "3",
          "title": "Project Milestone Achieved 🚀",
          "dateTime": "June 27, 2024 9:15:00 AM",
          "body": "Proud to announce that we've reached a key milestone in our project! Hard work is paying off!"
        },
        {
          "id": "4",
          "title": "Weekend Getaway Plans 🏞️",
          "dateTime": "July 28, 2024 6:30:00 PM",
          "body": "Excited to share that I'll be heading to the mountains this weekend for some relaxation and adventure!"
          
        },
        {
          "id": "5",
          "title": "Good Morning Vibes ☀️",
          "dateTime": "August 29, 2024 8:00:00 AM",
          "body": "Starting the day with positivity and gratitude. Hope everyone has a fantastic day!"
       
        }
      ]);
      
    }
  
 const [searchResult,setSearchResult]=useState([]);
 const [search,setSearch]=useState("");
 const [title,setTitle]=useState("");
 const [body,setBody]=useState("");
 const [editTitle,setEditTitle]=useState("");
 const [editBody,setEditBody]=useState("");
 const homeNav=useRef(null);
 const aboutNav=useRef(null);
 const postNav=useRef(null);
 const navigate=useNavigate();
 const [isLoading,setIsLoading]=useState(null);
 const [fetchError,setfetchError]=useState(null);


 


 useEffect(()=>{
 
   const filteredResult=posts.filter((post)=>((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
                     || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase()) );

         setSearchResult(filteredResult.reverse());                                     
    }

  ,[search,posts])

 


 function handleSubmit(e){
  e.preventDefault();
  const id=posts.length? Number(posts[(posts.length)-1].id) + 1 : 1;
  const dateTime=format(new Date(),"MMMM dd, yyyy pp");
  const newPost={id:id,title:title,dateTime:dateTime,body:body}

  try {
    
    const allPosts=[...posts,newPost];
    setPosts(allPosts);
    localStorage.setItem('DK_Posts',JSON.stringify(allPosts))

    setTitle('');
    setBody('');
    navigate('/');
  } catch (error) {
    console.error(error.message);
    
  }
  finally{
    handleNav(1);
  }
  
 }


 function handleDelete(id){
  try {
    
    const allPosts=posts.filter((post)=>post.id !== id)
    setPosts(allPosts);
    localStorage.setItem('DK_Posts',JSON.stringify(allPosts))
    navigate('/');
    
      
  } catch (error) {
    console.error(error.message)
    
  }
 

  

 }

  function handleEdit(id){

  
  
  const dateTime=format(new Date(),"MMMM dd, yyyy pp");
  const newPost={id:id,title:editTitle,dateTime:dateTime,body:editBody}

  try {
   

    setPosts(posts.map(post=>post.id===id?{...newPost}:post))
    localStorage.setItem('DK_Posts',JSON.stringify(posts.map(post=>post.id===id?{...newPost}:post)))
    setEditTitle('');
    setEditBody('');
    navigate('/');
  } catch (error) {
    console.error("Hello world");
    
  }

 }

 
 function handleNav(val){
  console.log(homeNav.current.firstElementChild);

  switch (val){

    case 1:
      homeNav.current.style.backgroundColor="white"
      aboutNav.current.style.backgroundColor=""
      postNav.current.style.backgroundColor=""
      homeNav.current.firstElementChild.style.color="black"
      aboutNav.current.firstElementChild.style.color=""
      postNav.current.firstElementChild.style.color=""
      break;
    
    case 2:
      homeNav.current.style.backgroundColor=""
      aboutNav.current.style.backgroundColor="white"
      postNav.current.style.backgroundColor=""
      homeNav.current.firstElementChild.style.color=""
      aboutNav.current.firstElementChild.style.color="black"
      postNav.current.firstElementChild.style.color=""
      break; 
    
    case 3:
      homeNav.current.style.backgroundColor=""
      aboutNav.current.style.backgroundColor=""
      postNav.current.style.backgroundColor="white"
      homeNav.current.firstElementChild.style.color=""
      aboutNav.current.firstElementChild.style.color=""
      postNav.current.firstElementChild.style.color="black"
      break;  
      

  }
  
}





  return (
    
    <DataContext.Provider value={{handleNav,homeNav,aboutNav,postNav,search,setSearch,isLoading, fetchError,searchResult, handleSubmit, title, setTitle, body, setBody,posts,handleDelete,handleEdit,editBody,setEditBody,editTitle,setEditTitle}}>
      {children}
    </DataContext.Provider>
    
  
  )
  
}

export default DataContext;