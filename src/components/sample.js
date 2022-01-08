import React,{useRef,useEffect,useState} from 'react'
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';

function Sample() {
    let [name,setname]=useState('');
    let inputref=useRef();

useEffect(()=>{
    console.log(name);
},[name]);

let rendercount=useRef(0);
useEffect(()=>{
     rendercount.current+=1;
     

})
let focus=()=>{
    inputref.current.focus();
}

let clear=()=>{
    setname(name.substring(0,name.length-1))
    console.log(name);
}
    return (
        <>
            <input type='text' ref={inputref} onChange={(e)=>{setname(e.target.value)}} value={name}></input>
            <span>my name is {name}</span>
            <span>render count {rendercount.current}</span>
            <div>
            <button className='btn btn-primary' onClick={focus}>focus</button>
            <button className='btn btn-primary' onClick={clear}>clear</button>
            </div>
            
        </>
    )
}

export default Sample
