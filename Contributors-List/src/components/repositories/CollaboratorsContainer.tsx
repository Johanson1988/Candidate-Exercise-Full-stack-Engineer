import React from "react";
import styled from 'styled-components';

const StyledUl = styled.ul.attrs({
  className: "collection"
})`
  width: 70%;
  margin: 1em auto;
`;

const StyledLi = styled.li.attrs({
  className: "collection-item"
})``;



type Props = { collaborators: { nodes: [] } };

type Collaborator = { login: string };

const CollaboratorsContainer: React.FC<Props> = ({ collaborators: { nodes} }) => {

  return (
    <>
      <StyledUl>
        {
          nodes.map((collaborator: Collaborator, index: number) => 
            <StyledLi key={index}>{collaborator.login}</StyledLi> ) 
        }
      </StyledUl>
    </>
  )
}

export default CollaboratorsContainer;