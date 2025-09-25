import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"
import axios from "axios"

export default function Login() {
    const { setIsAuthenticated } = useContext(GlobalContext)
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    function connexion(event) {
        event.preventDefault()
     axios.post('/connexion', {
    email: {email} ,
    password: {password}
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});
        


        if (email.current.value == 'admin' && password.current.value == 'admin') {
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
             setIsAuthenticated(true)
            navigate('/')
        } 
    }
    return(
    <div className="form-container">
      <form action="/connexion" onSubmit={connexion} className="auth-form">
        <h2>Connexion</h2>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email" id="email" ref={email}  />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            ref={password}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-modern">
          Se connecter
        </button>
      </form>
    </div>
  );
}
