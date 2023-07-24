import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import SingleDetails from "../Page/SingleDetails/SingleDetails";



const router = createBrowserRouter([
    {
     path:'/',
    //  errorElement:<Error></Error>,
     element:<MainLayout></MainLayout>,
     children:[
         {
             path:'/',
             element:<Home></Home>
         },
         {
             path:'/user-info',
             element:<SingleDetails></SingleDetails>
         }
     ]
    }
])

export default router;