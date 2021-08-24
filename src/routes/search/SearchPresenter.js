import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';

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
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Input onChange={(e)=>{updateTerm(e)}} placeholder="Search Movies or TV shows"></Input>
            </Form>
            {isLoading?<Loader/>:<Section title="Movie Results">{movieResults&&movieResults.length>0&&
            movieResults.map((movie)=>
            {return (<span key={movie.id}>{movie.title}</span>)})}
            </Section>}

            {isLoading?<Loader/>:<Section title="Tv Show Results">{tvResults&&tvResults.length>0&&
            tvResults.map((show)=>
            {return (<span key={show.id}>{show.name}</span>)})}
            </Section>}
        </Container>
    )
}

export default SearchPresenter;