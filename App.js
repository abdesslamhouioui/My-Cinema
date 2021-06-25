import './App.css';
import { useState } from 'react';
import Movielist from './components/movielist';
import Addmovie from './components/add-movie';

const App = () => {
	const [movies, setMovies] = useState([        {
            Title: "The Revenant",
            Year: "2015",
            Poster: "https://m.media-amazon.com/images/I/A1BjliXNDPL._AC_SL1500_.jpg",
            Description:" A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            Rating:"8",
            link:"https://www.imdb.com/title/tt1663202/"
        },
        {
            Title: "Greyhound",
            Year: "2020",
            Poster: "https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            Description:"Several months after the U.S. entry into World War II, an inexperienced U.S. Navy commander must lead an Allied convoy being stalked by a German submarine wolf pack.",
            Rating:"7",
            link:"https://www.imdb.com/title/tt6048922/?ref_=nv_sr_srsg_0"
        },
        {
            Title: "Forrest Gump",
            Year: "1994",
            Poster: "https://img8.cdn.cinoche.com/images/9d85f441a28d25ff78c327a42b6f7faf.jpg",
            Description:"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            Rating:"8.8",
            link:"https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0"
        },]);   
        ;
      const addmovie=(Newmovie)=>{setMovies([...movies,Newmovie])};
  return (
    <div style={{backgroundColor:'#242520',maxHeight:'100%'}}> 
     <Movielist movies={movies}/>
     <Addmovie add={addmovie}/>
    </div>);}
export default App;
