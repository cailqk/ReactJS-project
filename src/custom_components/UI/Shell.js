import './Shell.css'

function Shell (props) {

const classes = 'shell ' + props.className;

return <div className={classes}>{props.children}</div>

}

export default Shell;