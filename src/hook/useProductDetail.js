import { useEffect, useState } from "react"
import productApi from "../api/productApi"

function useProductDetail(productId) {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const response = await productApi.get(productId)
        setProduct(response)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    })()
  }, [productId])

  return { product, loading }
}

export default useProductDetail
