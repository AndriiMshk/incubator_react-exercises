import React, { useState } from 'react';
import { v1 } from 'uuid';
import { MemberItem } from './MemberItem';

export const Input3 = () => {

  const [members, setMembers] = useState([
    { id: v1(), name: 'Valera', rating: 0 },
    { id: v1(), name: 'Igor', rating: 1 },
    { id: v1(), name: 'Pedro', rating: 2 },
    { id: v1(), name: 'Rafik', rating: 3 },
  ]);

  return (
    <div>
      <ul>
        {members.map(member => <MemberItem
          key={member.id}
          id={member.id}
          name={member.name}
          members={members}
          rating={member.rating}
          setMembers={setMembers}
        />)}
      </ul>
    </div>
  );
};
