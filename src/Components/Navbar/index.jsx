import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/16/solid'

export const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(ShoppingCartContext)

  return (
    <nav className='flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light '>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory('')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            onClick={() => context.setSearchByCategory('jewelery')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('electronics')}
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('furnitures')}
            to='/furnitures'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('toys')}
            to='/toys'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('others')}
            to='/others'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>alex@prueba.com</li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center '>
          <ShoppingBagIcon className='size-6 text-black'></ShoppingBagIcon>
          <p>{context.count}</p>
        </li>
      </ul>
    </nav>
  )
}
