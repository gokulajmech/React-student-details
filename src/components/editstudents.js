import axios from 'axios';
import React,{useContext,useState,useEffect}from 'react';
import {useNavigate,useParams} from 'react-router-dom';
// import { studentContext } from '../App';


function Editstudents() {
    let navigate=useNavigate();
const [name,setName]=useState("");
const [graduate,setGraduate]=useState("");
const [department,setDepartment]=useState("");
const [email,setEmail]=useState("");
   
    // let context=useContext(studentContext);
    let params=useParams();
    // console.log(params.id);
    

    useEffect(() => {
        
        getData();
    },[]);
    
 const saveHandler=async()=>{
                                    await axios.put('https://614eabffb4f6d30017b482d6.mockapi.io/students/'+params.id,
                                    {
                                                               name: name,
                                                                degree:graduate,
                                                                department:department,
                                                                email:email
                                                            }).then(()=>navigate('/allstudents'));

                            };



let getData=async ()=> {
    await axios.get('https://614eabffb4f6d30017b482d6.mockapi.io/students/'+params.id).
    
    then(res=>{
        setName(res.data.name);
        setEmail(res.data.email);
        setGraduate(res.data.degree);
        setDepartment(res.data.department);
    
    });
   
}




return (
        <>
            <h1>Edit Student Details</h1>
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"  placeholder="Enter Student Name" onChange={(e)=>setName(e.target.value)} value={name}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="graduate">graduate</label>
                        <input type="text" className="form-control" id="graduate"  placeholder="Enter Student Degree" onChange={(e)=>setGraduate(e.target.value)} value={graduate}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">department</label>
                        <input type="text" className="form-control" id="department"  placeholder="Enter Student department" onChange={(e)=>setDepartment(e.target.value)} value={department}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" className="form-control" id="email"  placeholder="Enter Student email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={saveHandler}>Submit</button>
                </div>
        </>
    )
}

export default Editstudents;
