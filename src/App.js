import Workouts from "./custom_components/Contents/Workouts";
import AddNew from "./custom_components/AddNew/AddNew";

function App() {
  const workouts = [
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
      date: new Date(2022, 0, 11),
    },
    {
      id: "w3",
      type: "Bike",
      distance: 25,
      date: new Date(2022, 0, 12),
    },
    {
      id: "w4",
      type: "Run",
      distance: 12,
      date: new Date(2022, 0, 13),
    },
  ];

const addWorkoutHandler = (workout) => {
  console.log('App.js is doing:');
  workouts.unshift(workout);
  console.log(workout);
}


  return (
    <div>
      <AddNew onAddWorkout={addWorkoutHandler}/>
     <Workouts item={workouts}/>
    </div>
  );
}

export default App;
