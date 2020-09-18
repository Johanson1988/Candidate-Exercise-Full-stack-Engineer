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
    collaborators: { nodes: [] },
}

const RepoListElement: React.FC<Props> = ({ name, description, collaborators }) => {
    //TODO añadir tipos a este useState y a todos
    const [click, setClick] = useState(false);

    const handleClick = (event: any) => {
        //TODO cambiar este any
        setClick(!click);
        console.log(click);
    }

    return (
        
        <li className="repo-li-element card-panel teal" onClick={handleClick}>
            <p className="white-text">{name}</p>
            <span className="white-text">{description}</span>
            {
                click ?
                    <CollaboratorsContainer collaborators={collaborators} /> :
                    null
            }
        </li>
    )
}

export default RepoListElement;