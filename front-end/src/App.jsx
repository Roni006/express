import { useRef, useState } from "react"
import Modal from "./components/Modal";
import { useEffect } from "react";
import axios from "axios";



function App() {
  let [products, setAllProducts] = useState([])
  let [modalOPen, setModalOPen] = useState('');
  const handleModal = () => {
    setModalOPen(!modalOPen)
  }

  const fetchData = async () => {
    // let data = await axios.get("http://localhost:5173/api/product/all");
    let data = await axios.get("https://niet-ia.onrender.com/api/product/all");
    setAllProducts(data.data.data)
    console.log(data.data.data);

  }


  useEffect(() => {
    console.log("useEffect");
  }, [modalOPen])

  useEffect(() => {
    fetchData();
  }, []);

  const ref = useRef();



  return (
    <>
      {modalOPen && <Modal onClick={handleModal} />}
      <h1 className="text-2xl font-medium">Click the button to open the modal</h1>
      <button className='bg-amber-600 text-white px-2 py-2 mt-2 cursor-pointer rounded-md font-bold' onClick={handleModal}>Click to open</button>
      {
        products.map((product, i) => (
          <h1 className="
          text-2xl font-medium" key={i}>{product.name}</h1>
        ))}

      <button
        ref={ref}
        onClick={() => {
          ref.current.style.backgroundColor = "blue";
          ref.current.style.color = "white";
          ref.current.style.padding = "8px 15px";
          ref.current.style.borderRadius = "8px";
        }}
      >UseRef</button>
    </>

  )
}

export default App
