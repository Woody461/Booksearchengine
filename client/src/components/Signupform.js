// client/src/components/SignupForm.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });
      // Save the returned token to local storage or cookies for authentication
      // You can handle the signup success logic here
      console.log(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default SignupForm;
