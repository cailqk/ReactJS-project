import Form from "./Form";
import "./AddNew.css";

function AddNew(props) {
  const addNewWorkoutHandler = (enteredWorkoutData) => {
    const workoutData = {
      id: Math.random().toString(),
      ...enteredWorkoutData,
    };
    props.onAddWorkout(workoutData);
  };

  return (
    <div className="new-workout">
      <Form onAddNewWorkout={addNewWorkoutHandler} />
    </div>
  );
}

export default AddNew;
