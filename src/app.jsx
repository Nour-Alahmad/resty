import { useState } from "react";
import axios from "axios";
import "./app.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [method, setMethod] = useState(null);
  const [body, setBody] = useState(null);

  const callApi = async (requestParams) => {
    setMethod(requestParams.method);
    
    
    let req = "";

    switch (method) {
      case "POST":
        setBody(JSON.parse(requestParams.body));
        console.log(body);

        req = await axios.post(requestParams.url,body);
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
      default:
        "GET";
        req = await axios.get(requestParams.url);
    }

    setData(req.data);
    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <section className='appBody'>
        <div>
          Request Method: <span>{requestParams.method}</span>
        </div>
        <div>
          URL: <span>{requestParams.url}</span>
        </div>
      </section>

      <section className='formresult'>
        <Form handleApiCall={callApi} />
        <Results data={data} />
      </section>

      <Footer />
    </>
  );
}

export default App;
