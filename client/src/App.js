import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import MainNavigation from "./Components/MainNavigation";
// import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import TableData from "./Pages/TableData";
import DetailKelompokDesa from "./Pages/DetailKelompokDesa";
import loadingIc from "./Assets/loading.svg";
import {
  createClient,
  Provider,
  // subscriptionExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
// import { SubscriptionClient } from "subscriptions-transport-ws";

// const subscriptionClient = new SubscriptionClient(
//   "wss://hasura.braga.co.id/v1/graphql",
//   {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         "x-hasura-admin-secret": "67baeb950f78fd885cfc",
//       },
//     },
//   }
// );

const initialState = {
  auth: localStorage.getItem("disbun-token") ? true : false,
  mainUrl: "",
  snack: false,
  snackMessage: "",
  jenisMap: false,
  kec: "",
  kel: "",
  kab: "",
  loadingMap: false,
  type: "tanaman",
  idDesa: {
    x: 107.606,
    y: -6.9292,
    id_desa: "",
  },
  isCari: false,
  showFilter: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setAuth":
      return { ...state, auth: action.payload };
    case "setKec":
      return { ...state, kec: action.payload };
    case "setKab":
      return { ...state, kab: action.payload };
    case "setIsCari":
      return { ...state, isCari: action.payload };
    case "setShowFil":
      return { ...state, showFilter: action.payload };
    case "resetKabKec":
      return {
        ...state,
        kab: "",
        kec: "",
        kel: "",
        isCari: false,
        showFilter: false,
        idDesa: action.payload,
      };
    case "setKel":
      return { ...state, kel: action.payload };
    case "setIdDesa":
      return { ...state, idDesa: action.payload };
    case "setType":
      return { ...state, type: action.payload };
    case "setJenisMap":
      return { ...state, jenisMap: action.payload };
    case "setLoadingMap":
      return { ...state, loadingMap: action.payload };
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

  const client = React.useMemo(() => {
    console.log(state.auth);
    return createClient({
      url: "https://hasura.braga.co.id/v1/graphql",
      fetchOptions: () => ({
        headers: {
          "x-hasura-admin-secret": "67baeb950f78fd885cfc",
        },
      }),
      exchanges: [
        dedupExchange,
        cacheExchange,
        fetchExchange,
        // subscriptionExchange({
        //   forwardSubscription(operation) {
        //     return subscriptionClient.request(operation);
        //   },
        // }),
      ],
    });
  }, [state.auth]);

  React.useEffect(() => {
    var url2 = new URL(window.location);
    dispatch({
      type: "setMainUrl",
      payload: url2.origin,
    });
  }, []);
  return (
    <Provider value={client}>
      <Router>
        <AppProvider value={{ ...state, setAuth, dispatch, setSnack }}>
          <MainNavigation />
          <React.Suspense fallback={<React.Fragment></React.Fragment>}>
            <main style={{ maxWidth: "1440px", margin: "auto" }}>
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
            {state.loadingMap ? (
              <div>
                <div
                  className='fixed bg-opacity-25 bg-black z-20'
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <img
                    src={loadingIc}
                    alt='loading'
                    className='none absolute'
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>
            ) : null}
          </React.Suspense>
        </AppProvider>
      </Router>
    </Provider>
  );
}

export default App;
