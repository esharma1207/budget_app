import{
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Errors from './pages/Errors';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Main/>} loader={mainLoader} errorElement = {<Errors/>}>
      <Route index element = {<Dashboard/>} loader={dashboardLoader} errorElement= {<Errors/>} action={dashboardAction}/>
      <Route path = "logout" action={logoutAction}/>



      



      </Route>

 
  ));

function App() {
  

  
    return <div className='App'>
        <RouterProvider router = {router}/>
        <ToastContainer/>

    </div>
    

         

  
}

export default App;
