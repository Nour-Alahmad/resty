import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("");
  const [reqBody, setReqBody] = useState("");
  const [activeMethod, setActiveMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: activeMethod, // Use activeMethod to determine the selected method
      url: url,
      body: reqBody
    };
    props.handleApiCall(formData);
  };

  return (
    <div className="formdiv">
      <p>◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ⁘ ◈ ⁘ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈</p>
      <section className='selectMethod'>
        <label className='methods'>
          <span
            className={activeMethod === 'GET' ? 'active' : ''}
            onClick={() => setActiveMethod('GET')}
            id='get'
          >
            GET
          </span>
          <span
            className={activeMethod === 'POST' ? 'active' : ''}
            onClick={() => setActiveMethod('POST')}
            id='post'
          >
            POST
          </span>
          <span
            className={activeMethod === 'PUT' ? 'active' : ''}
            onClick={() => setActiveMethod('PUT')}
            id='put'
          >
            PUT
          </span>
          <span
            className={activeMethod === 'DELETE' ? 'active' : ''}
            onClick={() => setActiveMethod('DELETE')}
            id='delete'
          >
            DELETE
          </span>
        </label>
      </section>
      
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

      <p>◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ⁘ ◈ ⁘ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈</p>
      <textarea
        placeholder="Enter JSON Content"
        onChange={(e) => setReqBody(e.target.value)}
        name="reqBody"
        id="reqBody"
        cols="90"
        rows="10"
      ></textarea>
    </div>
  );
}

export default Form;
