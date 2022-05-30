import "./ChartBar.css";

function ChartBar(props) {
  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_filler" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
