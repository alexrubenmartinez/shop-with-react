import { XMarkIcon } from '@heroicons/react/16/solid'
import PropTypes from 'prop-types'
export const OrderCard = ({ id, title, image, price, handleDelete }) => {
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className='size-6 text-black cursor-pointer'
        onClick={() => handleDelete(id)}
      />
    )
  } else {
    renderXMarkIcon = <></>
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2  '>
        <figure className='w-20 h-20 '>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={image}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div>
        <p className='text-lg font-medium'> {price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}
OrderCard.propTypes = {
  id: PropTypes.number,

  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
}
