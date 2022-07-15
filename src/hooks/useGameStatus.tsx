import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);
  const [isSuccessRowsCleared, setIsSuccessRowsCleared] = useState(false);

  const calcScore = useCallback(() => {
    const linePoints = [40, 100, 300, 1200];
    if (rowsCleared > 0) {
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
      setIsSuccessRowsCleared(true);
    }
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
    }
  }, [level, rowsCleared, rows]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [
    score,
    setScore,
    rows,
    setRows,
    level,
    setLevel,
    isSuccessRowsCleared,
    setIsSuccessRowsCleared,
  ] as const;
};
