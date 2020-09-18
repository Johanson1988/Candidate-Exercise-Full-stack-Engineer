/**
 * React Functional Component
 * Renders a form with a text input to introduce username. Once the form is
 * submitted, callback from parent component is launched to make an API call
 * to get user data.
 * PROPS:
 *  @param {function} findUser Callback function to trigger API call in parent component
 *  passing username introduced by the user.
 */

import React, { useState } from "react";
import styled from 'styled-components';

/** Styled Components */

const StyledForm = styled.form.attrs({
    className: "row"
})`
    width: 60%;
    text-align: center;
    margin: 0 auto;
`;

const StyledButton = styled.button.attrs({
    className: "btn waves-effect waves-light"
})`
    margin-top: 1em;
`;

type Props = {
    findUser: (username:string) => void
}

const UserSearchBar: React.FC<Props> = ({ findUser }) => {

    const [username, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        findUser(username);
    }

    return(
        <StyledForm onSubmit={handleSubmit} data-testid="user-searchbar">
            <label htmlFor="user-searchbar">Introduce a Github username:</label>
            <input
                type="text"
                id="user-searchbar"
                value={username}
                placeholder="Press ENTER or hit Find User"
                onChange={ (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void => setUserName(e.target.value) }
            />
            <StyledButton type="submit">Find User</StyledButton>
        </StyledForm>
    );
}

export default UserSearchBar;