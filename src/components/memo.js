import React,{useState,useMemo} from 'react'

function Memo() {
    let [theme,setTheme]=useState(false);
    let [n,setn]=useState(0);
 let double=useMemo(()=>{
        return calculate(n);
    })
    let style={
        background:theme?'black':'white',
        color:theme?'white':'black'
    }
    

    return (
        <>
        <input  onChange={(e)=>{setn(e.target.value)}} placeholder='Enter an Integer'></input>
        <button className='btn btn-success' onClick={()=>{setTheme(prev=>!prev)}}>{theme?'dark':'light'}</button>
        <div style={style}>{double}</div>
        </>
    )
}
function calculate(n){
    return n*2;
}
export default Memo
