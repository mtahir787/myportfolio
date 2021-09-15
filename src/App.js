import './App.css';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Projects from './Projects';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
