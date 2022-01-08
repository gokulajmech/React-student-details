
import './App.css';
//  import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Addstudents from './components/addstudents';
import Allstudents from './components/allstudents.js';
import Editstudents from './components/editstudents';
import Sample from './components/sample';
import Memo from './components/memo';

// export const studentContext=React.createContext();
function App() {
  const dashboardData={
    monthly:'30,000',
    annually:'360000',
    task:'30%',
    pendingRequest:'20'

  };


  
        
//     name:'gokul',
//     graduate:'B.E',
//     department:'Mech',
//     email:'gokul@gmail.com'
// },
// {
//     name:'raj',
//     graduate:'B.E',
//     department:'electric',
//     email:'raj@gmail.com'
// }]
// );

// const newData=(data)=>{
//   console.log(data);
// }
  return (
  <>
  <Router>

    <div style={{display:"grid",gridTemplateColumns:'30% 70%'}}>
     <div> <Sidebar/></div>
     <div>
      <Routes>
        <Route path='/' element={<Dashboard value={dashboardData}/>}></Route>
        <Route path='/dashboard' element={<Dashboard value={dashboardData}/>}></Route>
        <Route path='/addstudents' element={<Addstudents/>}></Route> 
        <Route path='/allstudents' element={<Allstudents/>}></Route>
        <Route path='/editstudents/:id' element={<Editstudents/>}></Route>
        <Route path='/sample' element={<Sample/>}></Route>
        <Route path='/memo' element={<Memo/>}></Route>
      </Routes>
    </div>
    </div>
 
  </Router>
</> 
);
}

export default App;
