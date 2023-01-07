/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
