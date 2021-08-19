import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const HeaderWrapper = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:10;
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
    padding: 0 10px;
`;

const NavWrapper = styled.nav`
`;

const LinkList = styled.ul`
    display:flex;
`;

const LinkItem = styled.li`
    display:flex;
    align-items:center;
`;

const StyledLink = styled(Link)`
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:5px solid ${props=>props.current?'#3498db':'transparent'};
    transition:border-bottom .5s linear;
`;

const Header = ({location:{pathname}}) => {
    return(
        <HeaderWrapper>
            <NavWrapper>
                <LinkList>
                    <LinkItem>
                        <StyledLink current={pathname==='/'} to="/">Movies</StyledLink>
                    </LinkItem>
                    <LinkItem>
                        <StyledLink current={pathname==='/tv'} to="/tv">TV</StyledLink>
                    </LinkItem>
                    <LinkItem>
                        <StyledLink current={pathname==='/search'} to="/search">Search</StyledLink>
                    </LinkItem>
                </LinkList>
            </NavWrapper>
        </HeaderWrapper>
    );
}

export default withRouter(Header);