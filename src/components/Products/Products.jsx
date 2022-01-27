import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd621da3-4947-4ade-bcde-67879e04dc2a/zoom-fly-4-road-running-shoes-HMG6C0.png'},
//     {id: 2, name: 'Macbooks ', description: 'Apple macbook', price: '$10', image: 'https://9to5mac.com/wp-content/uploads/sites/6/2021/10/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large_2x.jpg?quality=82&strip=all&w=1538'} ];

const Products = ( {products, onAddToCart} ) => {   
    const classes = useStyles()
    
    return (
        <main className={classes.content}>
            <div className= {classes.toolbar} />
            <Grid container justify="center" spacing={4}> 
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid> 
                ))}
            </Grid>
         </main>
    )
 
}

export default Products;