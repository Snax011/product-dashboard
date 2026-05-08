import { Card, CardContent, Chip, Typography } from '@mui/material'
import styles from '../styles/ProductCard.module.css'

// ProductCard applies CSS module styles based on in-stock status.
function ProductCard({ product }) {
  const availabilityLabel = product.inStock ? 'In Stock' : 'Out of Stock'

  return (
    <Card
      className={`${styles.card} ${product.inStock ? styles.inStock : styles.outOfStock}`}
      data-testid={`product-card-${product.id}`}
      elevation={product.inStock ? 2 : 0}
    >
      <CardContent>
        <Typography variant="h6" component="h2" className={styles.name}>
          {product.name}
        </Typography>

        <Typography variant="body1" className={styles.price}>
          ${product.price.toFixed(2)}
        </Typography>

        <Chip
          label={availabilityLabel}
          color={product.inStock ? 'success' : 'default'}
          size="small"
          className={styles.status}
        />
      </CardContent>
    </Card>
  )
}

export default ProductCard
