import PropTypes from 'prop-types'
export const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className='flex justify-center items-center mb-3 border border-black  rounded w-80 p-4 '>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col justify-between'>
          <span className='font-light'>01.02.03</span>
          <span className='font-light'>$ {totalProducts} articles</span>
        </div>
        <div className='flex justify-end'>
          <span className=' text-blue-500'>{totalPrice}</span>
        </div>
      </div>
    </div>
  )
}
OrdersCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
}

export default OrdersCard
