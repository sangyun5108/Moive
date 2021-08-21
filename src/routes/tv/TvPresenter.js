import React from 'react';

const TvPresenter = ({topRated,popular,airingToday,error,isLoading}) => {
    
    if(isLoading){
        return(
            <>Loading...</>
        )
    }else if(error){
        return(
            <>Error</>
        )
    }
    
    return(
        <>Tv</>
    )
}

export default TvPresenter;