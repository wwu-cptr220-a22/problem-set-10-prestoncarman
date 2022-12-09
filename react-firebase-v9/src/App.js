import { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Common/Form'
import Home from './Components/Home'
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import { app } from './firebase-config' // eslint-disable-line
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleAction = (id) => {
<<<<<<< HEAD
    console.log("handle")
    const authentication = getAuth();
=======
    const authentication = getAuth()
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }
>>>>>>> solution
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use')
          }
        })
    }
  }

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])
  return (
    <div className='app'>
      <>
        <ToastContainer />
        <Routes>
          <Route
            path='/login'
            element={
              <Form
                title='Login'
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
}
          />
          <Route
            path='/register'
            element={
              <Form
                title='Register'
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
}
          />

          <Route
            path='*'
            element={
              <Home />
}
          />
        </Routes>
      </>
    </div>
  )
}

export default App
