import { createContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart - Cart products
  const [cartProducts, setCartProducts] = useState([])
  const [items, setItems] = useState([])

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping Cart - Order
  const [order, setOrder] = useState([])

  // Get search filters
  const [searchByTitle, setSearchByTitle] = useState('')
  const [searchByCategory, setSearchByCategory] = useState('')

  // Fetch products
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setItems(data)
    }
    fetchItems()
  }, [])

  // Filter items
  const filteredItems = useMemo(() => {
    let filtered = items
    if (searchByTitle) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }
    if (searchByCategory) {
      filtered = filtered.filter((item) =>
        item.category.toLowerCase().includes(searchByCategory.toLowerCase())
      )
    }
    return filtered
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ShoppingCartProvider
