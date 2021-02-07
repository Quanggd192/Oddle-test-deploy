import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import history from './history';
import Navbar from "./container/GitUsers/Navbar";
import ListUsers from "./container/GitUsers/ListUsers";
import UserInfo from "./container/GitUsers/UserInfo";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br/>
        {loading ? <div className="loader-container">
          <div className="loader"></div>
        </div> : null}
        <BrowserRouter history={history}>
          <Switch>
            <Route path="/user/:login" component={UserInfo} />
            <Route path="/:query" component={ListUsers} />
            <Route path="/" component={ListUsers} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
