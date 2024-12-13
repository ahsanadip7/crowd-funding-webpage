import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider.jsx';
import HomePage from './Homepage/HomePage.jsx';
import Login from './Authentication/Login.jsx';
import SignUp from './Authentication/SignUp.jsx';
import AddCampaign from './Private Route/AddCampaign.jsx';
import Main from './Homepage/Main.jsx';
import AllCampaign from './Private Route/AllCampaign/AllCampaign.jsx';
import MyCampaign from './Private Route/MyCampaign.jsx';
import Details from './Private Route/AllCampaign/Details.jsx';
import UpdateCamp from './Private Route/UpdateCamp.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children: [

      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: '/campaigns',
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path: 'login',
        element: <Login></Login>
      }
      ,
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
      ,
      {
        path: 'addCampaign',
        element: <AddCampaign></AddCampaign>
      },
      {
        path: 'myCampaign',
        element: <MyCampaign></MyCampaign>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AuthProvider>
  </StrictMode>,
)
