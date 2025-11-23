import React, { useEffect } from 'react'

const Modal = ({ onClick }) => {
  useEffect(()=> {
    console.log("Component Mouting");

    return ()=>{
      console.log("UNmounting");
    }
  },[])
  return (
    <>
      <div style={{ width: "500px", textAlign: "justify", backgroundColor: "green", color: "white", padding: "15px 30px", borderRadius: "18px",  }}>
        <h1>Modals</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem recusandae nulla, deserunt nihil quaerat tempora porro necessitatibus amet, cumque assumenda itaque saepe totam vero esse aliquam deleniti? Delectus, vero nihil animi aspernatur voluptatum autem, fuga maiores aut ducimus culpa maxime rerum? Nam, deleniti aliquid! Ratione voluptatum culpa ipsum quaerat eveniet.</p>
        <button onClick={onClick} className='bg-amber-600 text-white px-2 mt-2 cursor-pointer'>close</button>
      </div>
    </>
  )
}

export default Modal