import React from "react";
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

const Aside = () => {
    return (
      <BrowserRouter>
        <>
          <ul>
            <li>
              <NavLink to="/main">Strona Główna</NavLink>
            </li>
            <li>
              <NavLink to="/products">Produkty</NavLink>
            </li>
            <li>
              <NavLink to="/me"> O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </>
      </BrowserRouter>
    );
};

export default Aside;
