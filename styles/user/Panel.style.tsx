import styled from 'styled-components'
import {Colors} from "../Colors.style";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84vh;
`;

export const Box = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: ${Colors.lightGray};
`;

