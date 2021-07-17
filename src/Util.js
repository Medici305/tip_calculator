import styled from "styled-components";

/* First Layer */
export const Title = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(186, 14%, 43%);
  span {
    display: block;
  }
  @media (max-width: 768px) {
    flex: 0.2;
  }
`;

export const Bottom = styled.div`
  flex: 0.75;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex: 0.8;
  }
`;

/* Second Bottom Layer */
export const Dashboard = styled.div`
  background: white;
  height: 70%;
  width: 60%;
  border-radius: 2rem;
  display: flex;
  padding: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

/* Third Dashboard Layer */
export const Left = styled.div`
  flex: 1;
  //border: 2px solid red;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex: 0.65;
  }
`;

export const Right = styled(Left)`
  //border-color: blue;
  background: hsl(183, 100%, 15%);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  @media (max-width: 768px) {
    flex: 0.35;
  }
`;

/* Fourth Left Layer */
export const Bill = styled.div`
  //border: 2px solid green;
  flex: 0.3;
`;

export const Tip = styled.div`
  //border: 2px solid green;
  flex: 0.4;
  display: flex;
  flex-direction: column;
`;

export const People = styled.div`
  //border: 2px solid green;
  flex: 0.3;
`;

/* Fourth Right Layer */

// Components
export const Input = styled.div`
  width: 95%;
  background: hsl(189, 41%, 97%);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.2rem;
  margin: 0.5rem;
  svg,
  span {
    color: hsl(184, 14%, 56%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  //border: 2px solid yellow;
  flex: 1;
`;
