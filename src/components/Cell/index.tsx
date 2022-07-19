import React, { FC, memo } from 'react';
import { TETROMINOS } from '../../utils/tetrominos';
import { StyledCell } from './styles';

interface CellProps {
  type: any[];
}

const Cell: FC<CellProps> = ({ type }: CellProps) => {
  const tetroColor = TETROMINOS[type[0]].color;
  return <StyledCell type={type[0]} color={tetroColor} />;
};

export default memo(Cell);
