import React,{useState,useEffect} from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from '../../api/api';

const TvContainer = () => {

    const [topRated, setTopRated] = useState('');
    const [popular, setPopular] = useState('');
    const [airingToday,setAiringToday] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        (async function(){
            try {
                await tvApi.topRated()
                .then((response)=>{
                    const {results} = response.data;
                    setTopRated(results);
                })
    
                await tvApi.popular()
                .then((response)=>{
                    const {results} = response.data;
                    setPopular(results);
                })
    
                await tvApi.airingToday()
                .then((response)=>{
                    const {results} = response.data;
                    setAiringToday(results);
                })
            }
            catch(error) {
                setError("Can't get Tv information");
            }
            finally {
                setIsLoading(false);
            }
        })();
    },[])

    return (
        <>
            <TvPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                isLoading={isLoading}
            />
        </>
    )
}

export default TvContainer;