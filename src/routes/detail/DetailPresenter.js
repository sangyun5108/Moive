import React from 'react';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    height:calc(100vh-50px;);
    width:100%;
    position:relative;
    padding:25px;
    display:flex;
`; 

const Backdrop = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:850px;
    background-image:url(${props=>props.bgImg&&`https://image.tmdb.org/t/p/original${props.bgImg}`});
    background-position:center center;
    background-size:cover;
    filter:blur(3px);
    opacity:0.5;
    z-index:-1;
`

const Content = styled.div`
    width:100%;
    height:800px;
    display:flex;
`;

const Cover = styled.div`
    width:30%;
    height:800px;
    background-image:url(${props=>props.bgImg&&`https://image.tmdb.org/t/p/original${props.bgImg}`});
    background-position:center center;
    background-size:cover;
    border-radius:14px;
`;

const Data = styled.div`
    width:70%;
    margin-left:10px;
`;

const Title = styled.h3`
    font-size:25px;
    margin-bottom:20px;
`;

const ItemContainer = styled.div`
    margin:20px 0px;
`;

const Item = styled.span`
`;

const Divider = styled.span`
    margin:0 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:1.5;
    width:50%;
`;

const DetailPresenter = ({result,error,isLoading}) => {
    return(
        <>
            <Helmet>
                <title>Detail | Nonflix</title>
            </Helmet>  
            {isLoading?<Loader/>:
                <Container> 
                    <Backdrop bgImg={result.backdrop_path}></Backdrop>
                    <Content>
                        <Cover bgImg={result.poster_path}></Cover>
                        <Data>
                            <Title>{result.original_title?result.original_title:result.original_name}</Title>
                            <ItemContainer>
                                <Item>{result.release_date
                                        ?result.release_date
                                        :result.first_air_date}
                                </Item>
                                <Divider>·</Divider>
                                <Item>{result.runtime
                                        ?`${result.runtime}min`
                                        :`${result.episode_run_time}min`}
                                </Item>
                                <Divider>·</Divider>
                                <Item>{result.genres&&
                                        result.genres.map((genre,index)=>index===result.genres.length-1?genre.name:`${genre.name}/`)}
                                </Item>
                            </ItemContainer>
                            <Overview>{result.overview}</Overview>
                        </Data>
                    </Content>
                </Container>
            }
        </>
    );
}

export default DetailPresenter;