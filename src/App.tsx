
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.component.tsx'
import Home from './components/Home.component.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index key="index" element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
