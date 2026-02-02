import { Route, Routes } from "react-router-dom"
import ProductDetail from "./pages/ProductDetail"
import Auth from "./pages/Auth"


function App() {

  return (
    <>
      {/* <ProductDetail /> */}



      <Routes>

        <Route path="/auth" element={<Auth />} />

      </Routes>

    </>
  )
}

export default App
