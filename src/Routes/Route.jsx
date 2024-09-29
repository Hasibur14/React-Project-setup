
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/service',
                element: <></>
            },
            {
                path: '/service/:id',
                element: <>service</>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },

        ]
    }
])

export default router;
