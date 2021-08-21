import React,{useState} from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {

    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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