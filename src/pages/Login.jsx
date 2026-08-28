import '../assets/styles/Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <section id="login">
        <div className="container-login">
            <h2 className="login-h2">Welcome Back!</h2>
            <p className="login-p">Login to your account</p>
            <form bindsubmit="" className="login-form">
                <div className="form-group">
                    <input type="email" placeholder='enter your email'/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder='enter your password'/>
                </div>
                <div className="form-group">
                    <button className="login-btn">LOGIN</button>
                </div>
                <p className="form-p">Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login