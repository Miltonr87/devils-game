import React, { FC, useState } from 'react';
import * as S from '../styles/styles';

interface StartButtonProps {
  callback(): void;
  gameOver: boolean;
}

export const StartButton: FC<StartButtonProps> = ({
  callback,
  gameOver,
}: StartButtonProps) => {
  const [isFirstTimePlay, setIsFirstTimePlay] = useState(true);

  return (
    <S.StyledStartButton
      onClick={() => {
        if (isFirstTimePlay) {
          setIsFirstTimePlay(false);
        }
        callback();
      }}
    >
      <span className={isFirstTimePlay ? 'blinking-text' : ''}>
        {gameOver ? 'Restart Game' : 'Start Game'}
      </span>
    </S.StyledStartButton>
  );
};
