import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core"
import Pagination from "@material-ui/lab/Pagination"
import queryString from "query-string"
import React, { useEffect, useMemo, useState } from "react"
import { useHistory } from "react-router"
import { useLocation } from "react-router-dom"
import productApi from "../../../api/productApi"
import ProductListSkeleton from "../../../skeleton/ProductListSkeleton"
import ProductList from "../components/ProductList"
import FilterViewer from "./../components/filter/FilterViewer"
import ProductFilters from "./../components/ProductFilters"
import ProductSort from "./../components/ProductSort"

ListPage.propTypes = {}

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1",
  },
}))

function ListPage(props) {
  const classes = useStyles()
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  const location = useLocation()
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search)
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    }
  }, [location.search])

  const [page, setPage] = useState({
    limit: 10,
    total: 10,
    page: 1,
  })

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const { data, pagination } = await productApi.getAll(queryParams)
        setProductList(data)
        setPage(pagination)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    })()
  }, [queryParams])

  const handleChangePagination = (e, page) => {
    const newFilter = { ...queryParams, _page: page }
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilter),
    })
  }
  const handleChangeSort = (sort) => {
    const newFilter = { ...queryParams, _sort: sort }
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilter),
    })
  }
  const handleChangeFilters = (newFilters) => {
    const newFilter = { ...queryParams, ...newFilters, _page: 1 }
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilter),
    })
  }
  const handleChangeView = (newFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    })
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={3}>
              <ProductFilters onChange={handleChangeFilters} filters={queryParams}></ProductFilters>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={3}>
              <ProductSort onChange={handleChangeSort} currentSort={queryParams._sort}></ProductSort>
              <FilterViewer onChange={handleChangeView} filters={queryParams}></FilterViewer>
              {loading ? (
                <ProductListSkeleton length={10}></ProductListSkeleton>
              ) : (
                <ProductList data={productList}></ProductList>
              )}
              <Pagination
                mt={2}
                color="primary"
                size="medium"
                count={Math.ceil(page.total / page.limit)}
                page={page.page}
                onChange={handleChangePagination}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ListPage
