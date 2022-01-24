// import logo from './logo.svg';
import Topbar from './components/topbar/Topbar.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Settings from './pages/settings/Settings.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

function App() {
  return (
    <>
      <Topbar/>
      {/* <Settings/> */}
      <Register />
    </>
  );
}

export default App;
