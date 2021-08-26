import React,{useState,useEffect} from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from '../../api/api';

const HomeContainer = () => {

    const [nowPlaying,setNowPlaying] = useState('');
    const [upComing,setUpComing] = useState('');
    const [popular,setPopular] = useState('');
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        (async function(){
            try {
                await movieApi.nowPlaying().then((response)=>{
                    const {results} = response.data;
                    setNowPlaying(results);
                });
                await movieApi.upComing().then((response)=>{
                    const {results} = response.data;
                    setUpComing(results);
                });
                await movieApi.popular().then((response)=>{
                    const {results} = response.data;
                    setPopular(results);
                });
            }
            catch {
                setError("Can't get movies");
            }
            finally {
                setIsLoading(false);
            }
        })();
    },[])

    return (
        <>
            <HomePresenter 
            nowPlaying={nowPlaying}
            upComing={upComing} 
            popular={popular}
            error={error}
            isLoading={isLoading}
            />
        </>
    )
}

export default HomeContainer;