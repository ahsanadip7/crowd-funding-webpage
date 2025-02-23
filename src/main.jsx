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
import DonatedData from './Private Route/DonatedData.jsx';
import HowToHelp from './Homepage/HowToHelp.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children: [

      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('https://assignment-10-server-site-ten.vercel.app/campaign'),
      },
      {
        path: '/campaigns',
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('https://assignment-10-server-site-ten.vercel.app/campaign')
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
        loader: () => fetch('https://assignment-10-server-site-ten.vercel.app/campaign')
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://assignment-10-server-site-ten.vercel.app/campaign/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({params}) => fetch(`https://assignment-10-server-site-ten.vercel.app/campaign/${params.id}`)
      },
      {
        path: 'donatedData',
        element: <DonatedData></DonatedData>,
        loader: () => fetch('https://assignment-10-server-site-ten.vercel.app/donatedCollection')
      },
      {
        path:'howToHelp',
        element: <HowToHelp></HowToHelp>
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
