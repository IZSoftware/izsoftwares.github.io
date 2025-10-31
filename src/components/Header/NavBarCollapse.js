import React, { useState } from "react";
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BtnCollapse from "./Component/BtnCollapse";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import "./style.css"

function NavBarCollapse() {
    /* For Connect DropDown */
    const [anchorElConnectMenu, setAnchorElConnectMenu] = useState(null);
    const [isConnectMenuOpen, setConnectMenuOpen] = useState(false);

    const handleMouseOverConnectMenu = (event) => {
        setAnchorElConnectMenu(event.currentTarget);
        setConnectMenuOpen(true);
    };

    const handleMouseOutConnectMenu = () => {
        setAnchorElConnectMenu(null);
        setConnectMenuOpen(false);
    };

    const openConnectMenu = Boolean(anchorElConnectMenu) && isConnectMenuOpen;

    /* For Products DropDown */
    const [anchorElProductsMenu, setAnchorElProductsMenu] = useState(null);
    const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);

    const handleMouseOverProductsMenu = (event) => {
        setAnchorElProductsMenu(event.currentTarget);
        setProductsMenuOpen(true);
    };

    const handleMouseOutProductsMenu = () => {
        setAnchorElProductsMenu(null);
        setProductsMenuOpen(false);
    };

    const openProductsMenu = Boolean(anchorElProductsMenu) && isProductsMenuOpen;

    const ButtonStyledLink = styled(Button)({
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)'
        },
        '&:after': {
            bottom: 0,
            content: "''",
            display: 'block',
            height: 2,
            left: 0,
            backgroundColor: '#1976d2',
            transition: 'width 0.5s ease 0s, left 0.5s ease 0s',
            width: 0,
        },
        '&:hover:after': {
            width: '100%',
            left: 0,
        }
    });

    return (
        <div>
            <BtnCollapse>
                <Link href='/' underline="none" color="textPrimary">
                    <MenuItem> 
                        Home
                    </MenuItem>
                </Link>
                <Link href='/about' underline="none" color="textPrimary">
                    <MenuItem>
                        About
                    </MenuItem>
                </Link>
                <Link href='/case-studies' underline="none" color="textPrimary">
                    <MenuItem>
                        Portfolio
                    </MenuItem>
                </Link>
                <Link href='#' underline="none" color="textPrimary" aria-controls="products-menu-mobile" aria-haspopup="true" onClick={handleMouseOverProductsMenu}>
                    <MenuItem>
                        Products
                    </MenuItem>
                </Link>
                <Menu
                    id="products-menu-mobile"
                    anchorEl={anchorElProductsMenu}
                    open={openProductsMenu}
                    onClose={handleMouseOutProductsMenu}
                    MenuListProps={{ onMouseLeave: handleMouseOutProductsMenu }}
                    sx={{borderRadius: 0}}>
                    <Box style={{fontSize: 18, textAlign: 'center'}}> Discover </Box>
                    <MenuItem component={"a"} href={"https://zetscore.com"} target="_blank">  
                        <div className="nav-items-flex">
                            <div className="nav-title-title-connect">
                                ZetScore 
                            </div> 
                            <div style={{ whiteSpace: 'normal' }}>
                                Discover how ZetScore drives employee success and simplifies performance management.
                            </div>
                        </div>
                    </MenuItem>
                    <MenuItem component={"a"} href={"https://zetcollect.com"} target="_blank">  
                        <div className="nav-items-flex">
                            <div className="nav-title-title-connect">
                                ZetCollect
                            </div> 
                            <div style={{ whiteSpace: 'normal' }}>
                                Discover how ZetCollect transform African Microfinance Institutions Cash Collections.
                            </div>
                        </div>
                    </MenuItem>
                </Menu>
                <Link href="/contact-us" underline="none" color="textPrimary">
                    <MenuItem>
                        Let's Talk
                    </MenuItem>
                </Link>
                <Link href='/blog' underline="none" color="textPrimary">
                    <MenuItem>
                        Blog
                    </MenuItem>
                </Link> 
            </BtnCollapse>

            <div sx={{width: "100%"}} id="appbar-collapse">
                <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'} }}>
                    <Link href='/' underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit"> 
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                Home
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href="/about" underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit"> 
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                About
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href="/case-studies" underline="none" color="textPrimary">
                        <ButtonStyledLink color="inherit">
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                Portfolio
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Link href='#' underline="none" color="textPrimary" aria-controls="connect-menu" aria-haspopup="true" onMouseEnter={handleMouseOverProductsMenu} onMouseLeave={handleMouseOutProductsMenu}>
                        <ButtonStyledLink color="inherit" endIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                Products
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                        id="connect-menu"
                        anchorEl={anchorElProductsMenu}
                        open={openProductsMenu}
                        onClose={handleMouseOutProductsMenu}
                        MenuListProps={{ onMouseLeave: handleMouseOutProductsMenu }}
                        sx={{borderRadius: 0}}>
                        <Box style={{fontSize: 18, textAlign: 'center'}}> Discover </Box>
                        <MenuItem component={"a"} href={"https://zetscore.com"} target="_blank"> 
                            <div className="nav-items-flex">
                                <div className="nav-title-title-connect">
                                    ZetScore
                                </div>
                                <div style={{ whiteSpace: 'normal' }}>
                                    Discover how ZetScore drives employee success and simplifies performance management.
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem component={"a"} href={"https://zetcollect.com"} target="_blank"> 
                            <div className="nav-items-flex">
                                <div className="nav-title-title-connect">
                                    ZetCollect
                                </div>
                                <div style={{ whiteSpace: 'normal' }}>
                                    Discover how ZetCollect transform African Microfinance Institutions Cash Collections.
                                </div>
                            </div>
                        </MenuItem>
                    </Menu>
                    <Link href='#' underline="none" color="textPrimary" aria-controls="connect-menu" aria-haspopup="true" onMouseEnter={handleMouseOverConnectMenu} onMouseLeave={handleMouseOutConnectMenu}>
                        <ButtonStyledLink color="inherit" endIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                Connect
                            </Typography>
                        </ButtonStyledLink>
                    </Link>
                    <Menu
                        id="connect-menu"
                        anchorEl={anchorElConnectMenu}
                        open={openConnectMenu}
                        onClose={handleMouseOutConnectMenu}
                        MenuListProps={{ onMouseLeave: handleMouseOutConnectMenu }}
                        sx={{borderRadius: 0}}>
                        <Box style={{fontSize: 18, textAlign: 'center'}}> Stay Up To Date </Box>
                        <MenuItem component={"a"} href={"/blog"}>  
                            <div className="nav-items-flex">
                                <div className="nav-title-title-connect">
                                    Blog
                                </div>
                                <div style={{ whiteSpace: 'normal' }}>
                                    Get the latest IZSoftwares Product News and Technical articles.
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem component={"a"} href={"/events"}>  
                            <div className="nav-items-flex">
                                <div className="nav-title-title-connect">
                                    Events
                                </div>
                                <div style={{ whiteSpace: 'normal' }}>
                                    Join In-person or Online events across the IZSoftwares Ecosystem
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem component={"a"} href={"https://www.youtube.com/@izsoftwares"} target="_blank">  
                            <div className="nav-items-flex">
                                <Box className="nav-title-title-connect">
                                    Videos <LaunchIcon />
                                </Box>
                                <div style={{ whiteSpace: 'normal' }}>
                                    Discover our latest products, instructional content, and a diverse range of resources through our videos, featuring on-demand and live streaming content.
                                </div>
                            </div>
                        </MenuItem>
                    </Menu>
                    <Link href="/contact-us" underline="none" color="textPrimary">
                        <Button variant="contained" color="primary">
                            <Typography sx={{ fontWeight: 420}} variant="body1">
                                Let's Talk !
                            </Typography>
                        </Button>
                    </Link>
                </Box>
            </div>
        </div>
    );
}
export default NavBarCollapse;
