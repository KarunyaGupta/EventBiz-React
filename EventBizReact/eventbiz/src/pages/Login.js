import React from 'react';
import './assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your Login function here
    };

    return (
        <div className="container login-container" id="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" required id="username" />
                    <label>Username / Email</label>
                </div>
                <div className="user-box">
                    <input type="password" required id="userpass" />
                    <label>Password</label>
                </div>
                <div id="information">
                    <div id="remember">
                        <input type="checkbox" name="remember" id="remember" /> Remember me
                    </div>
                    <div id="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-custom">Submit</button>
                <p> Don't have an account?<a href="signin.html"> Register</a> </p>
            </form>
        </div>
    );
};

export default Login;