import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Header = () => {
    return(
        <HeaderWrapper>
            <NavWrapper>
                <LinkList>
                    <LinkItem>
                        <StyledLink to="/">Movies</StyledLink>
                    </LinkItem>
                    <LinkItem>
                        <StyledLink to="/tv">TV</StyledLink>
                    </LinkItem>
                    <LinkItem>
                        <StyledLink to="/search">Search</StyledLink>
                    </LinkItem>
                </LinkList>
            </NavWrapper>
        </HeaderWrapper>
    );
}

export default Header;