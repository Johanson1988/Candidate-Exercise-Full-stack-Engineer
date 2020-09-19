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

const StyledP = styled.p.attrs({
    className: "white-text"
})``;

const StyledSpan = styled.span.attrs({
    className: "white-text"
})``;

type Props = {
    name: string,
    description: string,
    collaborators: { nodes: [] },
}

const RepoListElement: React.FC<Props> = ({ name, description, collaborators }) => {
    const [click, setClick] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent) => {
        setClick(!click);
    }

    return (
        
        <StyledLi onClick={handleClick}>
            <StyledP>{name}</StyledP>
            <StyledSpan>{description}</StyledSpan>
            {
                click && collaborators ?
                    <CollaboratorsContainer collaborators={collaborators} /> :
                    null
            }
        </StyledLi>
    )
}

export default RepoListElement;