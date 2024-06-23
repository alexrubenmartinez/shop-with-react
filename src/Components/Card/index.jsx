import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartContext } from '../../Context'
import { CheckIcon, PlusIcon } from '@heroicons/react/16/solid'

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext)
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (e, productData) => {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id)

    if (isInCart) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center rounded-full bg-black w-6 h-6 text-black text-xs m-2 p-1'>
          <CheckIcon className='size-6 text-white'></CheckIcon>
        </div>
      )
    } else {
      return (
        <div
          onClick={(e) => addProductsToCart(e, data)}
          className='absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 text-black text-xs m-2 p-1'
        >
          <PlusIcon className='size-6 text-black'></PlusIcon>
        </div>
      )
    }
  }

  return (
    <div
      onClick={() => showProduct(data)}
      className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg m-2 text-black text-xs px-3 py-0.5'>
          {data.category}
        </span>
        <img
          src={data.image}
          alt={data.title}
          className='w-full h-full object-cover rounded-t-lg'
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-xs font-light'>{data.title}</span>
        <span className='text-lg font-medium'>{data.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Card
