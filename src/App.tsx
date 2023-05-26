import React, { useState } from "react"
import './App.css'
import Cats from "./components/Cats";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cookie bot</h1>
      <h2>Cat API</h2>
      <a href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t">
        Documentation
      </a>
      <Cats/>
    </>
  )
}

export default App
