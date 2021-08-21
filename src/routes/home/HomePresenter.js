import React from 'react';

const HomePresenter = ({nowPlaying,upComing,popular,error,isLoading}) => {

    if(isLoading){
        return(
            <>Loading...</>
        )
    }else if(error){
        return(
            <>error</>
        )
    }
    
    return(
        <>
            {error?<>{error}</>:<></>}
            {isLoading?<>Loading...</>:<>Home</>}
        </>
    )
}

export default HomePresenter;