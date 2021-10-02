import { Box, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { useEffect, useMemo, useState } from "react"
import categoryApi from "./../../../../api/categoryApi"
import ProductCategorySkeleton from "./../../../../skeleton/ProductCategorySkeleton"

ProductFilterCategory.propTypes = {
  onChange: PropTypes.func,
}

function ProductFilterCategory({ onChange }) {
  const [category, setCategory] = useState([])
  const [loading, SetLoading] = useState(false)
  const [isMouted, setIsMouted] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        SetLoading(true)
        setIsMouted(true)
        if (isMouted === true) {
          const response = await categoryApi.getAll()
          setCategory(
            response.map((item) => ({
              id: item.id,
              name: item.name,
            }))
          )
        }
      } catch (error) {
        console.log(error)
      }
      SetLoading(false)
    })()
    return () => {
      setIsMouted(false)
    }
  }, [isMouted])

  const handleClickCategory = (id) => {
    if (onChange) onChange(id)
  }

  // eslint-disable-next-line no-unused-vars
  const saveCategory = useMemo(() => {
    localStorage.setItem("category", JSON.stringify(category))
  }, [category])

  return (
    <Box>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      {loading ? (
        <ProductCategorySkeleton length={4} />
      ) : (
        <div>
          {category.map((item) => (
            <Typography align="center" key={item.id} onClick={() => handleClickCategory(item.id)}>
              {item.name}
            </Typography>
          ))}
        </div>
      )}
    </Box>
  )
}

export default ProductFilterCategory
