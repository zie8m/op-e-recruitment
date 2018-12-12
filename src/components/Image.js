import styled from "styled-components";

const Image = styled.img`
  content: url("${props => props.src}")
  height: 120px;
  width: 120px;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
`;

export default Image;
