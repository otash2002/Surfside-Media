import Footer from './lyout/Footer';
import Header from './lyout/Header';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contactus from './pages/Contactus'
import Login from './pages/Login';
import Register from './pages/Register'
import Chekout from './pages/Chekout'
import NotFound from './pages/NotFound';


function App () {

    return (
      <>
        <Header/>
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/checkout" component={Chekout} />
            <Route component={NotFound} />


          </Switch>

        </main>
        <Footer/>

      </>
    );
  
}


export default App;
