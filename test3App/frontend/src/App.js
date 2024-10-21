import React from 'react';
import './RegisterForm.css';
import './LoginForm.css';
import './ProfileSettings.css';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProfileSettings from './ProfileSettings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <RegisterForm />
        <LoginForm />
        <ProfileSettings />
      </main>
      <footer>
        <p>&copy; 2023 My React App</p>
      </footer>
    </div>
  );
}

export default App;
