import { Routes, Route, } from 'react-router-dom'
import Home from './routes/home/Home'
import './App.css'
import Liked from './routes/liked/Liked'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </>
  )
}

export default App
