import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import LoginContainer from './containers/LoginContainer'
function App() {
  return (
    <div className="App">
      
      {/* <HeaderContainer/>
      <HomeContainer/> */}
      <LoginContainer/>

      
    </div>
  );
}

export default App;
