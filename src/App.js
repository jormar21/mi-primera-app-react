// Estilos
import "./styles/loginpage.css";
import "./styles/App.css";
// Variables
import logo from "./resources/logo.svg";
// Componentes
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Jormar</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <LoginPage />
        <p>FIN</p>
      </header>
    </div>
  );
}

export default App;
