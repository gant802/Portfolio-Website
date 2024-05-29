import App from "./App";
import Home from "./Pages/home";
import ErrorPage from "./Pages/errorPage";
import ContactMe from "./Pages/contactMe";
import PortfolioPage from "./Pages/portfolioPage";
import BlogPage from "./Pages/blogPage";


const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact-me",
                element: <ContactMe />
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />
            },
            {
                path: "/blog",
                element: <BlogPage />
            }
        ]
    }
]


export default routes
