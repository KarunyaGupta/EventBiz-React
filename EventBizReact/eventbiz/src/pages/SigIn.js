import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/signin.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // call register function here
    };

    return (
        <div id="signin-page" className="container signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" name="firstName" required id="f_name" value={formData.firstName} onChange={handleChange} />
                    <label>First Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastName" required id="l_name" value={formData.lastName} onChange={handleChange} />
                    <label>Last Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="age" required id="age" value={formData.age} onChange={handleChange} />
                    <label>Age</label>
                </div>
                <div className="user-box">
                    <input type="email" name="email" required id="email" value={formData.email} onChange={handleChange} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required id="password" value={formData.password} onChange={handleChange} />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name="confirmPassword" required id="c_pass" value={formData.confirmPassword} onChange={handleChange} />
                    <label>Confirm Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                </button>
                <p> Already have account?<a href="login.html"> Login</a></p>
            </form>
        </div>
    );
};

export default SignIn;