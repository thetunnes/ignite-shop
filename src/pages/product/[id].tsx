import { useRouter } from "next/router"


export default function Product() {


  const router = useRouter()
  const { id } = router.query

  return (
    <h1>Product</h1>
  )
}