import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Loader from '../../components/Loader';

const Container = styled.div`
    padding:0px 20px;
`;


const TvPresenter = ({topRated,popular,airingToday,error,isLoading}) => {

    
    if(isLoading){
        return(
            <Loader/>
        )
    }else if(error){
        return(
            <>Error</>
        )
    }
    
    return(
        <Container>
            {topRated&&topRated.length>0&&
                <Section title='Top Rated Shows'>
                    {topRated.map((data)=>{
                        return data.name
                    })}
                </Section>
            }
            {popular&&popular.length>0&&
                <Section title='Popular Shows'>
                    {popular.map((data)=>{
                        return data.name
                    })}
                </Section>
            }
            {airingToday&&airingToday.length>0&&
                <Section title='Airing Today'>
                    {airingToday.map((data)=>{
                        return data.name
                    })}
                </Section>
            }
        </Container>
    )
}

export default TvPresenter;