/**
 * React Functional Component
 * Container for Repository elements. Recieves username as a prop,
 * emits an API call to get user's repo data and displays
 * the information.
 * 
 * Once information is fetched, searchbar is displayes. When user
 * types, repositories are filtered with user input.
 * 
 * PROPS:
 *  @param {string} username username.
 */

import React, { useEffect, useState } from "react";
import styled from 'styled-components';

/** Import Components */
import ReposSearchBar from './ReposSearchBar';
import RepoListElement from './RepoListElement';
import Loading from '../layout/Loading';

/** Styled Components */
const StyledUl = styled.ul`
    max-width: 60%;
    min-width: 40%;
    max-height: 23em;
    overflow-y: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    text-align: center;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }
`;
type Props = { repositories: any[] };

//TODO cambiar este any

type ReposArray = { name: string, description: string, collaborators: { nodes: [] } }[];

const RepositoriesContainer: React.FC<Props> = ({ repositories }) => {

    const [reposList, setReposList] = useState<ReposArray | null>(null);
    const [filter, setFilter] = useState<string>('');

    const handleFilter = (e:React.FormEvent<HTMLInputElement>):void => {
        setFilter(e.currentTarget.value);
    }
    /** Load repositories to the state on the first render */
    useEffect(():void => {
        setReposList(repositories);
        // eslint-disable-next-line    
    }, [])
    /** If repositories has changed, set the filter state to empty */
    useEffect(():void => {
      setFilter('');
    // eslint-disable-next-line    
    }, [repositories]);
    
    return(
        <>
            {
                Array.isArray(reposList) ? 
                    <ReposSearchBar handleFilter={handleFilter} value={filter} /> :
                    <Loading />
            }
            <StyledUl data-testid="repos-container" className="repos-container">
            {
                Array.isArray(reposList) && reposList.filter(
                        repoElement => repoElement.name.toLowerCase().includes(filter.toLowerCase())
                    ).map((repoElement, index) => 
                        <RepoListElement
                            key={index}
                            name={repoElement.name}
                            description={repoElement.description}
                            collaborators={repoElement.collaborators}
                        />
                    )
            }
            </StyledUl>
        </>
    )
}

export default RepositoriesContainer;