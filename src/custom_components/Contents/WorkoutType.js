import Date from "./Date";
import "./WorkoutType.css";
import Shell from "../UI/Shell";

function WorkoutType(props) {
  return (
    <Shell className="workout-item">
      <Date date={props.date} />
      <div className="workout-item_description">
        <h2 className="wType">{props.type}</h2>
        <div className="workout-item_distance">{props.distance} km.</div>
      </div>
    </Shell>
  );
}

export default WorkoutType;
