import "./Workouts.css";
import Shell from "../UI/Shell";
import WorkoutType from "./WorkoutType";

function Workouts(props) {
  return (
    <Shell className="train">
      <WorkoutType
        type={props.item[0].type}
        distance={props.item[0].distance}
        date={props.item[0].date}
      />
      <WorkoutType
        type={props.item[1].type}
        distance={props.item[1].distance}
        date={props.item[1].date}
      />
      <WorkoutType
        type={props.item[2].type}
        distance={props.item[2].distance}
        date={props.item[2].date}
      />
      <WorkoutType
        type={props.item[3].type}
        distance={props.item[3].distance}
        date={props.item[3].date}
      />
    </Shell>
  );
}

export default Workouts;
