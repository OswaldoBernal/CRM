import { useAuth0 } from "@auth0/auth0-react"; 
import './App.css'
import LoginButton from './components/Login/Login'
import Topbar from './components/Topbar/Topbar'

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? <>
      <Topbar/>
      </>
    : <LoginButton />}
    </div>
  );
}
export default App;
