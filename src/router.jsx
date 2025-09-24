import React from "react";
import { createBrowserRouter} from 'react-router-dom'
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";


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
            }
        ]
    }
])
export default myRouter