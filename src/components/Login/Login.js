import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin:'20px'}}>
            <button>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder="Your Email"/>
                <br />
                <input type="password" placeholder="Your Password"/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;