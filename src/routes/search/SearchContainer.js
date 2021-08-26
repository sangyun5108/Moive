import React,{useState,useEffect} from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi } from '../../api/api';
import { tvApi } from '../../api/api';

const SearchContainer = () => {

    const [movieResults,setMovieResults] = useState('');
    const [tvResults, setTvResults] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (event,term) => {
        setSearchTerm(term);
        event.preventDefault();
    }

    const updateTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(()=>{
        (async function(){
            setIsLoading(true);
            try {
                await movieApi.search(searchTerm)
                .then((response)=>{
                    const {results} = response.data;
                    setMovieResults(results);
                })

                await tvApi.search(searchTerm)
                .then((response)=>{
                    const {results} = response.data;
                    setTvResults(results);
                })
            }
            catch {
                setError("Can't get search information");
            }
            finally {
                setIsLoading(false);
            }
        })();
    },[searchTerm])

    return (
        <>
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                isLoaing={isLoading}
                handleSubmit={handleSubmit}
                updateTerm={updateTerm}
            />
        </>
    )
}

export default SearchContainer;