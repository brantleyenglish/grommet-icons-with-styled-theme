import React from "react";
import { Heading } from "grommet";
import { Facebook } from 'grommet-icons';

import styled from 'styled-components';
import { palette } from "./theme";

const StyledHr = styled.hr`
  border-color: ${props => props.theme.gold};
`;
const StyledHeading = styled.h1`
  color: ${props => props.theme.gold};
`;

const Home = () => {
  return (
    <div>
      <StyledHeading>testing</StyledHeading>
      <Heading>Best heading ever - should be blue</Heading>
      <p>How can Grommet give styles/colors to all Headings in the app?</p>
      <StyledHr />
      <p>
        Similarly to Sylted-Components, how can I add SASS styles to globally
        style all other HTML elements? Like: "<hr />
        ".
      </p>
      <Facebook />
      <hr />
    </div>
  );
};

export default Home;
