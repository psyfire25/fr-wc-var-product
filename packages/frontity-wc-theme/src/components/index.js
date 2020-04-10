import React from "react";
import { Box, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { Head, styled } from "frontity";
import Header from "./header";
import Main from "./main";
import ModalNotification from "./modal-notification";

const Theme = () => (
  <ThemeProvider theme={{ ...theme }}>
    <Head>
      <title>Covid Clothing</title>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.1/css/all.css"
      ></link>
    </Head>
    <CSSReset />
    <ContentWrapper width={["1160px"]} margin="0 auto" maxWidth="90%">
      <Header />
      <Main />
    </ContentWrapper>
    <ModalNotification />
  </ThemeProvider>
);

export default Theme;

const ContentWrapper = styled.div`
  dispaly: flex;
  justify-content: space-around;
`;
