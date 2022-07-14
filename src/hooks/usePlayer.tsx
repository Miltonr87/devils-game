import { useCallback, useState } from "react";
import { checkCollission, STAGE_WIDTH } from "../utils/gameHelper";
import { randomTetromino, TETROMINOS } from "../utils/tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {
            x: 0,
            y: 0,
        },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const rotate = (matrix: [], dir: number) => {
        // rotate row to cols (transpose)
        const rotatedTetro = matrix.map((_, index) =>
            matrix.map((col) => col[index])
        );
        // reverse each row to get a rotated tetromino
        if (dir > 0) return rotatedTetro.map((row) => row.reverse());
        return rotatedTetro.reverse();
    };

    const rotateActiveTetromino = (stage: any[], dir: number) => {
        // deep clone player
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

        const pos = clonedPlayer.pos.x;
        let offset = 1;

        while (checkCollission(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    };

    interface updatePlayerPropsArgs {
        x: number;
        y: number;
        collided?: boolean;
    }

    const updatePlayerPos = ({ x, y, collided }: updatePlayerPropsArgs) => {
        if (collided) {
            setPlayer((prev) => ({
                ...prev,
                pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
                collided,
            }));
        } else {
            setPlayer((prev) => ({
                ...prev,
                pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            }));
        }
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        });
    }, []);

    return [
        player,
        updatePlayerPos,
        resetPlayer,
        rotateActiveTetromino,
    ] as const;
};
