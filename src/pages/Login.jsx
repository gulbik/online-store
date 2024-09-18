import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { OtherContext } from '../context/OtherContext';


function Login() {
    const { handleLogin } = useContext(OtherContext);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginForm = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3001/users?username=${username}&&password=${password}`);
            const user = response.data[0];
            if ( user.username===username && user.password===password ) {
                handleLogin();
                navigate('/product-card');
            } else {
                alert('Invalid username or password')
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }
    return(
        <div className='container w-25'>
            <h2 className='my-4'>Login</h2>
            <form onSubmit={handleLoginForm}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            
                <button type="submit" className="btn btn-dark w-100 ">Login</button>
            </form>
        </div>
    );
}

export default Login;








   // const handleLogin = (event) => {
    //     event.preventDefault();

    //     if (username === 'user' && password === 'password') {
            
    //         localStorage.setItem('isLoggedIn', 'true');
    //         setAuthStatus(true);
            
    //         navigate('/product-card');
    //     } else {
    //         alert('Invalid credentials');
    //     }
    // };