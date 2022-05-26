import "./Filter.css";

const Filter = (props) => {
  const filterHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="workouts-filter">
      <div className="workouts-filter_control">
        <label>Filter by month</label>
        <select onChange={filterHandler} value={props.selected}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
