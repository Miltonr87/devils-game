import React, { useState } from 'react';
import Sound from 'react-sound';
import Modal from 'react-modal';
import { Stage } from './Stage';
import { Display } from './Display';
import { StartButton } from './StartButton';
import { MobileNav } from './MobileNav';
import { createStage, checkCollission } from '../utils/gameHelper';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import * as S from '../styles/styles';
import logo from '../assets/diablo.gif';
import arrows from '../assets/arrows.png';
import tetrisMp3 from '../assets/tetris.mp3';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type DropTime = null | number;

export const Tetris = () => {
  const [dropTime, setDropTime] = useState<DropTime>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstTimeChangeSound, setIsFirstTimeChangeSound] = useState(true);

  const [player, updatePlayerPos, resetPlayer, rotateActiveTetromino] =
    usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [
    score,
    setScore,
    rows,
    setRows,
    level,
    setLevel,
    isSuccessRowsCleared,
    setIsSuccessRowsCleared,
  ] = useGameStatus(rowsCleared);

  const moveActiveTetromino = (dir: number) => {
    if (!checkCollission(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({
        x: dir,
        y: 0,
      });
    }
  };

  const startGame = () => {
    if (isFirstTimeChangeSound) {
      setIsFirstTimeChangeSound(false);
      setIsPlaying(true);
    }
    // reset everythingg
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
  };

  const drop = () => {
    // increase level when player clear 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollission(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({
        x: 0,
        y: 1,
        collided: false,
      });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({
        x: 0,
        y: 0,
        collided: true,
      });
    }
  };

  const keyUp = ({ keyCode }: React.KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      if (keyCode === 40) {
        // down key
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }: React.KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // left arrow
        moveActiveTetromino(-1);
      } else if (keyCode === 39) {
        // right arrow
        moveActiveTetromino(1);
      } else if (keyCode === 40) {
        // down arrow
        dropPlayer();
      } else if (keyCode === 38) {
        // up arrow
        rotateActiveTetromino(stage, 1);
      }
    }
  };

  useInterval(() => {
    if (isSuccessRowsCleared) {
      setIsSuccessRowsCleared(false);
    }
    drop();
  }, dropTime);

  const date = new Date().getFullYear();

  return (
    <>
      <S.TetrisTitleMobile src={logo} />
      <Sound
        url={tetrisMp3}
        playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
        loop={true}
      />
      <S.SoundControlButton
        className={!isPlaying ? 'off' : ''}
        onClick={() => {
          if (isFirstTimeChangeSound) {
            setIsFirstTimeChangeSound(false);
          }
          setIsPlaying(!isPlaying);
        }}
      />

      <S.StyledTetrisWrapper
        role="button"
        tabIndex={0}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => move(e)}
        onKeyUp={keyUp}
      >
        <S.StyledTetris>
          <S.StageWrapper
            className={
              gameOver ? 'gameover' : isSuccessRowsCleared ? 'cleared' : ''
            }
          >
            <Stage stage={stage} />
          </S.StageWrapper>

          {window.innerWidth <= 768 ? (
            <MobileNav
              upAction={() => rotateActiveTetromino(stage, 1)}
              leftAction={() => moveActiveTetromino(-1)}
              rightAction={() => moveActiveTetromino(1)}
              downAction={() => drop()}
              startGame={startGame}
              gameOver={gameOver}
              score={score}
              rows={rows}
              level={level}
              showNavAction={() => setShowGuide(true)}
            />
          ) : (
            <>
              <aside>
                <S.SummaryInfoWrapper>
                  <S.TetrisTitle className="desktop-logo" src={logo} />
                  {gameOver ? (
                    <>
                      <Display
                        text="👹 HIGHWAY TO HELL"
                        gameOver={gameOver}
                      ></Display>
                      <Display text={`⭐ SCORE: ${score}`} />
                    </>
                  ) : (
                    <>
                      <Display text={`⭐ SCORE: ${score}`} />
                      <Display text={`❤️‍🔥 HEAL: ${rows}`} />
                      <Display text={`🔥 HELL: ${level}`} />
                    </>
                  )}
                  <StartButton gameOver={gameOver} callback={startGame} />
                  <S.ShowGuideButton onClick={() => setShowGuide(true)}>
                    🕹️ Controls
                  </S.ShowGuideButton>
                  <S.Signature>© Milton Rodrigues - {date}</S.Signature>
                </S.SummaryInfoWrapper>
              </aside>
            </>
          )}
        </S.StyledTetris>
      </S.StyledTetrisWrapper>
      <Modal isOpen={showGuide} style={customStyles}>
        <S.CloseGuideModalButton onClick={() => setShowGuide(false)}>
          X
        </S.CloseGuideModalButton>
        <S.GuideModalTitle>Controls</S.GuideModalTitle>
        <S.GuideContentContainer>
          <S.GuideArrowImage src={arrows} alt="nav" />
          <S.GuideContentInnerContainer>
            <p>Up: rotate brick</p>
            <p>Left: move left</p>
            <p>Right: move right</p>
            <p>Down: move down</p>
            {window.innerWidth > 768 ? (
              <p>Hold Down: move down quickly</p>
            ) : null}
          </S.GuideContentInnerContainer>
        </S.GuideContentContainer>
      </Modal>
    </>
  );
};
