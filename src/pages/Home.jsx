import { useState, useEffect } from "react";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )   
};

export default Home;