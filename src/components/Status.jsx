import tick from '../assets/tick.png';

const Status = () => {
    return (
        <div className="status-div">
            <img src={tick} width='300px' height='300px'></img>
            <p className="status">Ticket Booked Successfully!!</p>
        </div>
    )
}

export default Status;