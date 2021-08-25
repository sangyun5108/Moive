import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Poster from '../../components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding:20px;
`;

const HomePresenter = ({nowPlaying,upComing,popular,error,isLoading}) => {
    
    return(
        <Container>
            {isLoading?<>
                <Loader/>
                <Helmet>
                    <title>Loaing | Nonflix</title>
                </Helmet>
            </>:
            <>
                <Helmet>
                    <title>Movie | Nonflix</title>
                </Helmet>
                {nowPlaying&&nowPlaying.length>0&&
                <Section title='Now Playing'>
                    {nowPlaying.map((movie)=>{
                        return (
                                <Poster
                                    key={movie.id} 
                                    title={movie.original_title} 
                                    imageUrl={movie.poster_path}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                    year={movie.release_date?movie.release_date.substring(0,4):""}
                                    id={movie.id}
                                />
                            )
                    })}
                </Section>
                }
                    {upComing&&upComing.length>0&&
                    <Section title='UpComing Movies'>
                        {upComing.map((movie)=>{
                            return (
                                <Poster 
                                    key={movie.id} 
                                    title={movie.original_title} 
                                    imageUrl={movie.poster_path}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                    year={movie.release_date?movie.release_date.substring(0,4):""}
                                    id={movie.id}
                                />
                            )
                        })}
                </Section>
                    }
                    {popular&&popular.length>0&&
                <Section title='Popular Movies'>
                        {popular.map((movie)=>{
                            console.log(movie.vote_average);
                            return (

                                <Poster 
                                    key={movie.id} 
                                    title={movie.original_title} 
                                    imageUrl={movie.poster_path}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                    year={movie.release_date?movie.release_date.substring(0,4):""}
                                    id={movie.id}
                                />
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