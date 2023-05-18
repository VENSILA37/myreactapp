
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";
import  edit from"./images/edit.jpeg";
import  delete1 from"./images/delete1.jpeg";

const Home = () => {
    const [data, setData] = useState([]);
    const loadData= async () =>{
        const response = await axios.get("http://localhost:3001/employees");
        setData(response.data);

    };
    useEffect(() =>{
        loadData();
    
    },[]);


    const deleteEmployee = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            axios.delete(`http://localhost:3001/api/remove/${id}`);
           
            toast.success("Contact deleted succesfully");
            setTimeout(() => loadData(), 500);
        }
    };
   

    return (
        <div>
            
           <div>
            <div >
            <div class="head1"><h3>Student Management System</h3>
            <Link to="/addrecord">
            <button class="button1">ADD</button></Link>
            </div>
            </div>
           <textarea class="textarea1" placeholder="Search...."></textarea><br></br><br></br><br></br>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Dob</th>
                        <th>Education</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                              
                                <td>{item.firstname} </td>
                                <td>{item.lastname} </td>
                                <td>{item.location} </td>
                                <td>{item.email} </td>
                                <td>{item.dob} </td>
                                <td>{item.education} </td>
                                <td>
                                    <Link to={`/update/${item.id}`}><img src={edit} alt="edit" width="16"></img>Edit</Link></td>
                                <td><Link><button class="button2" onClick={() => deleteEmployee(item.id)}><img src={delete1} alt="delete" width="16"></img>Delete</button></Link></td>
                                     </tr>
                        )
                    })}
                </tbody>
            </table>
           </div>
        </div>
    )
}
export default Home;