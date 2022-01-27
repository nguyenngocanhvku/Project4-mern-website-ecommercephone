import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart,handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart  }) => {
    // const isEmpty = !cart.line_items.length;
 

    const classes = useStyles();

    // some normal function returns some jsx
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, Start adding some!
            <Link to="/" className={classes.link}>Start adding some!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <div>{item.name}</div>  */}
                        <CartItem item={item} onUpdatedCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton } size="large" variant="contained" color="primary">Checkout</Button>
                    </div>

            </div>
        </>
    )

    if(!cart.line_items) return  '...loading';

    return (
        //Container here: is like div but it's has padding, margin, spacing...
        <Container> 
            <div className={classes.toolbar} />
            <Typography variant="h4" color="primary" className={classes.title} gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart

