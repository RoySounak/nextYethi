import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import { useRouter } from "next/router";
import { Button, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import BusinessIcon from "@material-ui/icons/Business";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    // marginLeft: theme.spacing(1),
    position: "relative",
    width: "240px",
    height: "520px",
    marginTop: "10px",
    marginLeft: "12px",
    // marginTop: "64px",
  },
  papeShrinkr: {
    // marginLeft: theme.spacing(1),
    position: "relative",
    width: "80px",
    height: "520px",
    marginTop: "10px",
    marginLeft: "12px",
    // marginTop: "64px",
  },
}));

export default function SideTemplate() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  ///

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
      className={menuOpen ? classes.paper : classes.papeShrinkr}
    >
      <MenuList>
        <div>
          <div>
            {modules.map((module, index) =>
              menuOpen ? (
                <>
                  <MenuItem
                    key={index}
                    onClick={() => router.push(module.href)}
                  >
                    {module.title}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    key={index}
                    onClick={() => router.push(module.href)}
                  >
                    <Grid container justifyContent="center">
                      {module.icon}
                    </Grid>
                  </MenuItem>
                </>
              )
            )}
          </div>
        </div>
      </MenuList>

      <Button
        onClick={() => handleShrink()}
        color="primary"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          left: 0,
          backgroundColor: "lightblue",
        }}
      >
        {menuOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>
    </Grid>
  );
}
