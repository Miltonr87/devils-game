import { useState, useEffect } from "react";
import { createStage } from "../utils/gameHelper";

interface playerArgs {
    pos: {
        x: number;
        y: number;
    };
    tetromino: any[];
    collided: boolean;
}

export const useStage = (player: playerArgs, resetPlayer: () => void) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = (newStage: any[][]) =>
            newStage.reduce((accumulator, row) => {
                if (row.findIndex((cell: any[]) => cell[0] === 0) === -1) {
                    setRowsCleared((prev) => prev + 1);
                    accumulator.unshift(
                        new Array(newStage[0].length).fill([0, "clear"])
                    );
                    return accumulator;
                }
                accumulator.push(row);
                return accumulator;
            }, []);

        const updateStage = (prevStage: [][][]) => {
            // flush the stage
            const newStage = prevStage.map((row: [][]) =>
                row.map((cell: any[]) =>
                    cell[1] === "clear" ? [0, "clear"] : cell
                )
            );

            // draw the tetromino
            player.tetromino.forEach((row: [], y: number) => {
                row.forEach((value: number, x: number) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? "merged" : "clear"}`,
                        ];
                    }
                });
            });

            // check if we collided
            if (player.collided) {
                resetPlayer();
                return sweepRows(newStage);
            }

            return newStage;
        };

        setStage((prev) => updateStage(prev));
    }, [player, resetPlayer]);

    return [stage, setStage, rowsCleared] as const;
};
