export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, "clear"])
    );

interface checkCollisionposArgs {
    x: number;
    y: number;
}

interface checkCollisionPlayerArgs {
    pos: {
        x: number;
        y: number;
    };
    tetromino: any[];
}

export const checkCollission = (
    player: checkCollisionPlayerArgs,
    stage: any[],
    { x: moveX, y: moveY }: checkCollisionposArgs
) => {
    // Using for loops to be able to return (and break). Not possible with forEach
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            if (player.tetromino[y][x] !== 0) {
                if (
                    !stage[y + player.pos.y + moveY] ||
                    !stage[y + player.pos.y + moveY][
                    x + player.pos.x + moveX
                    ] ||
                    stage[y + player.pos.y + moveY][
                    x + player.pos.x + moveX
                    ][1] !== "clear"
                ) {
                    return true;
                }
            }
        }
    }
    // 5. If everything above is false
    return false;
};
