import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Имя: Карпикова Софья Павловна
        </p>
        <p>
          Должность: Fullstack-разработчик
        </p>
        <p>
          Опыт: 2019-2024
        </p>
        <p>
          Технологии: PHP, Symfony, PostgreSQL, JS, VueJS
        </p>
        <p>
          Цель: изучить фреймворк React для выполнения задач на новом проекте
        </p>
      </header>
    </div>
  );
}

export default App;
