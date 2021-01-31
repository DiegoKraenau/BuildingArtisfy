import generateStore from './redux/store';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';

function App() {

  
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])



  const store = generateStore();

  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/menu" exact>
            <Menu></Menu>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>

      </Provider>
    </Router>
  );
}

export default App;

