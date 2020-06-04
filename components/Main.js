import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainSite from '../layout/MainSite';
import MeSite from '../layout/MeSite';
import Products from '../layout/Products';
import Contact from '../layout/Contact';


const Main = () => {
    return (
      <>
        <Switch>
          <Route path="/main" component={MainSite} />
          <Route path="/products" component={Products} />
          <Route path="/me" component={MeSite} />
          <Route path="/contact" component={Contact} />
          <Route component={MainSite} />
        </Switch>
      </>
    );

}

export default Main;