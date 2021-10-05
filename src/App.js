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
import useServices from './Hooks/useServices';
import { createContext } from 'react';
import Teachers from './Components/Teachers/Teachers';
import Committee from './Components/Committee/Committee';
export const MyContext = createContext();
function App() {
  const [services] = useServices([]);
  const x1 = services;
  //console.log(x1);
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
            <MyContext.Provider value={x1}>
              <ServiceDetail></ServiceDetail>
            </MyContext.Provider>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route path='/college-committee'>
            <Committee></Committee>
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
