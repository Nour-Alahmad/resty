import './result.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/adventure_time.css'; // Import the desired theme

function Results(props) {
  return (
    <section className='result'>
      {props.data ? <JSONPretty id="json-pretty" data={props.data} mainStyle="background:#f5f5f5" valueStyle="color:black" stringStyle="color:black"></JSONPretty> : null}
    </section>
  );
}

export default Results;
