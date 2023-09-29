import logo from '../../img/logo.png';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import { AuthContext } from '../../context/auth';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, signed } = useContext(AuthContext)

    const handleSignIn = async (e) => {
      e.preventDefault();
      const data = {
        email,
        password,
      };

      await signIn(data);
    };

    if(signed) {
      return <Navigate to="/home" />;
    } else{

    return (
      <LayoutComponents>
          <form onSubmit={handleSignIn} className="login-form" method="post">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src={logo} alt=""></img>
            </span>
            <div className="wrap-input">
              <input required
                className='input' 
                type="email" 
                placeholder='email'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="wrap-input">
              <input required
                className='input' 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>

            <div className="container-login-form-btn">
              <button type='submit' className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="texto">Não possui conta?</span>
              <Link to="/register" className="texto2">
                Criar conta.
              </Link>
            </div>
          </form>
      </LayoutComponents>
    );
    };
};