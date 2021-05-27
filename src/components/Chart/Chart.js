import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
    const values = props.data.map(d => d.value);
    const max = Math.max(...values);


  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar key={item.label} value={item.value} maxvalue={max} label={item.label} />
      ))}
    </div>
  );
};

export default Chart;
