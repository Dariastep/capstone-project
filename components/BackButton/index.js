import styled from "styled-components";
import Link from "next/link";

export default function BackButton() {
  return (
    <StyledLink href="/">
      <Back>&larr;</Back>
    </StyledLink>
  );
}

const Back = styled.span`
  display: inline-block;

  color: "black";
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: var(--tercery-color);
    border-radius: 30%;
  }
`;
const StyledLink = styled(Link)`
  transition: 0.3s ease-in-out;

`;
