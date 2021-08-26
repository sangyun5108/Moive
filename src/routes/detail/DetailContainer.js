import React,{useState,useEffect} from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api/api';
import { tvApi } from '../../api/api';

const DetailContainer = ({isMovie,detailId}) => {

    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        (async function(){
            try {
     
                if(isMovie){
                    movieApi.movieDetail(detailId)
                    .then((response)=>{
                        setResult(response.data);
                    })
                }else if(isMovie===false) {
                    await tvApi.showDetail(detailId)
                    .then((response)=>{
                        console.log(response.data);
                        setResult(response.data);
                    })
                }
            }
            catch(error) {
                setError("Can't find detail information");
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        })();
    },[isMovie,detailId])

    return(
        <>
            <DetailPresenter
                result={result}
                error={error}
                isLoading={isLoading}
            />
        </>
    )
}

export default DetailContainer;