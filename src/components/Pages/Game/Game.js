import styled from "styled-components";
import { Button } from "@material-ui/core";

export const GameSection = styled.div`
  text-align: center;
`;

export const ScreenshotsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ScreenshotsList = styled.li`
  width: 100%;
  margin-right: 15px;

  &:hover {
    color: black;
    transition: 0.5s ease-out;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const Screenshots = styled.img`
  width: 100%;
  height: 100%;
`;

export const ButtonLabel = styled.label`
  background-color: black;
  top: 10rem;
  right: 0;
  position: fixed;
  transform: translate(0, 24px) scale(1);
`;

export const ButtonUI = styled(Button)`
  margin-top: 20px;
  padding: 8px 10px;
  line-height: 1.2;
  border-radius: 90px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-right-color: rgba(0, 0, 0, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: 0;
  font-size: 20px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
`;
