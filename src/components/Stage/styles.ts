import styled from "styled-components";

interface StyledStageProps {
    height: string | number;
    width: string | number;
}

export const StyledStage = styled.div<StyledStageProps>`
    display: grid;
    grid-template-rows: repeat(
        ${({ height }) => height},
        calc(25vw / ${({ width }) => width})
    );
    grid-template-columns: repeat(${({ width }) => width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: rgba(0, 0, 0, 0.75);
    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 0px;
        margin-bottom: 5px;
        grid-template-rows: repeat(
            ${({ height }) => height},
            calc(60vw / ${({ width }) => width})
        );

        grid-template-columns: repeat(${({ width }) => width}, 1fr);
    }
`;
