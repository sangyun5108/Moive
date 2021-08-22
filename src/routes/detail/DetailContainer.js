import React,{useState} from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api/api';
import { tvApi } from '../../api/api';

const DetailContainer = ({isMovie}) => {

    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    if(isMovie){
        try {

        }
        catch {

        }
        finally {

        }
    }

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