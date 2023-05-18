import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useState } from "react";
import './AddEdit.css';
import { Link } from "react-router-dom"

function AddEdit() {
   
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [location,setLocation] = useState("")
    const [email,setEmail] = useState("")
    const [dob,setDob] = useState("")
    const [education,setEducation] = useState("")



    const addEmployee = () => {
        axios.post('http://localhost:3001/create',{
           
         firstname:firstname,
         lastname:lastname,
         location:location,
         email:email,
         dob: dob,
         education:education
       
        }).then(()=>console.log('success'))
      }
      
      const getEmployee = () => {
        axios.get('http://localhost:3001/employees').then((response) =>{
         
        console.log(response.data)
      })
      }

      
        return (
         
          <>
          <div>
       
         <Link to ="/"> <button  class="button"> &larr;</button> </Link>
       
           <form onSubmit={addEmployee}>
           
            <label class="label" >First Name</label>
            <label class="label"> : </label>
            <input type="text" name="firstname" value={firstname}  onChange={(e)=> setFirstName (e.target.value)} />
            <label class="label1">Last Name</label>
            <label class="label1" > : </label>
            <input type="text" name="lastname" value={lastname} onChange={(e)=> setLastName (e.target.value)} /><br></br>
            <label class="label">Location</label>
            <label class="label"> : </label>
            <input type="text" name="location" value={location}  onChange={(e)=> setLocation (e.target.value)} /><br></br>
            <label class="label">email</label>
            <label class="label"> : </label>
            <input type="text" name="email" value={email}  onChange={(e)=> setEmail (e.target.value)} /><br></br>
            <label class="label" >DOB</label>
            <label class="label"> : </label>
            <input type="text" name="dob" value={dob}  onChange={(e)=> setDob (e.target.value)} /><br></br>
            <label class="label">Education</label>
            <label class="label" > : </label>
            <input type="text" name="education" value={education}  onChange={(e)=> setEducation (e.target.value)} /><br></br>
            <div class="about" ><label >About </label>
            <label class="about1"> :</label>
           <textarea class="about2 textarea3"></textarea></div><br></br>
            <button type="submit"  class="buttonsub" >Submit</button>

           </form>
          </div>
         
      
          </>
        );
      }
      export default AddEdit;
