import { Fragment } from 'react'
import { Alert, Box } from '@mui/material'
import ProductCard from './ProductCard'

// ProductList renders each product card and handles no-stock messaging.
function ProductList({ products }) {
  const hasInStockProducts = products.some((product) => product.inStock)

  return (
    <>
      {/* Conditional rendering for the empty in-stock state. */}
      {!hasInStockProducts && (
        <Alert severity="warning" data-testid="no-stock-message" sx={{ mb: 2 }}>
          No products are currently in stock.
        </Alert>
      )}

      <Box display="grid" gap={2}>
        {products.map((product) => (
          <Fragment key={product.id}>
            <ProductCard product={product} />
          </Fragment>
        ))}
      </Box>
    </>
  )
}

export default ProductList
