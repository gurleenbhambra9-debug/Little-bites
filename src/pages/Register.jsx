import '../assets/styles/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <section id="Register">
        <div className="container-Register">
            <h2 className="Register-h2">Create Account</h2>
            <p className="Register-p">Join Little Bites today</p>
            <form bindsubmit="" className="Register-form">
                <div className="form-group">
                    <input type="text" placeholder='enter your name'/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder='enter your email'/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder='enter your password'/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder='confirm your password'/>
                </div>
                <div className="form-group">
                    <button className="Register-btn">REGISTER</button>
                </div>
                <p className="form-p">Already have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    </section>
    </>
  )
}

export default Register