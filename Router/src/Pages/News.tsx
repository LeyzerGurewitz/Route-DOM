import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const News = () => {
    const idRef = useRef<HTMLInputElement>(null);
    const useNav = useNavigate();

    const movePage = ()=>{
        if(idRef.current && idRef.current.value){
           useNav( `/users/${idRef.current.value}`)
        }
    }
  return (
    <div>
        <h1>this is news page</h1>
        <input ref={idRef} type="text" />
        <button onClick={movePage}>move to user page</button>
    </div>
  )
}

export default News