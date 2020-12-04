import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import MainNavigation from "./Components/MainNavigation";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import TableData from "./Pages/TableData";
import DetailKelompokDesa from "./Pages/DetailKelompokDesa";

const initialState = {
  auth: localStorage.getItem("disbun-token") ? true : false,
  mainUrl: "",
  snack: false,
  snackMessage: "",
  jenisMap: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setAuth":
      return { ...state, auth: action.payload };
    case "setJenisMap":
      return { ...state, jenisMap: action.payload };
    case "setSnack":
      return {
        ...state,
        snack: action.payload ? true : false,
        snackMessage: action.payload,
      };
    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const setAuth = React.useCallback(
    (newState) => dispatch({ type: "setAuth", payload: newState }),
    []
  );
  const setSnack = React.useCallback(
    (newState) => dispatch({ type: "setSnack", payload: newState }),
    []
  );

  React.useEffect(() => {
    var url2 = new URL(window.location);
    dispatch({
      type: "setMainUrl",
      payload: url2.origin,
    });
  }, []);
  return (
    <React.Fragment>
      <Router>
        <AppProvider value={{ ...state, setAuth, dispatch, setSnack }}>
          <MainNavigation />
          <React.Suspense fallback={<React.Fragment></React.Fragment>}>
            <main>
              <Switch>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/' exact component={Home}></Route>
                <Route path='/database' exact component={TableData}></Route>
                <Route path='/map' exact component={Map}></Route>
                <Route
                  path='/detail'
                  exact
                  component={DetailKelompokDesa}
                ></Route>
              </Switch>
            </main>
          </React.Suspense>
        </AppProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
