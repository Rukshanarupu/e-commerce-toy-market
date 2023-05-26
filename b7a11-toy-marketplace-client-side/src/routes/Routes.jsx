import Login from '../Pages/Shared/Login';
import SignUP from '../Pages/Shared/SignUp';
import MainLayout from '../Layouts/MainLayout'
import { createBrowserRouter } from 'react-router-dom';
import ErrorElement from '../Pages/ErrorElement'
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog'
import Terms from '../Pages/Shared/Terms';
import Contact from '../Pages/Contact';
import PrivateRoute from './PrivateRoute';
import MyToys from '../Pages/MyToys/MyToys';
import ToyDetails from '../Pages/Home/Categories/ToyDetails';
import AddToys from '../Pages/AddToys';
import AllToys from '../Pages/AllToys/AllToys';
// import

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://animal-toy-market.vercel.app/allToys/${params.id}`),
      },
      {
        path: "addToy",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToy",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUP></SignUP>
      },
      {
        path: '/Signup/terms',
        element: <Terms></Terms>
      }
      
    ]
  }
  ])

export default router;