import React, { FC } from 'react';
import Cell from '../Cell';
import { StyledStage } from './styles';

interface StageProps {
  stage: any | React.Dispatch<React.SetStateAction<[][][]>>;
}

export const Stage: FC<StageProps> = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row: [][]) =>
        row.map((cell: [], x: number) => <Cell key={x} type={cell} />)
      )}
    </StyledStage>
  );
};
