import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import {
  Title,
  Bottom,
  Dashboard,
  Left,
  Right,
  Bill,
  Tip,
  People,
  Input,
  Buttons,
} from "../Util";

const Calculator = () => {
  return (
    <StyleCalculator>
      <Title>
        <h2>
          spli<span>tter</span>
        </h2>
      </Title>
      <Bottom>
        <Dashboard>
          <Left>
            <Bill>
              <h4>Bill</h4>
              <Input>
                <FontAwesomeIcon icon={faDollarSign} />
                <span>0</span>
              </Input>
            </Bill>
            <Tip>
              <h4>Select Tip %</h4>
              <Buttons>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <button>Custom</button>
              </Buttons>
            </Tip>
            <People>
              <h4>Number Of People</h4>
              <Input>
                <FontAwesomeIcon icon={faUser} />
                <span>0</span>
              </Input>
            </People>
          </Left>
          <Right>
            <TipTotal>
              <Text>
                <h4>Tip Amount</h4>
                <p>/ person</p>
              </Text>
              <h1>$0.00</h1>
            </TipTotal>
            <TipTotal>
              <Text>
                <h4>Tip Amount</h4>
                <p>/ person</p>
              </Text>
              <h1>$40.00</h1>
            </TipTotal>
            <Reset>
              <button>Reset</button>
            </Reset>
          </Right>
        </Dashboard>
      </Bottom>
    </StyleCalculator>
  );
};

const StyleCalculator = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TipTotal = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  align-items: center;
  h1 {
    color: hsl(172, 67%, 45%);
  }
`;

const Reset = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  button {
    background: hsl(172, 67%, 45%);
    width: 75%;
    margin-bottom: 2rem;
    padding: 0.75rem 0;
    text-transform: uppercase;
    color: hsl(183, 100%, 15%);
  }
`;

const Text = styled.div`
  h4 {
    color: #fff;
  }
  p {
    color: gray;
    font-size: 0.75rem;
  }
`;

export default Calculator;
