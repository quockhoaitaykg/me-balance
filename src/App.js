import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import SignIn from "./pages/SignIn";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import './App.css';

function App() {
  const { Content } = Layout;
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/sign-up" exact component={SignUp} /> */}
        <Route path="/sign-in" exact component={SignIn} />
        <Redirect from="*" to="/sign-in" />
        {/* <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main> */}
      </Switch>
    </div>
  );
}

export default App;
