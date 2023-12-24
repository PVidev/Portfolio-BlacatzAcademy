import React from 'react';
import Counter from './Counter';
import Button from './Button';
import LoginForm from './LoginForm';
import NameList from './NameList';
import Clock from './Clock';


const App = () => {
  document.title = 'Изпит React за начинаещи!'
  return (
    <>
      <div>
        <h1>Practice 1</h1>
        <Button label="Натисни ме" />
      </div>
      <div>
        <h1>Practice 2</h1>
        <Counter />
      </div>
      <div>
        <h1>Practice 3</h1>
        <LoginForm />
      </div>
      <div>
        <h1>Practice 4</h1>
        <NameList />
      </div>
      <div>
        <h1>Practice 5</h1>
        <Clock />
      </div>
    </>
  );
};

export default App;