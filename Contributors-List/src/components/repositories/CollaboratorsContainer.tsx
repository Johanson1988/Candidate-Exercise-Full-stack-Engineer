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

type Contributor =  string;

const CollaboratorsContainer: React.FC<Props> = ({ username, repoName }) => {

  const [contributors, setContributors] = useState([])

    useEffect(():void => {
      // Using an IIFE
      (async function () {
          setContributors(await getReposContributors(username, repoName));
      })();
    // eslint-disable-next-line    
    },[]);

    useEffect(():void => {
      console.log(contributors)
    // eslint-disable-next-line    
    },[contributors]);

  return (
    <>
      <StyledUl>
        {
          contributors.map((contributor: Contributor, index: number) => 
            <StyledLi key={index}>{contributor}</StyledLi> ) 
        }
      </StyledUl>
    </>
  )
}

export default CollaboratorsContainer;