import "./Workouts.css";
import Shell from "../UI/Shell";
import WorkoutType from "./WorkoutType";
import Filter from "../UI/Filter";
import { useState } from "react";

function Workouts(props) {
  const [filteredMonth, setFilteredMonth] = useState("");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredWorkouts = props.item.filter((el) => {
    if (filteredMonth === "") {
      return true;
    }
    return el.date.getMonth().toString() === filteredMonth;
  });

  let workoutsContent;

  if (filteredWorkouts.length === 0) {
    workoutsContent = (
      <p className="empty_message">
        You have no logged workouts for this month.
      </p>
    );
  } else {
    workoutsContent = filteredWorkouts.map((el) => (
      <WorkoutType
        key={el.id}
        date={el.date}
        type={el.type}
        distance={el.distance}
      />
    ));
  }

  return (
    <div>
      <Shell className="train">
        <Filter onChangeFilter={filterChangeHandler} selected={filteredMonth} />
        {workoutsContent}
      </Shell>
    </div>
  );
}

export default Workouts;
