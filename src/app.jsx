import { useEffect, useReducer } from "react";
import axios from "axios";
import "./app.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

// Define the initial state
const initialState = {
  data: null,
  requestParams: {},
  method: null,
  body: null,
  history: [],
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "setData":
      return { ...state, data: action.payload };
    case "setRequestParams":
      return { ...state, requestParams: action.payload };
    case "setMethod":
      return { ...state, method: action.payload };
    case "setBody":
      return { ...state, body: action.payload };
    case "addToHistory":
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {
    const reqMethod = requestParams.method;
    dispatch({ type: "setMethod", payload: reqMethod });

    let req = "";

    switch (reqMethod) {
      case "POST":
      {  const parsedBody = JSON.parse(requestParams.body);
        dispatch({ type: "setBody", payload: parsedBody });
        req = await axios.post(requestParams.url, parsedBody);}
        break;
      case "DELETE":
        req = await axios.delete(requestParams.url);
        break;
      case "PUT":
        req = await axios.put(requestParams.url, requestParams.body);
        break;
      case "GET":
        req = await axios.get(requestParams.url);
        break;
    }

    dispatch({ type: "setData", payload: req.data });
    dispatch({ type: "setRequestParams", payload: requestParams });
    dispatch({ type: "addToHistory", payload: { ...requestParams, results: req.data } });
  };

  useEffect(() => {
    callApi(state.requestParams);
  }, [state.requestParams.method, state.requestParams.url, state.requestParams.body]);

  return (
    <>
      <Header />
      <section className='appBody'>
        <div>
          Request Method: <span>{state.requestParams.method}</span>
        </div>
        <div>
          URL: <span>{state.requestParams.url}</span>
        </div>
      </section>

      <section className='formresult'>
        <Form handleApiCall={callApi} />
        <Results data={state.data} />
      </section>

      <Footer />
    </>
  );
}

export default App;
