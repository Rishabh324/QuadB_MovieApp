import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { showsContext } from '../context/showContext';
import MovieBook from './MovieBook';

const Single = () => {
    const { singleShow, getSingleShow, loading } = useContext(showsContext);
    const { id } = useParams();

    console.log(singleShow);

    useEffect(() => {
        getSingleShow(id);
    }, [])

    const noHtmlTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };


    return (
        <div className='single'>
            {loading ? <h2>Loading....</h2> :
                <div>
                    <div className='single-show'>
                        <img src={singleShow.image ? singleShow.image.medium : ''} alt={singleShow.name} />
                        <div className='single-show-info'>
                            <h1>{singleShow.name}</h1>
                            {singleShow.genres &&
                                singleShow.genres.map((genre) => (
                                    <span key={genre} className="genre">
                                        {genre}
                                    </span>
                                ))}
                            <p>
                                <b>Runtime: </b>{singleShow.runtime !== null ? singleShow.runtime : 'N/A'} mins
                            </p>
                            <p>
                                <b>Rating: </b>{singleShow.rating ? singleShow.rating.average : "No Rating"}
                            </p>
                            <p>
                                <b>Official Site: </b>{singleShow.officialSite ? (<a href={singleShow.officialSite} target='_blank' rel='noreferrer'>{singleShow.officialSite}</a>) : "No official Site"}
                            </p>
                            <p><b>Summary: </b>{singleShow.summary && noHtmlTags(singleShow.summary)}</p>
                        </div>
                    </div>
                    <div className='form-div'>
                        <MovieBook movie={singleShow.name} />
                    </div>
                </div>}
        </div>
    )
}

export default Single;