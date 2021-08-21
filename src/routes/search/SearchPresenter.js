import React from 'react';

const SearchPresenter = ({movieResults,tvResults,handleSubmit,error,isLoading}) => {
    
    if(isLoading){
        return (
            <>Loading...</>
        )
    }else if(error){
        return(
            <>{error}</>
        )
    }
    
    return (
        <>Search</>
    )
}

export default SearchPresenter;