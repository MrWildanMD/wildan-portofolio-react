/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/Home';
import Portofolio from '../pages/portofolio/Portofolio';
import Services from '../pages/services/Services';

export const router = createHashRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/services', element: <Services></Services> },
      { path: '/projects', element: <Portofolio></Portofolio> },
      { path: '/about', element: <About></About> },
      { path: '/contact', element: <Contact></Contact> },
    ],
  },
]);
