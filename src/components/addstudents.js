import axios from 'axios';
import React,{useContext,useState}from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik, validateYupSchema} from 'formik';
import * as yup from 'yup';
// import { studentContext } from '../App';


function Addstudents() {

    let navigate=useNavigate();
const [name,setName]=useState("");
const [graduate,setGraduate]=useState("");
const [department,setDepartment]=useState("");
const [email,setEmail]=useState("");
   
    // let context=useContext(studentContext);

    
 const saveHandler=async(values)=>
 {
    await axios.post('https://614eabffb4f6d30017b482d6.mockapi.io/students', {
                                                                                name:values.name,
                                                                                degree:values.graduate,
                                                                                department:values.department,
                                                                                email:values.email
                                                                            }  );    
        navigate('/allstudents'); 

 }

const formik = useFormik({
    initialValues:{
        name:"",
        graduate:"",
        department:"",
        email:""
    },
    validationSchema:yup.object({
        name:yup.string().required('Required'),
        graduate:yup.string().required('Required'),
        department:yup.string(),
        email:yup.string().matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"Invalid Email").required('Required')
        // /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        // mobile:yup.string().mobile("Invalid mobile number").required('Required')
    }),
    onSubmit:values=>{
        // alert(JSON.stringify(values,null,2));
        saveHandler(values);
        // console.log(values);
    }
});



return (
    <>
    <h1>Add Student Details</h1>
        <form onSubmit={formik.handleSubmit}>
            <label for="name">Name</label>
            <input name='name' id='name' type="text" placeholder='Enter name' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input>
            {(formik.touched.name && formik.errors.name)?<div style={{color:'red'}}>{formik.errors.name}</div>:null}

            <label for="email">Email</label>
            <input name="email" id="email" type="email" placeholder="email" className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} ></input>
            {(formik.touched.email && formik.errors.email)?<div style={{color:'red'}}>{formik.errors.email}</div>:null}

            <label for="graduate">Degree</label>
            <input name="graduate" id="graduate" type="graduate" placeholder="degree" className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.graduate} ></input>
            {(formik.touched.graduate && formik.errors.graduate)?<div style={{color:'red'}}>{formik.errors.graduate}</div>:null}

            <label for="department">department</label>
            <input name="department" id="department" type="department" placeholder="department" className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.department} ></input>
            {(formik.touched.department && formik.errors.department)?<div style={{color:'red'}}>{formik.errors.department}</div>:null}

            <button className='btn btn-primary' type="submit">Submit</button>

        </form>
        </>
    )
}

export default Addstudents

// <>
//             <h1>Add Student Details</h1>
//                 <div>
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input type="text" className="form-control" id="name"  placeholder="Enter Student Name" onChange={(e)=>setName(e.target.value)} value={name}></input>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="graduate">graduate</label>
//                         <input type="text" className="form-control" id="graduate"  placeholder="Enter Student Degree" onChange={(e)=>setGraduate(e.target.value)} value={graduate}></input>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="department">department</label>
//                         <input type="text" className="form-control" id="department"  placeholder="Enter Student department" onChange={(e)=>setDepartment(e.target.value)} value={department}/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">email</label>
//                         <input type="text" className="form-control" id="email"  placeholder="Enter Student email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
//                     </div>

//                     <div className="form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                     </div>
//                     <button type="submit" className="btn btn-primary" onClick={saveHandler}>Submit</button>
//                 </div>
//         </>