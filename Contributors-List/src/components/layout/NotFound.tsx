/**
 * React Functional Component
 * Renders not found message when the user is not found on the Database
 * 
 * PROPS:
 *  NO PROPS.
 */
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div.attrs({
    className: "card-panel teal"
})`
    width: 60%;
    margin: 0 auto;
`;

const StyledHeading = styled.h3.attrs({
    className: "white-text"
})``;

const NotFound: React.FC<{}> = () => 
    <StyledDiv>
        <StyledHeading>404 NOT FOUND</StyledHeading>;
    </StyledDiv>

export default NotFound;