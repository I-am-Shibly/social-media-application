import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './register.css'

function Register() {

    let navigate = useNavigate()

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const handleClick = async (e) => {
        e.preventDefault()
        if (password.current.value !== passwordAgain.current.value) {
            passwordAgain.current.setCustomValidity("Password don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                await axios.post("http://localhost:5000/api/auth/register", user)
                navigate("/login")
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">ShiblySocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on ShiblySocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={handleClick} className="loginBox">
                        <input
                            placeholder="Username"
                            ref={username}
                            className="loginInput"
                            required
                        />

                        <input
                            placeholder="Email"
                            type="email"
                            ref={email}
                            className="loginInput"
                            required
                        />

                        <input
                            placeholder="Password"
                            type="password"
                            ref={password}
                            minLength="8"
                            className="loginInput"
                            required
                        />

                        <input
                            placeholder="Confirm Password"
                            type="password"
                            ref={passwordAgain}
                            className="loginInput"
                            required
                        />

                        <button type='submit' className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Login to your account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register