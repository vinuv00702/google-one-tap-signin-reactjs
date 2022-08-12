import logo from './logo.svg';
import './App.css';

function App() {

  const handleCredentialResponse = (response) =>{
    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <div id="g_id_onload"
            data-client_id="772838587090-gps7g9rk76qvkrt3nu2s1jqqgg93qrj1.apps.googleusercontent.com"
            data-login_uri="https://localhost:3000/"
            data-cancel_on_tap_outside="false"
            data-callback="handleCredentialResponse"
            data-context="signin">
          </div>
    </div>
  );
}

export default App;
