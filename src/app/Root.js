import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Home from './screens/Home'
import Products from './screens/Products'
import Bikes from './screens/Bikes'
import Accessories from './screens/Accessories'
import Addons from './screens/Addons'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import ThankYou from './screens/ThankYou'
import NotFound from './screens/NotFound'
import Footer from './components/Footer'
import '../assets/css/global.css'


const Root = () => {
  return (
    <HashRouter>
      <div>
        <div className="nav">
          <Header />
        </div>
        <div className="nav nav-mobile">
          <HeaderMobile />
        </div>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/bikes' component={Bikes} />
            <Route exact path='/accessories' component={Accessories} />
            <Route exact path='/addons' component={Addons} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/thank-you' component={ThankYou} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </div >
    </HashRouter>
  );
}

export default Root;
