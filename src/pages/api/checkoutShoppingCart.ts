import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../libs/stripe";

export default async function checkoutShoppingCart(req: NextApiRequest, res: NextApiResponse) {

  const { listPriceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405)
  }

  if (!listPriceId) {
    return res.status(400).json({ error: 'Price not found'})
  }

  const success_url = `${process.env.NEXT_URL}/purchase?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/cancel`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: listPriceId,
    cancel_url,
    success_url
  })
  
  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}