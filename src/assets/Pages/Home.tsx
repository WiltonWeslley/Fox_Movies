import { useState, useEffect } from "react";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {

    const [topMovies, setTopMovies] = useState ([]);

    Const getTopRatedMovies= async (url) => {
        const res= await fetch(url);
        const data= await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {

        const TopRatedUrl= `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(TopRatedUrl);
    }, [])

    
    return( 
    <div className="recomendados">
        <h2 className="tittle">Melhores Filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p> }
                {topMovies.length > 0 && topMovies.map((movie)=> <MovieCard key={movie.id}movie={movie}/>)}
        </div>
    </div>
    )
};

export default Home;