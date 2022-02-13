import "../styles/globals.css";
import TopBar from "../components/TopBar";
import SideTemplate from "../components/SideTemplate";
import { ThemeProvider } from "@material-ui/styles";
import theme from "@tenjinonline/react-mui-components/dist/themes/defaultSmall";
import { Grid } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          <Grid container item xs={12} direction="row">
            <Grid>
              <SideTemplate />
            </Grid>
            <Grid>
              <Component {...pageProps} />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
