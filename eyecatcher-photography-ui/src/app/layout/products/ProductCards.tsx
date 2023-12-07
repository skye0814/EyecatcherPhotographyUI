import React, { useEffect } from 'react';
import '../../styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../../models/Product';
import { Button, Card, CardActions, Chip, Divider, List, ListItem, ListItemDecorator, Typography } from '@mui/joy';
import useCartStore from '../../store/cartStore';

interface Props {
    product: Product
}

export default function ProductCards({product}: Props){
  const addToCart = useCartStore((state) => state.addToCart);
  let freeTextArr: string[] = [];

  if(product.freeText1 !== null){
      freeTextArr = product.freeText1.split(';');
  }

  const addToCartButton = () => {
    const cartItem = {
      product,
      quantity: 1,
      amount: product.price
    };
    addToCart(cartItem);
  };
  
  return(

      <Card size="lg" variant="outlined">
      <Chip size="sm" variant="outlined" color="neutral">
        BASIC
      </Chip>
      <Typography level="h4">{product.productName}</Typography>
      <Divider inset="none" />
      <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          {freeTextArr.length !== 0 && 
              freeTextArr.map((info, index) => {
                  return(
                  <ListItem key={index}>
                      <ListItemDecorator>
                          <FontAwesomeIcon icon='check'/>
                      </ListItemDecorator>
                      {info}
                  </ListItem>
                  )
              })
          }
      </List>
      <Divider inset="none" />
      <CardActions>
        <Typography level="title-lg" sx={{ mr: 'auto' }}>
          {'₱'}{Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(product.price)}
        </Typography>
        <Button
          variant="soft"
          color="neutral"
          endDecorator={<FontAwesomeIcon icon='cart-plus' />}
          onClick={() => addToCartButton()}
        >
          Add now
        </Button>
      </CardActions>
    </Card>
  )
}