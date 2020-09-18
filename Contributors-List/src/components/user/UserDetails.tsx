/**
 * React Functional Component
 * Displays username and profile picture
 * PROPS:
 *  @param {object} userData Object with username and link to github profile picture
 *  in parent component: RepositoriesContainer.
 */

import React from 'react';
import styled from 'styled-components';

/** Styled Components */
const StyledUserDetailsContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 60%;
    margin: 0 auto;
`;

const StyledUserSection = styled.div`
    margin: 0rem auto .5em auto;
    color: #26a69a;
    font-family: 'Montserrat', sans-serif;
`;

const StyledUsername = styled.h3`
    font-weight: 500;
    font-size: 3em;
    max-width: 60%;
`;

const StyledAvatar = styled.img.attrs({
    className: "user-picture circle"
})`
  max-width: 100px;
  min-width: 90px;
  border: .25rem solid #26a69a;
  text-align: center;
`;


type Props = {
    imgSrc: string,
    username: string,
}

const UserDetails: React.FC<Props> = ({ imgSrc, username}) => 
        <>
            <StyledUserDetailsContainer>
                <StyledUserSection>
                    <StyledAvatar src={imgSrc} alt="user-profile" />
                </StyledUserSection>
                <StyledUserSection>
                    <StyledUsername>{username}</StyledUsername>
                </StyledUserSection>
            </StyledUserDetailsContainer>
        </>

export default UserDetails;