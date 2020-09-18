import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { getReposContributors } from './../../helpers/API';

/** Styled Components */
const StyledUl = styled.ul.attrs({
  className: "collection"
})`
  width: 70%;
  margin: 1em auto;
`;

const StyledLi = styled.li.attrs({
  className: "collection-item"
})``;

type Props = { username: string, repoName: string };

const CollaboratorsContainer: React.FC<Props> = ({ username, repoName }) => {

  const contributors = getReposContributors(username, repoName)
    .then((data: any) => console.log(data));


  return (
    <>
      <StyledUl>
        {
          //nodes.map((collaborator: Collaborator, index: number) => 
          //  <StyledLi key={index}>{collaborator.login}</StyledLi> ) 
        }
      </StyledUl>
    </>
  )
}

export default CollaboratorsContainer;