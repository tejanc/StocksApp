import React, { useState } from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            setError: '',
            loading: '',
            setLoading: ''
        }
    }

    // handle button click of login form
    handleLogin = () => {
        
    }

    render() {
        const { username, password, error, setError, loading, setLoading } = this.state;
        return (
            <div>
                <br /><br />
                <h1>LOGIN</h1>
                <br /><br />
                <div>
                    Username<br />
                    <input type="text" {...username} autoComplete="new-password" />
                </div>
                <div style={{ marginTop: 10 }}>
                    Password<br />
                    <input type="password" {...password} autoComplete="new-password" />
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={this.handleLogin} disabled={loading} /><br />
                <br /><br />
                <br /><br />
            </div>
        );
    }
}