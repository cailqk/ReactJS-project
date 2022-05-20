import './Date.css'

function Date(props) {

    const day = props.date.toLocaleString("en-US", { day: '2-digit'});
    const month = props.date.toLocaleString("en-US", { month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="date-div">
            <div className="date-div_day">{day}</div>
            <div className="date-div_month">{month}</div>
            <div className="date-div_year">{year}</div>
        </div>
    );
}

export default Date;