import React, { useEffect, useState } from 'react'
import './App.css';
import API_URL from './config'

function App() {
  const [successMessage, setSuccessMessage] = useState() 
  const [failureMessage, setFailureMessage] = useState() 

  useEffect(() => {
    const getId = async () => {
      try {
        const resp = await fetch(API_URL)
        setSuccessMessage((await resp.json()).id)
      }
      catch(e) {
        setFailureMessage(e.message)
      }
    }
    getId()
  })

  return (
    <div className="App">
      <p>65559767-2025-4de7-8f37-b895c9fcd784</p>
    </div>
  );
}

export default App;
