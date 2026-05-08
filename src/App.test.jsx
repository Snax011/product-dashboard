import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import App from './App'
import ProductList from './components/ProductList'

describe('Product Dashboard', () => {
  it('renders product cards and applies filtering', () => {
    render(<App />)

    expect(screen.getByText('Product Dashboard')).toBeInTheDocument()
    expect(screen.getAllByText(/In Stock|Out of Stock/).length).toBeGreaterThan(0)

    const filterToggle = screen.getByRole('switch', {
      name: /filter in-stock products/i,
    })

    fireEvent.click(filterToggle)

    expect(screen.queryByText('Out of Stock')).not.toBeInTheDocument()
  })

  it('shows no-stock message when list has no in-stock products', () => {
    const outOfStockProducts = [
      { id: 1, name: 'Headphones', price: 59.99, inStock: false },
      { id: 2, name: 'Phone Case', price: 19.99, inStock: false },
    ]

    render(<ProductList products={outOfStockProducts} />)

    expect(screen.getByText(/No products in stock/i)).toBeInTheDocument()
  })
})
