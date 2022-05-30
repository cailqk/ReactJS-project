import Form from "./Form";
import "./AddNew.css";
import './Form.css';
import { useState } from 'react';

function AddNew(props) {
  const [isLogging, setIsLogging] = useState(false)

  const addNewWorkoutHandler = (enteredWorkoutData) => {

    const workoutData = {
      id: Math.random().toString(),
      ...enteredWorkoutData,
    };
    props.onAddWorkout(workoutData);
    setIsLogging(false);
  };

  const logNewWorkoutHandler = () => {
    setIsLogging(true);

  }

   const stopLogging = () => {
    setIsLogging(false)
  }

  return (
    <div className="new-workout" >
      {!isLogging && <button className="logNew" onClick={logNewWorkoutHandler}>Log new workout</button>}
      {isLogging && <Form onAddNewWorkout={addNewWorkoutHandler} onCancel={stopLogging}/>}
    </div>
  );
}

export default AddNew;
