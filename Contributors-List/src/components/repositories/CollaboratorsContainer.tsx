import React from "react";

type Props = { collaborators: [] }

const CollaboratorsContainer: React.FC<Props> = ({ collaborators }) => {
  console.log(collaborators);
  return (
    <div>
      <ul>
        <li>Coll 1</li>
        <li>Coll 2</li>
      </ul>
    </div>
  )
}

export default CollaboratorsContainer;