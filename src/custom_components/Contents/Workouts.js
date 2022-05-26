import "./Workouts.css";
import Shell from "../UI/Shell";
import WorkoutType from "./WorkoutType";
import Filter from "../UI/Filter";
import { useState } from "react";

function Workouts(props) {
  const [filteredMonth, setFilteredMonth] = useState("January");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  return (
    <div>
      <Shell className="train">
        <Filter onChangeFilter={filterChangeHandler} selected={filteredMonth} />
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
      </Shell>
    </div>
  );
}

export default Workouts;
