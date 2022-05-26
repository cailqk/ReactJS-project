import "./Form.css";
import { useState } from "react";

function Form(props) {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredDistance, setEnteredDistance] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      date: new Date(enteredDate),
      type: enteredType,
      distance: enteredDistance,
    };

    props.onAddNewWorkout(enteredData);
    setEnteredDate("");
    setEnteredType("");
    setEnteredDistance("");
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const typeChangeHandler = (e) => {
    setEnteredType(e.target.value);
  };

  const distanceChangeHandler = (e) => {
    setEnteredDistance(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-workout_controls">
        <div className="new-workout_control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-workout_control">
          <label>Type</label>
          <input
            type="text"
            value={enteredType}
            placeholder="Type"
            onChange={typeChangeHandler}
          />
        </div>
        <div className="new-workout_control">
          <label>Distance</label>
          <input
            type="number"
            value={enteredDistance}
            min="0.1"
            step="0.1"
            placeholder="Distance"
            onChange={distanceChangeHandler}
          />
        </div>
        <div className="new-workout_button">
          <button type="submit">Add a Workout</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
