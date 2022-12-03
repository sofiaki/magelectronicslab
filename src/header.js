import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "./mel2.png";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [scrollUp, setScrollUp] = React.useState(false);
  const [scrollDown, setScrollDown] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [prevDirection, setPrevDirection] = React.useState(-1);

  const toggleScroll = () => {
    if (direction !== prevDirection) {
      if (
        scroll > window.scrollY &&
        window.scrollY < 150 &&
        window.scrollY > 100
      ) {
        setScrollUp(true);
        setScrollDown(false);
        setDirection(2);
      } else if (scroll < window.scrollY && window.scrollY > 100) {
        setScrollUp(false);
        setScrollDown(true);
        setDirection(1);
      } else if (scroll === 0) {
        setScrollUp(false);
        setScrollDown(false);
      }
      setScroll(window.scrollY);
      setPrevDirection(direction);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return (
      () => {
        window.removeEventListener("scroll", toggleScroll);
        setScrollUp(false);
        setScrollDown(false);
        setScroll(0);
      },
      [scroll]
    );
    // eslint-disable-next-line
  }, [scroll]);

  const headerClass = () => {
    if (scrollUp && !scrollDown) {
      return "headerSection headerShadow fixedHeaderMenu hideFixed";
    }
    if (scrollDown && !scrollUp) {
      return "headerSection headerShadow fixedHeaderMenu showFixed";
    }
    if (!scrollUp && !scrollDown) {
      return "headerSection headerShadow";
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid className="headerSection">
        <div className="header" id="header">
          <div className="brand">
            <div>
              <img className="logo" alt="Mag Electronics Lab" src={logo} />
            </div>
            <div className="brandName">
              <p>Mag Electronics Lab</p>
              <p>Άγγελος Μαγούλης</p>
            </div>
          </div>
        </div>
      </Grid>
      <Grid className={headerClass()}>
        <div className="header">
          <Grid  id="menu">
            <Box>
              <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon sx={{ color: "black", fontSize: "32px" }} />
              </Button>
              <Menu
                id="drop-down-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {menu.map((i) => (
                  <MenuItem
                    key={i.key}
                    sx={{
                      padding: "15px",
                      fontSize: "20px",
                      " &:hover": { backgroundColor: "rgb(196, 233, 153)" },
                    }}
                    onClick={handleClose}
                  >
                    <a href={i.key}>{i.value}</a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </div>
      </Grid>
    </>
  );
};
export default Header;
const menu = [
  {
    key: "#header",
    value: "Αρχική",
  },
  {
    key: "#services",
    value: "Υπηρεσίες",
  },
  {
    key: "#footer",
    value: "Επικοινωνία",
  },
];
