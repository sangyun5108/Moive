import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Container = styled.div`
    padding:0px 20px;
`;

const HomePresenter = ({nowPlaying,upComing,popular,error,isLoading}) => {

    if(isLoading){
        return(
            <Loader/>
        )
    }
    
    return(
        <Container>
            {isLoading?<Loader/>:
            <>
                {nowPlaying&&nowPlaying.length>0&&
                <Section title='Now Playing'>
                    {nowPlaying.map((movie)=>{
                        return (
                            <span key={movie.id}>{movie.title}</span>
                            )
                    })}
                </Section>
                }
                {upComing&&upComing.length>0&&
                    <Section title='UpComing Movies'>
                        {upComing.map((movie)=>{
                            return (
                                <span key={movie.id}>{movie.title}</span>
                            )
                        })}
                    </Section>
                    }
                {popular&&popular.length>0&&
                    <Section title='Popular Movies'>
                    {popular.map((movie)=>{
                        return (
                            <span key={movie.id}>{movie.title}</span>
                        )
                    })}
                    </Section>
                }
            </>}
            {error&&<Error text={error}/>}
        </Container>
    );
}

export default HomePresenter;