import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UseStateExample from './components/UseStateExample'
import UseStateCustom from './components/UseStateCustom'
import UseEffectExample from "./components/UseEffectExample";
import UseEffectCustom from "./components/UseEffectCustom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UseEffectCustom />
        </Route>
        <Route path="/use-state-example">
          <UseStateExample />
        </Route>
        <Route path="/use-state-custom">
          <UseStateCustom />
        </Route>
        <Route path="/use-effect-example">
          <UseEffectExample />
        </Route>
      </Switch>
    </Router>
  )
}

export default App