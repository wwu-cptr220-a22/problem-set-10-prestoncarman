import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token')
    navigate('/login')
  }
  const navigate = useNavigate()
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token')
    console.log(authToken)
    if (authToken) {
      navigate('/home')
    }

    if (!authToken) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      Home Page

      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
