import "./Workouts.css";
import Shell from "../UI/Shell";
import WorkoutType from "./WorkoutType";
import Filter from "../UI/Filter";
import { useState } from "react";

function Workouts(props) {
  const [filteredMonth, setFilteredMonth] = useState("1");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredWorkouts = props.item.filter(el => {
      return el.date.getMonth().toString() === filteredMonth;
  });

  return (
    <div>
      <Shell className="train">
        <Filter onChangeFilter={filterChangeHandler} selected={filteredMonth} />
        {filteredWorkouts.map((el) => (
          <WorkoutType
            key={el.id}
            date={el.date}
            type={el.type}
            distance={el.distance}
          />
        ))}
      </Shell>
    </div>
  );
}

export default Workouts;
