import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Centered = styled.div`
  width: 85vw;
  max-width: 1500px;
  min-width: 500px;
`;

const Container = ({ children }) => (
  <Wrapper>
    <Centered>{children}</Centered>
  </Wrapper>
);

export default Container;
