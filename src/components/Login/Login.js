import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <div className="login">
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="desc">
          <h1>Bienvenido a nuestro CRM</h1>
          <h2>Administración de visitas y clientes</h2>
        </div>
        <button onClick={() => loginWithRedirect()} class="btn-shine">
          <span>Login</span>
        </button>
      </section>
    </div>
  ) 
}


export default LoginButton;