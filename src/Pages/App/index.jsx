import { BrowserRouter, useRoutes } from 'react-router-dom'
import SignIn from '../../SignIn'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import ShoppingCartProvider from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-orders/:orderId', element: <MyOrder /> },
    { path: '*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])
  return routes
}

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
