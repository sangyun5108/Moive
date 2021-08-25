import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Poster from '../../components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding:0px 20px;
`;


const TvPresenter = ({topRated,popular,airingToday,error,isLoading}) => {
    
    return(
        <Container>
            {isLoading?
                <>
                    <Helmet>
                        <title>Loading | Nonflix</title>
                    </Helmet>
                    <Loader/>
                </>:<>
                <Helmet>
                    <title>Tv | Nonflix</title>
                </Helmet>
                {topRated&&topRated.length>0&&
                <Section title='Top Rated Shows'>
                    {topRated.map((show)=>{
                        return (
                            <Poster
                                    key={show.id} 
                                    title={show.original_name} 
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    year={show.first_air_date?show.first_air_date.substring(0,4):""}
                                    id={show.id}
                            />
                        )
                    })}
                </Section>
            }
            {popular&&popular.length>0&&
                <Section title='Popular Shows'>
                    {popular.map((show)=>{
                        return (
                            <Poster
                                    key={show.id} 
                                    title={show.original_name} 
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    year={show.first_air_date?show.first_air_date.substring(0,4):""}
                                    id={show.id}
                            />
                        )
                    })}
                </Section>
            }
            {airingToday&&airingToday.length>0&&
                <Section title='Airing Today'>
                    {airingToday.map((show)=>{
                        return (
                            <Poster
                                    key={show.id} 
                                    title={show.original_name} 
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    isMovie={false}
                                    year={show.first_air_date?show.first_air_date.substring(0,4):""}
                                    id={show.id}
                            />
                        )
                    })}
                </Section>
            }
            </>}
            {error&&<Error text={error}/>}
        </Container>
    )
}

export default TvPresenter;