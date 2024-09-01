
import './App.css';
import { useEffect, useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [form, setForm] = useState({
   
  });
  const [users, setUser] = useState([]);


  const handleForm = (e)=>{

    // console.log(e.target.value, e.target.name)
    setForm({

       ...form,

      //set form saves as key value pair 
       [e.target.name ]: e.target.value , 
    })

  };


  const handleSubmit = async (e)=>{
    e.preventDefault() ;

    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data =await response.json();
    console.log(data);
   
  }
//get req handling 



  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
   const data = await response.json();
   setUser(data);
   console.log(data);
  
  }

  useEffect(()=>{

    getUsers();

  },  [])





  return (
    <>
    

      <header className="container mx-auto mt-4">
        <div className=" flex justify-between items-center navbar bg-base-100  bg-gradient-to-r from-gray-50 via-white to-lime-50 rounded-md">
            <div className="navbar-start ">
            <button className=" text-xl text-center  flex items-center justify-center gap-4 p-2 pr-4 hover:text-orange-300  border-2 rounded-full"  onClick={handleForm} ><i className="fa-solid fa-arrow-right transform -rotate-45 w-10 h-10 bg-btn rounded-full flex items-center justify-center "></i>  Log in</button>
            
             
             
            </div>
            <div className="navbar-center lg:flex hidden">
              <ul className="menu menu-horizontal px-1 gap-6 flex  ">
                <li><a> <span className="font-bold ">Home</span></a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
              
                <li><a>Contact Us</a></li>
              </ul>
            </div> 
            <div className="navbar-end">

                <div className="flex space-x-4 lg:space-x-8  items-center justify-center">

                <i className="fa-solid fa-magnifying-glass hidden rounded-full p-2  w-10 h-10  lg:flex items-center justify-center border text-lime-600 hover:text-gray-500"></i>
                
               
              

                
              <i className="fa-solid fa-bars lg:hidden w-2"></i>
            </div>

            </div>
        
          </div>

      </header>

     

{/* form  holding container */}

<section className=" bg-back_img bg-no-repeat bg-cover bg-center px-4 mb-0">

           {/* <p> {JSON.stringify(form)} </p> */}
      
      
   <div className="container mx-auto border-2 min-h-64 flex flex-col justify-center my-4  ">
            <div className="text-center ">
            <a className="btn bg-btn rounded-full bg-opacity-50 my-4"> <i className="fa-solid fa-arrow-right transform  w-10 h-10 rounded-full flex items-center justify-center "></i>Lets connect</a>
            <h1 className="font-bold text-6xl mb-4 border-lime-200">Let’s Join us</h1>
            <p className="mb-4">Feel free to ask for anything, in the comment below</p>
            </div>


  {/* FORM  */}

     <form className=" w-full lg:w-2/3 mx-auto" onSubmit={handleSubmit} > 

      <div className="  mx-auto   lg:flex lg:flex-row   lg:items-center lg:justify-center gap-8">

          <div className="  flex justify-center gap-8  mb-8 flex-col w-full">
             
               <input type="text" placeholder="First name " className="input border-4 w-full  rounded-2xl" name='firstName'  onChange={handleForm}
                /> 

               <input type="text" placeholder="Last name" className="input  border-4 w-full rounded-2xl" name='lastName' onChange={handleForm}/>
          </div> 

          <div className="flex justify-center gap-8  mb-8 flex-col  w-full">
            
               <input type="text" placeholder="Phone no " className="input  border-4 w-full  rounded-2xl" name='phone'
               onChange={handleForm}/>

               <input type="text" placeholder="Email" className="input  border-4 w-full rounded-2xl" 
               name='email' onChange={handleForm}/>
          </div>

      </div>

      
      <div className=" w-full  flex flex-col mx-auto justify-center align-center gap-8 my-2  ">

          <div className="text-center">
            <textarea name='comments ' className="textarea textarea-ghost h-36  w-full rounded-2xl border-2 bg-white" placeholder="Write massage" onChange={handleForm}></textarea>
          </div>

          <button className=" text-xl text-center  flex items-center justify-center gap-4 pl-2 pr-2 hover:text-orange-300  border-2 rounded-full"  onClick={handleForm} ><i className="fa-solid fa-arrow-right transform -rotate-45 w-10 h-10 bg-btn rounded-full flex items-center justify-center "></i>  Register User</button>
          
      </div>
     </form>
</div>

<div className=" w-full lg:w-2/3 mx-auto bg-slate-400 mb-4">
<p className='bg-yellow-200 text-center text-700 '>

Registered User list
</p>
<ul className='border-8 p-4'>
  {users.map((user) => (
    <li key={user._id} >{user.firstName}</li>
  ))}
</ul>

</div>

</section>


    
    </>
  );
}

export default App;
