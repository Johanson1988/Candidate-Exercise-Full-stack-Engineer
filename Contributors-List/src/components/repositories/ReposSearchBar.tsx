/**
 * React Functional Component
 * Renders a searchbar to filter repositories.
 * PROPS:
 *  @param {function} handlefilter Callback function to update state
 *  in parent component: RepositoriesContainer.
 *  @param {string} value State property filter of parent component: RepositoriesContainer,
 *  is the value of the filter to filter repositories list.
 */

import React from "react";
import styled from 'styled-components';

/** Styled Components */

const StyledDiv = styled.div.attrs({
    className: "row"
})`
    width: 60%;
    text-align: center;
    margin: 0 auto;
`;

 type Props = {
    handleFilter: (e:React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const ReposSearchBar: React.FC<Props> = ({ handleFilter, value }) => 
            <StyledDiv>
                <label htmlFor="repos-searchbar" style={{display: "none"}}>Repo's searchbar</label>
                <input
                    type="text"
                    data-testid="repos-searchbar"
                    id="repos-searchbar"
                    onChange={handleFilter}
                    value={value} 
                    placeholder="Type to filter repos"       
                />
            </StyledDiv>

export default ReposSearchBar;