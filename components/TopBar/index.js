import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import TopMenu from "../TopMenu";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import ProfileMenu from "../ProfileMenu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  addIcon: { color: "#44409A", cursor: "pointer", marginTop: "0.8rem" },
}));

const TopBar = ({ open, setOpen, handleDrawerOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Grid container direction="row">
            <Grid item xs={2} style={{ display: "flex" }}>
              <Typography
                variant="h6"
                noWrap
                style={{
                  color: "black",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={() => router.push("/")}
              >
                Tenjin Online
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                style={{ marginLeft: "20px" }}
              />
            </Grid>

            <Grid item xs={7}></Grid>
            <Grid item xs={1}>
              <TopMenu />
            </Grid>
            <Grid item xs={1}>
              <AddCircleOutlineIcon
                onClick={() => window.alert("Work in Progress")}
                style={{
                  color: "#44409A",
                  cursor: "pointer",
                  marginTop: "0.8rem",
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <ProfileMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
