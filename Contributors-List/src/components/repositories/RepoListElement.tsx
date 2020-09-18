/**
 * React Functional Component
 * Renders  a card with each repository item
 * 
 * PROPS:
 *  @param {string} name Repo's name.
 *  @param {string} description Repo's description
 */

import React, { useState } from "react";

import CollaboratorsContainer from './CollaboratorsContainer';
import styled from 'styled-components';

const StyledLi = styled.li.attrs({
    className: "card-panel teal hoverable"
})``;

const StyledP = styled.li.attrs({
    className: "white-text"
})``;

const StyledSpan = styled.span.attrs({
    className: "white-text"
})``;

type Props = {
    name: string,
    description: string,
    login: string,
}

const RepoListElement: React.FC<Props> = ({ name, description, login }) => {
    //TODO añadir tipos a este useState y a todos
    const [click, setClick] = useState(false);

    const handleClick = (event: any) => {
        //TODO cambiar este any
        setClick(!click);
    }

    return (
        
        <StyledLi onClick={handleClick}>
            <StyledP>{name}</StyledP>
            <StyledSpan>{description}</StyledSpan>
            {
                click ?
                    <CollaboratorsContainer repoName={name} username={login} /> :
                    null
            }
        </StyledLi>
    )
}

export default RepoListElement;