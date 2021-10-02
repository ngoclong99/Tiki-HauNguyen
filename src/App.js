import { Redirect, Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import Album from "./feature/Album"
import CartFilter from "./feature/Cart"
import CounterFeature from "./feature/Counter"
import ProductFeature from "./feature/Product"
import TodoFeature from "./feature/Todo"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Redirect from="/home" to="/"></Redirect>

        <Route path="/" component={TodoFeature} exact />
        <Route path="/counter" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={Album} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFilter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
