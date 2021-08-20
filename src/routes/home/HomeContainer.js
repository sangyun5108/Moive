import React,{useState} from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {

    const [nowPlaying,seNowPlaying] = useState('');
    const [upComing,setUpComing] = useState('');
    const [popular,setPopular] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setLoading] = useState(true);

    return (
        <HomePresenter 
            nowPlaying={nowPlaying}
            upComing={upComing} 
            popular={popular}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default HomeContainer;