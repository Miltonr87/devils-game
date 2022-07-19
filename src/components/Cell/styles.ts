import styled from "styled-components";

type StyledCellProps = {
    color: string | number;
    type: string | number;
};

export const StyledCell = styled.div<StyledCellProps>`
    width: auto;
    background: rgba(${({ color }) => (color ? color : "0,0,0")}, 0.5);
    border: ${({ type }) => (type === 0 ? "0px solid" : "5px solid")};
    border-bottom-color: rgba(${({ color }) => color}, 0.1);
    border-right-color: rgba(${({ color }) => color}, 1);
    border-top-color: rgba(${({ color }) => color}, 1);
    border-left-color: rgba(${({ color }) => color}, 0.3);
`;