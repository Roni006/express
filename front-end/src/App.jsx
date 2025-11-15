import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Discovery from './pages/Discovery'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import RootLayOuts from "./pages/RootLayOuts"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayOuts />}>
          <Route path="/" element={<Discovery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />

    </>

  )
}

export default App
