import "./Workouts.css";
import Shell from "../UI/Shell";
import WorkoutType from "./WorkoutType";
import Filter from "../UI/Filter";
import { useState } from "react";
import WorkoutsChart from './WorkoutsChart'

function Workouts(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredWorkouts = props.item.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  let workoutsContent;

  if (filteredWorkouts.length === 0) {
    workoutsContent = (
      <p className="empty_message">
        You have no logged workouts for this year.
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
        <Filter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        <WorkoutsChart workouts={filteredWorkouts}/>
        {workoutsContent}
      </Shell>
    </div>
  );
}

export default Workouts;
