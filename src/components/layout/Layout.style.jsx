import styled from "styled-components";

export const LayoutContainer = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 0.5fr 2fr 0.5fr 0.3fr;
  grid-template-areas:
    "header header header header"
    "sidebar main main  main"
    "sidebar main main main"
    "footer footer footer footer";
  grid-gap: 0.3rem;
`;
