import { Badge, Menu, MenuItem } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { AddShoppingCart } from '@material-ui/icons'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Login from '../../feature/Auth/components/Login'
import Register from '../../feature/Auth/components/Register'
import { logout } from '../../feature/Auth/userSlice'
import { cartQuantitySelector } from '../../feature/Cart/cartSelecter'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}))

export default function Header() {
  const classes = useStyles()
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
  }

  const totalProduct = useSelector(cartQuantitySelector)

  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => state.user.current)
  const isLoggedIn = !!loggedInUser.id
  const [open, setOpen] = useState(false)

  const [mode, setMode] = useState(MODE.REGISTER)

  const [anchorEl, setAnchorEl] = useState(null)
  const openIcon = Boolean(anchorEl)
  const history = useHistory()

  const handleClickToCart = () => {
    history.push('/cart')
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseIcon = async () => {
    dispatch(logout())
    setAnchorEl(null)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleCloseBG = () => {
    setOpen(true)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" className={classes.title}>
            Tiki
          </Typography>
          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink className={classes.link} to="/products">
            <Button color="inherit">Products</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>
          <NavLink className={classes.link} to="/counter">
            <Button color="inherit">Count</Button>
          </NavLink>
          {isLoggedIn ? (
            <>
              <IconButton color="inherit" onClick={handleClickToCart}>
                <Badge badgeContent={totalProduct} color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
              <IconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={openIcon}
                onClose={handleCloseIcon}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleCloseIcon}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={handleClickOpen}>
              Register
            </Button>
          )}
        </Toolbar>

        <Dialog disableEscapeKeyDown open={open} onClose={handleCloseBG} aria-labelledby="form-dialog-title">
          <DialogContent>
            {mode === MODE.REGISTER && (
              <>
                <Register handleClose={handleClose}></Register>
                <Button onClick={() => setMode(MODE.LOGIN)} color="primary">
                  Login
                </Button>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login handleClose={handleClose}></Login>
                <Button onClick={() => setMode(MODE.REGISTER)} color="primary">
                  Register
                </Button>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    </div>
  )
}
