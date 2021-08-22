import {useEffect,useState} from 'react'
import DetailContainer from './DetailContainer';

const Detail = (props) => {

    const [isMovie,setIsMovie] = useState(false);
    const [pathname,setPathname] = useState('');

    useEffect(()=>{
        const {
            match:{params:{id}},
            history:{push},
            location:{pathname}
        } = props;

        setPathname(pathname);

        if(isNaN(Number(id))){
            return push('/');
        }

        setIsMovie(pathname.includes('/movie/'));

    },[isMovie,props]);
    
    return (
        <>
            <DetailContainer isMovie={isMovie} pathname={pathname}/>
        </>
    )
}

export default Detail;