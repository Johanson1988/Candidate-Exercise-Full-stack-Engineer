import React, { useState } from "react";

import CollaboratorsContainer from './CollaboratorsContainer';

/**
 * React Functional Component
 * Renders  a card with each repository item
 * 
 * PROPS:
 *  @param {string} name Repo's name.
 *  @param {string} description Repo's description
 */


type Props = {
    name: string,
    description: string,
}

const RepoListElement: React.FC<Props> = ({ name, description }) => {
    const [click, setClick] = useState(false);

    const handleClick = (event: any) => {
        setClick(!click);
        console.log(click);
    }

    return (
        
        <li className="repo-li-element card-panel teal" onClick={handleClick}>
            <p className="white-text">{name}</p>
            <span className="white-text">{description}</span>
            {
                click ?
                    <CollaboratorsContainer /> :
                    null
            }
        </li>
    )
}

export default RepoListElement;