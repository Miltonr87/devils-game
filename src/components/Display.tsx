import React from 'react';
import * as S from '../styles/styles';

interface DisplayProps {
  gameOver?: boolean;
  text: string;
}

export const Display = ({ gameOver, text }: DisplayProps) => {
  return <S.StyledDisplay gameOver={gameOver}>{text}</S.StyledDisplay>;
};
