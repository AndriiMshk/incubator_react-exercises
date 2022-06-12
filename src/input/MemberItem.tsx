import React, { useState } from 'react';
import { Rating2 } from '../Rating/Raiting2';

type MemberItemPropsType = {
  id: string
  name: string
  members: any
  rating: number
  setMembers: any
}

export const MemberItem: React.FC<MemberItemPropsType> = (
  {
    id,
    name,
    members,
    rating,
    setMembers,
  },
) => {

  const [ratingItem, setRatingItem] = useState(rating);



  return (
    <li>
      {name} {ratingItem}
      <Rating2 value={ratingItem} onClick={setRatingItem} />
    </li>
  );
};
