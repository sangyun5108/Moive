import {useEffect,useState} from 'react'
import DetailContainer from './DetailContainer';

const Detail = (props) => {

    const [isMovie,setIsMovie] = useState('');
    const [detailId,setDetailId] = useState('');

    useEffect(()=>{
        const {
            match:{params:{id}},
            history:{push},
            location:{pathname}
        } = props;

        if(isNaN(Number(id))){
            return push('/');
        }

        setDetailId(id);
        setIsMovie(pathname.includes('/movie/'));

    },[isMovie,props]);
    
    return (
        <>
            <DetailContainer isMovie={isMovie} detailId={detailId}/>
        </>
    )
}

export default Detail;