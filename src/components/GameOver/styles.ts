import styled from "styled-components";

interface StyledGameOverProps {
    gameOver?: boolean;
}

export const StyledGameOver = styled.div<StyledGameOverProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 1px solid goldenrod;
    min-height: 30px;
    width: 100%;
    border-radius: 10px;
    color: ${({ gameOver }) => (gameOver ? "white" : "goldenrod")};
    text-shadow: 0.25px 0.25px 0 #0ff, -0.25px 0.25px 0 #f00;
    font-weight: bold;
    background: ${({ gameOver }) =>
        gameOver ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.75)"};
    font-size: 1rem;
    @media (max-width: 768px) {
        padding: 5px;
        margin: 5px 5px 10px 5px;
        font-size: 12px;
    }
`;