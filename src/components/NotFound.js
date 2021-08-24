import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
`;

const Text = styled.span`
    color:#g=95a5a6;
    font-weight:600;
`;

const NotFound = () => {
    return (
        <Container>
            <Text>Not Found</Text>
        </Container>
    )
}

export default NotFound;