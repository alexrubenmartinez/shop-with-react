import { XMarkIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex flex-col top-20' : 'hidden top-20'
      } fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className='flex justify-between items-center px-6 py-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => context.closeProductDetail()} className='cursor-pointer'>
          <XMarkIcon className='size-6 text-black' />
        </div>
      </div>
      <hr />
      <div className='flex flex-col overflow-y-auto mt-2'>
        <figure className='px-6'>
          <img
            className='w-full h-full rounded-lg'
            src={context?.productToShow.image}
            alt={context?.productToShow.title}
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl'>$ {context.productToShow.price}</span>
          <span className='font-medium text-md'>{context.productToShow.title}</span>
          <span className='font-light text-xs'>{context.productToShow.description}</span>
        </p>
      </div>
    </aside>
  )
}
