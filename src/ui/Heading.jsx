import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  text-transform: ${(props) => (props.upper === true ? "uppercase" : "")};

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 60px;
      font-weight: 500;
      text-transform: uppercase;

      text-align: ${(props) => props.align};
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}


    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `} /* line-height:1.4; */
`;

export default Heading;
