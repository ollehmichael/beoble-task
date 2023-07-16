import React from 'react';
import { Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';

interface AvatarBoxProps {
  source: string | null;
}

export const AvatarBox: React.FC<AvatarBoxProps> = ({ source }) => {
  return source ? (
    <Avatar>
      <Person />
    </Avatar>
  ) : (
    <Avatar src={source!} />
  );
};
