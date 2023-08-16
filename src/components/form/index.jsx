import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
    <div className="formdiv">

<p>◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈  ◈ ◈ ⁘ ◈ ⁘ ◈ ◈ ◈  ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈</p>
      <form onSubmit={handleSubmit}>
        
        <label>
          <span>URL: </span>
          <input
          placeholder="Enter URL ...."
            name='url'
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit'>GO!</button>
        </label>
      
      </form>  
      <section className='selectMethod'>
          {/* <select

            onChange={(e) => {
              setMethod(e.target.value);
              console.log(e.target.value);
            }}>
            <option value='GET'>GET</option>
            <option value='POST'>POST</option>
            <option value='PUT'>PUT</option>
            <option value='DELETE'>DELETE</option>
          </select> */}

          <label className='methods'>
          <span onClick={()=>setMethod('GET')} id='get'>GET</span>
          <span onClick={()=>setMethod('POET')} id='post'>POST</span>
          <span onClick={()=>setMethod('PUT')} id='put'>PUT</span>
          <span onClick={()=>setMethod('DELET')} id='delete'>DELETE</span>
        </label>
        </section>

<p>◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈  ◈ ◈ ⁘ ◈ ⁘ ◈ ◈ ◈  ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈</p>

    
    </div>
   
     
    </>
  );
}

export default Form;
