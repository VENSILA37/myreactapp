import React from "react";
import { BrowserRouter, useParams} from 'react-router-dom';
import {Routes,Route, useNavigate} from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState, useEffect,setState } from "react";
import './AddEdit.css';
import { Link } from "react-router-dom"


function UpdateEmp() {
  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:3001/edit/' +id)
    .then(res => {
     
      setFirstName(res.item[0].FirstnName);
      setLastName(res.item[0].LastName);
      setLocation(res.item[0].Location);
      setEmail(res.item[0].Email);
      setDob(res.item[0].Dob);
      setEducation(res.item[0].Education);
    })
    .catch(err => console.log(err));
   }, [])


  const [firstname,setFirstName] = useState([]);
  const [lastname,setLastName] = useState([])
    const [location,setLocation] = useState([])
    const [email,setEmail] = useState([])
    const [dob,setDob] = useState([])
    const [education,setEducation] = useState([])

  

   const navigate = useNavigate();

      const hanldeUpdate = (e) => {
      e.preventDefault();
    axios.put('http://localhost:3001/update/' +id, {firstname,lastname,location, email,dob,education})
    .then(res => {
      if(res.item.updated){
navigate('/')
      }else{
        alert("Not updated");
      }
    })
   }
    
        return (
         
          <>
          <div><h2>update</h2>
          <Link to ="/"> <button  class="button"> &larr;</button> </Link>
       
           <form onSubmit={hanldeUpdate}>
           
            <label class="label" >First Name</label>
            <label class="label"> : </label>
            <input type="text" name="firstname" value={firstname}  onChange={e => setFirstName (e.target.value)} />
            <label class="label1">Last Name</label>
            <label class="label1" > : </label>
            <input type="text" name="lastname" value={lastname} onChange={e=> setLastName (e.target.value)} /><br></br>
            <label class="label">Location</label>
            <label class="label"> : </label>
            <input type="text" name="location" value={location}  onChange={e=> setLocation (e.target.value)} /><br></br>
           <label class="label">email</label>
           <label class="label"> : </label>
            <input type="text" name="email" value={email}  onChange={e=> setEmail (e.target.value)} /><br></br>
            <label class="label" >DOB</label>
            <label class="label"> : </label>
            <input type="text" name="dob" value={dob}  onChange={e=> setDob (e.target.value)} /><br></br>
            <label class="label">Education</label>
            <label class="label" > : </label>
            <input type="text" name="education" value={education}  onChange={e=> setEducation (e.target.value)} /><br></br>
            <div class="about" ><label >About </label>
            <label class="about1"> :</label>
           <textarea class="about2 textarea3"></textarea></div><br></br>
            <button type="submit"  class="buttonsub" >Submit</button>

           </form>
          </div>
         
      
          </>
        );
      }
      export default UpdateEmp;
