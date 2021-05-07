import styled from "styled-components";
import { Link } from "react-router-dom";

export const GamesRecent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

export const LinkRouter = styled(Link)`
  color: #fff;
  text-decoration-line: none;
`;

export const GameMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: center;
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;

  &:hover {
    background-color: #fff;
    color: black;
    transition: 0.5s ease-out;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }

  @media screen and (max-width: 550px) {
    width: 46%;
  }
`;

export const GamePoster = styled.img`
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const Title = styled.b`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 8px 0;
`;

export const subTitle = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
  padding-bottom: 3px;
`;
