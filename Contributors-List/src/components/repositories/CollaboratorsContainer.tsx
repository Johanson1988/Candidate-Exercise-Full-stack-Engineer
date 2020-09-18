import React from "react";

type Props = { collaborators: { nodes: [] } };

type Collaborator = { login: string };

const CollaboratorsContainer: React.FC<Props> = ({ collaborators: { nodes} }) => {

  return (
    <div>
      <ul>
        {
          nodes.map((collaborator: Collaborator, index: number) => 
            <li key={index}>{collaborator.login}</li>  
          ) 
        }
      </ul>
    </div>
  )
}

export default CollaboratorsContainer;