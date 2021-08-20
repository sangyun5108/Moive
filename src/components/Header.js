import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import getLocation from '../utils/getLocation';

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

const FocusLine = styled.div`
    width:50px;
    height:5px;
    position:absolute;
    bottom:1px;
    transform:translateX(${props=>props.location*50}px);
    transition:transform 0.3s ease 0s;
    background-color:#3498db;
`;

const Header = ({location:{pathname}}) => {
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
                <FocusLine location={getLocation(pathname)}></FocusLine>
                {console.log(getLocation(pathname)*50)}
            </NavWrapper>
        </HeaderWrapper>
    );
}

export default withRouter(Header);