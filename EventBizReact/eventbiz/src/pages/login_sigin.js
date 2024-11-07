import React, { useState, useEffect } from 'react';

const App = () => {
    const [userData, setUserData] = useState([]);
    const [userPass, setUserPass] = useState([]);
    const [userAge, setUserAge] = useState([]);
    const [userEmail, setUserEmail] = useState([]);

    useEffect(() => {
        const uname = localStorage.getItem('uname');
        const upass = localStorage.getItem('upass');
        const uage = localStorage.getItem('uage');
        const uemail = localStorage.getItem('uemail');

        setUserData(uname ? uname.split(",") : []);
        setUserPass(upass ? upass.split(",") : []);
        setUserAge(uage ? uage.split(",") : []);
        setUserEmail(uemail ? uemail.split(",") : []);
    }, []);

    const register = () => {
        let username = document.querySelector("#f_name").value;
        let userage = document.querySelector("#age").value;
        let useremail = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let cpassword = document.querySelector("#c_pass").value;

        let count = username.trim() === "" ? 0 : username.length;
        let pass_count = password.trim() === "" ? 0 : password.length;

        if (!username || !password || !cpassword || count === 0 || pass_count === 0 || !userage || !useremail) {
            alert("Please fill all the fields!!!!");
        } else {
            if (password === cpassword) {
                userData.push(username);
                userPass.push(password);
                userAge.push(userage);
                userEmail.push(useremail);
                savetolocal();
                alert("Congrats, User Created!!!");
            } else {
                alert("Check your Password, It does not match!!!");
                document.querySelector("#f_name").value = "";
                document.querySelector("#l_name").value = "";
                document.querySelector("#age").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";
                document.querySelector("#c_pass").value = "";
            }
        }
        if (userage > 85) {
            alert("Please enter valid age!!");
            document.querySelector("#age").value = "";
        }
    };

    const savetolocal = () => {
        localStorage.setItem("uname", userData);
        localStorage.setItem("upass", userPass);
        localStorage.setItem("uage", userAge);
        localStorage.setItem("uemail", userEmail);
    };

    const Login = () => {
        let uname_length = userData.length;
        let username_login = document.querySelector("#username").value;
        let userpass_login = document.querySelector("#userpass").value;
        let count = 0;
        if (!username_login || !userpass_login) {
            alert("Username or PassWord Cannot be empty");
        } else {
            for (let i = 0; i < uname_length; i++) {
                if (userData[i] === username_login && userPass[i] === userpass_login) {
                    count += 1;
                }
            }
        }
        if (count === 1) {
            alert("Access Granted");
        } else {
            alert("Incorrect Username or Password");
        }
    };

    return (
        <div>
            {/* Include your HTML form structure here */}
        </div>
    );
};

export default login_sigin;