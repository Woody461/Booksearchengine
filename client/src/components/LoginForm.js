// client/src/components/LoginForm.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });
      // Save the returned token to local storage or cookies for authentication
      // You can handle the login success logic here
      console.log(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default LoginForm;
