import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
