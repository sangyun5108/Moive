import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NOT_FOUND from '../assets/imageUrl';

const Container = styled.div`
    font-size:12px;
    margin-right:10px;
`;

const Image = styled.div`
    background-image:url(${props=>props.bgUrl?`https://image.tmdb.org/t/p/w300${props.bgUrl}`:NOT_FOUND});
    background-size:cover;
    background-position:center center;
    height:180px;
    border-radius:4px;
    transition:opacity 0.1s linear;
`;

const Rating = styled.span`
    position:absolute;
    bottom:5px;
    right:5px;
    opacity:0;
    transition:opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    position:relative;
    &:hover{
        ${Image}{
            opacity:0.3;
        }
        ${Rating}{
            opacity:1;
        }
    }
`;

const Title = styled.span`
    display:block;
`;

const Year = styled.span`
    color:rgba(225,225,225,0.5);
`;

const Poster = ({id,imageUrl,title,rating,year,isMovie}) => {
    return(
        <Link to={isMovie?`/movie/${id}`:`/tv/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl}></Image>
                    <Rating>
                        <span role='img' aria-label='rating'>⭐️</span>{" "}
                        {rating}/10
                    </Rating>
                </ImageContainer>
                <Title>{title.length>15?`${title.substring(0,15)}...`:title}</Title>
                <Year>{year}</Year>
            </Container>
        </Link>
    )
}

export default Poster;