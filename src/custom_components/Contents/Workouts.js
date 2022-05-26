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
        {props.item.map((el) => (
          <WorkoutType date={el.date} type={el.type} distance={el.distance} />
        ))}
      </Shell>
    </div>
  );
}

export default Workouts;
