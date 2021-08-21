import React,{useState,useEffect} from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi } from '../../api/api';
import { tvApi } from '../../api/api';

const SearchContainer = () => {

    const [movieResults,setMovieResults] = useState('');
    const [tvResults, setTvResults] = useState('');
    const [searchTerm, setSearchTerm] = useState('code');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (term) => {
        setSearchTerm(term);
        searchByTerm();
    }

    const searchByTerm = async() => {
        setIsLoading(true);
        try {
            await movieApi.search(searchTerm)
            .then((response)=>{
                console.log(response.data);
                const {results} = response.data;
                setMovieResults(results);
            })

            await tvApi.search(searchTerm)
            .then((response)=>{
                console.log(response.data);
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
    }

    useEffect(()=>{
        searchByTerm();
    },[])

    return (
        <>
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                isLoaing={isLoading}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default SearchContainer;