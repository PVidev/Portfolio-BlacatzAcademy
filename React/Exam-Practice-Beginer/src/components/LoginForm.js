import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      alert('Формата е валидна!');
    } else {
      alert('Моля, въведете валиден Email и парола.');
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  return (
    <form>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
        <label className="form-label" htmlFor="form2Example1">
          Електронна поща
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
        <label className="form-label" htmlFor="form2Example2">
          Парола
        </label>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Запомни ме
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Забравена парола?</a>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={handleSubmit}
      >
        Влез
      </button>

      <div className="text-center">
        <p>
          Нямаш регистрация? <a href="#!">Регистрация</a>
        </p>
        <p>Влез през:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;