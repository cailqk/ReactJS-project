import "./Filter.css";

const Filter = (props) => {
  const filterHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="workouts-filter">
      <div className="workouts-filter_control">
        <label>Filter by year</label>
        <select onChange={filterHandler} value={props.selected}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
