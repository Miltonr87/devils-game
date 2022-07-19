import React, { FC, useState } from 'react';
import { StyledStartButton } from './styles';

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
    <StyledStartButton
      onClick={() => {
        if (isFirstTimePlay) {
          setIsFirstTimePlay(false);
        }
        callback();
      }}
    >
      <span className={isFirstTimePlay ? 'blinking-text' : ''}>
        {gameOver ? 'RESTART' : 'START'}
      </span>
    </StyledStartButton>
  );
};
