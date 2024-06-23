import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const date = new Date()
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }
    context.setCount(0)
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu() // Cerrar el menú lateral después de hacer checkout
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex flex-col ' : 'hidden' // Asegurar que la clase y el estado coincidan
      } top-20 fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] scrollable-cards`}
    >
      <div className='flex justify-between items-center px-6 py-2'>
        <h2 className='font-medium text-xl'>Product Detail</h2>
        <div onClick={() => context.closeCheckoutSideMenu()} className='cursor-pointer'>
          <XMarkIcon className='size-6 text-black' />
        </div>
      </div>
      <hr />

      <div className='flex flex-col mt-2 overflow-y-scroll'>
        {context.cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            key={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mt-auto'>
        <p className='flex justify-between items-center'>
          <span className='text-black font-semibold'>Total: </span>
          <span className='font-medium text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
      <Link to='/my-order/last'>
        <button
          onClick={() => handleCheckout()}
          className='w-full rounded-b bg-black text-white py-3'
        >
          Checkout
        </button>
      </Link>
    </aside>
  )
}
