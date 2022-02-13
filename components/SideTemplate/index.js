import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { Button, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import BusinessIcon from "@material-ui/icons/Business";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
// import styles from "../../styles/SideTemplate.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    position: "relative",
    width: "240px",
    height: `calc(100vh - 70%)`,
    marginTop: "10px",
    marginLeft: "12px",
    marginBottom: "10px",
  },
  papeShrink: {
    position: "relative",
    width: "80px",
    height: `calc(100vh - 70%)`,
    marginTop: "10px",
    marginLeft: "12px",
    marginBottom: "12px",
  },
}));

export default function SideTemplate() {
  const classes = useStyles();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(true);

  const modules = [
    {
      href: "/projects",
      active: false,
      icon: <BusinessIcon />,
      title: "Projects",
    },
    {
      href: "/design",
      active: true,
      icon: <ChromeReaderModeIcon />,
      title: "Test Design",
    },
    {
      href: "/automation",
      active: false,
      icon: <BubbleChartIcon />,
      title: "Automation",
    },
  ];

  const handleShrink = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <Grid
      component={Paper}
      className={menuOpen ? classes.paper : classes.papeShrink}
    >
      <MenuList>
        {modules.map((module, index) =>
          menuOpen ? (
            <>
              <MenuItem
                key={module.title}
                onClick={() => router.push(module.href)}
              >
                {module.title}
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                key={module.title}
                onClick={() => router.push(module.href)}
              >
                <Grid container justifyContent="center">
                  {module.icon}
                </Grid>
              </MenuItem>
            </>
          )
        )}
      </MenuList>

      <Button
        onClick={() => handleShrink()}
        color="primary"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          left: 0,
          backgroundColor: "#EEF3FC",
        }}
      >
        {menuOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>
    </Grid>
  );
}
