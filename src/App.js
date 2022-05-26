import Workouts from "./custom_components/Contents/Workouts";
import AddNew from "./custom_components/AddNew/AddNew";
import { useState } from 'react';

const testInfo = [
  {
    id: "w1",
    type: "Swim",
    distance: 3,
    date: new Date(2022, 0, 10),
  },
  {
    id: "w2",
    type: "Run",
    distance: 10,
    date: new Date(2022, 2, 11),
  },
  {
    id: "w3",
    type: "Bike",
    distance: 25,
    date: new Date(2022, 2, 12),
  },
  {
    id: "w4",
    type: "Run",
    distance: 12,
    date: new Date(2022, 1, 13),
  },
];

function App() {
 const [workouts, setWorkout] = useState(testInfo);

  const addWorkoutHandler = (workout) => {
   setWorkout(prevWorkout => {
     return[workout, ...prevWorkout]
   });
  };

  return (
    <div>
      <AddNew onAddWorkout={addWorkoutHandler} />
      <Workouts item={workouts} />
    </div>
  );
}

export default App;
