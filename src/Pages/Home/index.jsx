import { useContext } from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

export default function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item) => <Card key={item.id} data={item} />)
    } else {
      return <p>No Results Found</p>
    }
  }

  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        className='w-80 p-2 rounded-lg border mb-4 focus:outline-none'
        onChange={(e) => context.setSearchByTitle(e.target.value)}
        placeholder='Search a product...'
      />
      <div className='grid grid-cols-4 w-full gap-3 max-w-screen-lg'>{renderView()}</div>
      <ProductDetail />
    </Layout>
  )
}
