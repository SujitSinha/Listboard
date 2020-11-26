import React, { useState } from 'react'
import '../Style/Common.scss';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    const history = useHistory();
    const handleClick = (e) => {
        if (username === ('ADMIN' || 'admin') && password === ('ADMIN' || 'admin')) {
            history.push('/card');
        }
        else {

            window.alert('Please type ADMIN/ADMIN as username and password');
        }
        e.preventDefault();
        console.log(document.getElementById('form'));
        setLoggedin(true);
    };
    const handleName = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div>
            <div className="form">
                <div className="forms">
                    Username
                <input type="text" onChange={handleName}></input>
                    <br>
                    </br>
                Password
                <input type="password" onChange={handlePassword}></input><br></br>
                    <Button variant="contained" size="small" color="secondary" type="Submit" onClick={handleClick}>Login</Button>
                </div>
            </div>

        </div>
    )
}

export default Login


