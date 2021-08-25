import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import Poster from '../../components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding:0px 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width:100%;
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;

`;

const SearchPresenter = ({movieResults,tvResults,handleSubmit,error,isLoading,updateTerm}) => {
    
    return (
        <Container>
            <Helmet>
                <title>Search | Nonflix</title>
            </Helmet>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Input onChange={(e)=>{updateTerm(e)}} placeholder="Search Movies or TV shows"></Input>
            </Form>
            {isLoading?<Loader/>:<Section title="Movie Results">{movieResults&&movieResults.length>0&&
            movieResults.map((movie)=>
            {return (
            <Poster
                key={movie.id} 
                title={movie.original_title} 
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date?movie.release_date.substring(0,4):""}
                id={movie.id}
            />)})}
            </Section>}

            {isLoading?<Loader/>:<Section title="Tv Show Results">{tvResults&&tvResults.length>0&&
            tvResults.map((show)=>
            {return (
            <Poster
                key={show.id} 
                title={show.original_name} 
                imageUrl={show.poster_path}
                rating={show.vote_average}
                isMovie={false}
                year={show.first_air_date?show.first_air_date.substring(0,4):""}
                id={show.id}
            />
        )})}
            </Section>}
            {
                movieResults&&
                tvResults&&
                tvResults.length===0&&
                movieResults.length===0&&<NotFound/>
            }
        </Container>
    )
}

export default SearchPresenter;