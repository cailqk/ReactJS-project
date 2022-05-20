import './Form.css'

function Form() {
  return (
    <form>
      <div className="new-workout_controls">
        <div className="new-workout_control">
          <label>Date</label>
          <input></input>
        </div>
        <div className="new-workout_control">
          <label>Type</label>
          <input></input>
        </div>
        <div className="new-workout_control">
          <label>Distance</label>
          <input></input>
        </div>
        <div className="new-workout_button">
          <button type="submit">Add a Workout</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
