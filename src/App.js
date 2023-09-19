import './App.css';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function callApi() {
    axios.get('http://localhost:4000/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }

  async function callProtectedApi() {
    const token = await getAccessTokenSilently();
    console.log(token);
  }

  return (
    <div className="App">
      <h1>Auth0 Authentication</h1>
      <ul>
        <li><button onClick={loginWithPopup}>Login with Popup</button></li>
        <li><button onClick={loginWithRedirect}>Login with Redirect</button></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
      <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>

      <ul>
        <li><button onClick={callApi}>Call Api route</button></li>
        <li><button onClick={callProtectedApi}>Call Protected Route</button></li>
      </ul>

      {isAuthenticated && (<pre style={{ textAlign: 'start' }}>{JSON.stringify(user, null, 2)}</pre>)}
    </div>
  );
}

export default App;
