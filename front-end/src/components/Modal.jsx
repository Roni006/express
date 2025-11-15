import React from 'react'

const Modal = ({ onClick }) => {
  return (
    <>
      <div style={{ width: "500px", textAlign: "justify", backgroundColor: "green", color: "white", padding: "15px 30px", borderRadius: "18px",  }}>
        <h1>Modals</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem recusandae nulla, deserunt nihil quaerat tempora porro necessitatibus amet, cumque assumenda itaque saepe totam vero esse aliquam deleniti? Delectus, vero nihil animi aspernatur voluptatum autem, fuga maiores aut ducimus culpa maxime rerum? Nam, deleniti aliquid! Ratione voluptatum culpa ipsum quaerat eveniet.</p>
        <button onClick={onClick}>close</button>
      </div>
    </>
  )
}

export default Modal