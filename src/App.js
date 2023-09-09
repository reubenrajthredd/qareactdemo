import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <>
    <div>
      <nav class="navbar is-white has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item"><img src="assets/logo.png" /></a>
        </div>
        <div class="navbar-menu" id="nav-links">
          <div class="navbar-end">
            <LoginButton />
            <LogoutButton />
         </div>
      </div>
      </nav>
      {/* <nav class="navbar is-white has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="assets/logo.png" style="max-height: 70px" class="py-2 px-2" />
      </a>
    </div>
  
    <div class="navbar-menu" id="nav-links">
      <div class="navbar-end">
        <a class="navbar-item">My Account</a>
        <a class="navbar-item">Shopping Cart (0)</a>
      </div>
    </div>
  </nav> */}
      
    </div>
      </>

  );
}

export default App;
