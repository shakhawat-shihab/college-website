import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo/Logo';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import LogIn from './Components/LogIn/LogIn';
function App() {
  return (
    <div className='font-poppin'>
      <BrowserRouter>
        <Logo></Logo>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route path='/service/:serviceId'>
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
