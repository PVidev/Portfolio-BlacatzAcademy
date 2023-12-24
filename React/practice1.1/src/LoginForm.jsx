import React, { useRef } from 'react';

const LoginForm = () => {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const usernameValue = usernameRef.current.value;

    console.log('Потребителско име:', usernameValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Потребителско име:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <label>
        Парола:
        <input type="password" />
      </label>
      <br />
      <button type="submit">Вход</button>
    </form>
  );
};

export default LoginForm;