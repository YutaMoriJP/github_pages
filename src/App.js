import React, { useMemo, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Button from "@material-ui/core/Button";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box
    }
  body {
    background-color: ${props => props.theme.backgorund};
    color: ${({ theme }) => theme.color}
  }
`;

const themeColor = {
  dark: {
    backgorund: "#212529",
    color: "#e9ecef",
  },
  light: {
    backgorund: "#e9ecef",
    color: "#212529",
  },
};

const useStyle = makeStyles({
  typography: { textAlign: "center" },
  button: { margin: "auto", display: "block" },
  paper: {
    padding: 10,
    maxWidth: 400,
    height: 200,
    maxHeight: 300,
    margin: 10,
  },
});

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = useMemo(() =>
    createMuiTheme({
      palette: {
        type: isDark ? "dark" : "light",
        primary: { main: isDark ? "#91a7ff" : "#364fc7" },
      },
    })
  );
  const classes = useStyle();
  return (
    <StyledThemeProvider theme={isDark ? themeColor.dark : themeColor.light}>
      <ThemeProvider theme={theme}>
        <Global />
        <Container>
          <Grid container spacing={1} justify="center">
            <Grid item xs={10} md={5} lg={4}>
              <Paper elevation={22} className={classes.paper}>
                <Typography variant="h4" className={classes.typography}>
                  Github pages
                </Typography>
                <Button
                  fullWidth={true}
                  className={classes.button}
                  onClick={() => setIsDark(prevIsDark => !prevIsDark)}
                  color="primary"
                  variant="contained"
                >
                  Switch Theme
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;
