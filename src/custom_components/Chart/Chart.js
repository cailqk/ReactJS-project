import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  let chartInfoValues = props.dataPoints.map(el => el.value);
  let totalMaxValue = Math.max(...chartInfoValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
