import React from 'react';
import styled from "@emotion/styled";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 0.8rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 0.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}