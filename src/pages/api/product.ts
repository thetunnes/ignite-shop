import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import Stripe from 'stripe';
import { stripe } from '../../libs/stripe';

export default async function product(req: NextApiRequest, res: NextApiResponse) {
  let { idsProduct } = req.query

  if(typeof idsProduct === 'string') {
    idsProduct = idsProduct.split(',')
  }

  const response = await stripe.products.list({
    expand: ['data.default_price'],
    ids: idsProduct,
  }, )
  const listProducts = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return ({
    name: product.name,
    id: product.id,
    imageUrl: product.images[0],
    price: price.unit_amount / 100
  })})


  return res.status(200).send({message: 'Get List Products with Success', list: listProducts})

}