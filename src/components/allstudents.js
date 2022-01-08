import axios from 'axios';
import React,{useContext,useState,useEffect} from 'react';
// import { studentContext } from '../App';
import {useNavigate} from 'react-router-dom';

function Allstudents() {
    let [data,setData]=useState([]);

    let navigate=useNavigate();

    useEffect(()=>{
        getData();
      },[]);
        
    // let getData= async ()=>{
    //       await fetch('https://614eabffb4f6d30017b482d6.mockapi.io/students').
    //       then(response=>response.json()).
    //       then(res=>setData(res));
    //     };

    let getData=async ()=>{
       let d = await axios.get('https://614eabffb4f6d30017b482d6.mockapi.io/students').then((res)=>setData(res.data))
       
    }
        
        

    let deleteHandle =  async (id)=>{
            await axios.delete('https://614eabffb4f6d30017b482d6.mockapi.io/students/'+id).then(()=>getData());
        };

    return (<>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">graduate</th>
      <th scope="col">department</th>
      <th scope="col">email</th>
      <th scope="col">option</th>
    </tr>
  </thead>
  <tbody>
    
        {
            data.map((e,i)=>{
                // console.log(e.graduate);
                return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.degree}</td>
                    <td>{e.department}</td> 
                    <td>{e.email}</td>
                    <td>
                        <button className='btn btn-info' onClick={()=>navigate('/editstudents/'+e.id)}>Edit</button>&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-warning' onClick={()=>{deleteHandle(e.id)}}>Delete</button>
                    </td>
                </tr>
                )
                
            })
        }
    
  </tbody>
</table>
    </>
        
    )
   
}

export default Allstudents;
