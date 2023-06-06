import SearchBar from '../components/SearchBar'
import { useContext } from 'react';
import { showsContext } from '../context/showContext';
import ListItem from '../components/ListItem';
import spinner from "../components/spinner.gif";

const Home = () => {
    const showsCont = useContext(showsContext);
    const { loading, shows } = showsCont;

    return (
        <div className='homepage'>
            <SearchBar />
            {loading ?
                <img className='img' src={spinner} alt={<h2>Loading...</h2>}></img> :
                <div className='homelist'>
                    {
                        shows.map(s =>
                            <ListItem
                                key={s.show.id}
                                name={s.show.name}
                                id={s.show.id}
                                rating={s.show.rating.average ? s.show.rating.average : "No Rating"}
                                image={s.show.image.medium}
                            ></ListItem>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Home;