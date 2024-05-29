import App from "./App";
import Home from "./Pages/home";
import ErrorPage from "./Pages/errorPage";


const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]


export default routes
