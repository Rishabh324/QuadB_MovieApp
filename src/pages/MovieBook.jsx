import { useState } from 'react';
import { Link } from 'react-router-dom';
const MovieBook = (props) => {

    const [name, setName] = useState("");
    const [tickets, setTickets] = useState(2);

    const validate = () => {
        if (name.length === 0) {
            alert("Name should be filled!");
            return false;
        }
        if (tickets === 0) {
            alert("Specify the number of tickets.");
            return false;
        }

        return true;
    }

    return (
        <div className="booking">
            <h4>Fill the details to book the ticket.</h4>
            <div>
                <h3>{props.movie}</h3><br></br>
                <form>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' name="name" value={name} placeholder="Enter name..." onChange={(e => setName(e.target.value))}></input><br></br><br></br>
                    <label htmlFor='numtick'>Number of Tickets: </label>
                    <input type='number' id='numtick' name="numtick" value={tickets} placeholder="Enter no. of tickets" onChange={(e => setTickets(e.target.value))}></input><br></br><br></br>
                    <label htmlFor='movie'>Movie Name: </label>
                    <input type='text' id='movie' name="movie" value={props.movie} disabled></input><br></br><br></br>
                        <button onClick={() => validate()} className='genre'>Book Tickets</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    )
}

export default MovieBook;