import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";

const StyledMenu = withStyles({
  //   paper: {
  //     border: "1px solid #d3d4d5",
  //   },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function TopMenu() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const profMenus = [
    {
      icon: <ListAltIcon fontSize="small" />,
      title: "Profile",
      link: true,
      to: "/users",
    },
    {
      icon: <i className="icon icon-icon-cubes" />,
      title: "Log Out",
      link: true,
      to: "/",
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        variant="rounded"
        style={{
          color: "#fff",
          backgroundColor: "green",
          cursor: "pointer",
          width: "2rem",
          height: "1.6rem",
          marginTop: "6px",
        }}
        onClick={handleClick}
      >
        S
      </Avatar>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {profMenus.map((menu) => (
          <>
            <StyledMenuItem
              onClick={() => {
                router.push(menu.to);
                handleClose();
              }}
            >
              <ListItemIcon>
                {/* <SendIcon fontSize="small" /> */}
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </StyledMenuItem>
          </>
        ))}
      </StyledMenu>
    </div>
  );
}
