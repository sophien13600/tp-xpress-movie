import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/globalContext";
import api from "../../axios.config.js";

export default function LoginForm() {
  const { setIsAuthenticated, setUser } = useContext(GlobalContext);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  async function connexion(event) {
    event.preventDefault();
 

    try {
      const response = await api.post(
        "/connexion",
        {
          email: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

  

    
    } catch (error) {
      console.error("Erreur de connexion:", error);
  }
  return (
    <div className="form-container">
      <form onSubmit={connexion} className="auth-form">
        <h2>Connexion</h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            ref={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            ref={password}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-modern"
        >
        </button>
      </form>
    </div>
  );
}
}