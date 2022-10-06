import React from "react";
import CallIcon from "@mui/icons-material/Call";
import styled from "@emotion/styled";
import PText from "./PText";

const ItemStyles = styled.div`
  background-color: #21325e;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 10px;  
  .icon {
    color: yellow;
    background-color: red;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .info {
    color: yellow;
    padding: 1rem;
  }
  svg {
    width: 1.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <CallIcon />,
  text = "I need text ",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
