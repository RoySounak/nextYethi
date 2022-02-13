import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { useRouter } from "next/router";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import WorkIcon from "@material-ui/icons/Work";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
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

  const appsMenu = [
    {
      icon: <ListAltIcon fontSize="small" />,
      title: "Projects",
      description: "Create and Manage Projects",
      link: true,
      to: "/projects",
    },
    {
      icon: <PhoneIphoneIcon fontSize="small" />,
      title: "Applications",
      description: "Create and Manage Apps under Test",
      link: true,
      to: "/applications",
    },
    {
      icon: <WorkIcon fontSize="small" />,
      title: "Agents",
      description: "Manage agents for Automated Tests",
      link: true,
      to: "/agents",
    },
    {
      icon: <RecordVoiceOverIcon fontSize="small" />,
      title: "Users",
      description: "Create and Manage Users",
      link: true,
      to: "/users",
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <AppsIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {appsMenu.map((menu, index) => (
          <>
            <StyledMenuItem
              key={index}
              onClick={() => {
                router.push(menu.to);
                handleClose();
              }}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} secondary={menu.description} />
            </StyledMenuItem>
          </>
        ))}
      </StyledMenu>
    </div>
  );
}
