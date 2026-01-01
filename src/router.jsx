import { createBrowserRouter } from "react-router";

import {MainLayout} from "./layout/mainLayout";
import{Home} from "./containers/Home/index";
import{About} from "./containers/about/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <>404 not found</>,
         children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
         ]
    }
])


export default router