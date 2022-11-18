import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../libs/stripe";

export default async function checkout(req: NextApiRequest, res: NextApiResponse) {

  const { priceId } = req.body


  if (req.method !== 'POST') {
    return res.status(405)
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found'})
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/cancel`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    cancel_url,
    success_url
  })
  
  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}