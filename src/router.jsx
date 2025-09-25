import React from "react";
import { createBrowserRouter} from 'react-router-dom'
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Category from "./pages/Category";
import Seafood from "./pages/Seafood";


export const myRouter = createBrowserRouter([
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"service",
                element:<Service/>
            },
            {
                path:"category",
                element:<Category/>
            },
            {
                path:"seafood/:title",
                element:<Seafood/>
            },
        ]
    }
])
export default myRouter