import React, { useState, useRef, useEffect } from "react";
import {
    Button,
    Menu,
    MenuItem,
    Typography,
    Paper,
    Popper,
    Fade,
    ClickAwayListener,
} from '@mui/material';
import Box from '@mui/material/Box';
import BtnCollapse from "./Component/BtnCollapse";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import "./style.css"

const BRAND_BLUE = '#1976d2';
const BRAND_TEAL = '#009eb6';
const BRAND_CYAN = '#00d8ff';

const LOGOS = {
    zetscore: '/ZetScore_Icon.png',
    zetcollect: '/Asset 23x.png',
    izsales: '/IZ-Logo.png',
};

const PRODUCT_ITEMS = [
    {
        title: 'ZetScore',
        description: 'Discover how ZetScore drives employee success and simplifies performance management.',
        href: 'https://zetscore.com',
        icon: TrendingUpOutlinedIcon,
        logo: LOGOS.zetscore,
        external: true,
    },
    {
        title: 'ZetCollect',
        description: 'Discover how ZetCollect transforms African Microfinance Institutions Cash Collections.',
        href: 'https://zetcollect.com',
        icon: PaymentsOutlinedIcon,
        logo: LOGOS.zetcollect,
        external: true,
    },
    {
        title: 'IZSales',
        description: 'Manage your B2B sales through one CRM built for your sales representative and manager.',
        href: 'https://sales.izsoftwares.com',
        icon: PointOfSaleOutlinedIcon,
        logo: LOGOS.izsales,
        external: true,
    },
];

const CONNECT_ITEMS = [
    {
        title: 'Blog',
        description: 'Get the latest IZSoftwares Product News and Technical articles.',
        href: '/blog',
        icon: ArticleOutlinedIcon,
        logo: null,
        external: false,
    },
    {
        title: 'Events',
        description: 'Join In-person or Online events across the IZSoftwares Ecosystem',
        href: '/events',
        icon: EventOutlinedIcon,
        logo: null,
        external: false,
    },
    {
        title: 'Videos',
        description: 'Discover our latest products, instructional content, and a diverse range of resources through our videos, featuring on-demand and live streaming content.',
        href: 'https://www.youtube.com/@izsoftwares',
        icon: PlayCircleOutlineIcon,
        logo: null,
        external: true,
    },
];

const ButtonStyledLink = styled(Button)({
    position: 'relative',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: 2,
        height: 2,
        backgroundColor: BRAND_BLUE,
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.35s ease',
    },
    '&:hover::after, &[aria-expanded="true"]::after, &:focus-visible::after': {
        transform: 'scaleX(1)',
    },
});

function IconTile({ item, size = 44, className }) {
    const Icon = item.icon;
    const [logoFailed, setLogoFailed] = useState(false);
    const showLogo = Boolean(item.logo) && !logoFailed;

    return (
        <Box
            className={className}
            data-logo={showLogo ? 'true' : 'false'}
            sx={{
                width: size,
                height: size,
                flexShrink: 0,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: showLogo ? '#fff' : 'rgba(0, 158, 182, 0.1)',
                border: showLogo ? '1px solid rgba(15, 23, 42, 0.1)' : '1px solid rgba(0, 158, 182, 0.2)',
                color: BRAND_TEAL,
                transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
            }}
        >
            {showLogo ? (
                <Box
                    component="img"
                    src={item.logo}
                    alt=""
                    onError={() => setLogoFailed(true)}
                    sx={{ width: '72%', height: '72%', objectFit: 'contain' }}
                />
            ) : (
                <Icon sx={{ fontSize: Math.round(size * 0.55) }} />
            )}
        </Box>
    );
}

function DropdownRow({ item }) {
    const TrailingIcon = item.external ? LaunchIcon : ArrowForwardIcon;

    return (
        <Box
            component="a"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.75,
                p: 1.5,
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'text.primary',
                transition: 'background-color 0.15s ease',
                '&:hover, &:focus-visible': {
                    backgroundColor: 'rgba(25, 118, 210, 0.06)',
                    outline: 'none',
                },
                '&:focus-visible': {
                    boxShadow: `inset 0 0 0 2px ${BRAND_BLUE}`,
                },
                '&:hover .dd-tile[data-logo="false"], &:focus-visible .dd-tile[data-logo="false"]': {
                    backgroundColor: BRAND_TEAL,
                    borderColor: BRAND_TEAL,
                    color: '#fff',
                },
                '&:hover .dd-tile[data-logo="true"], &:focus-visible .dd-tile[data-logo="true"]': {
                    borderColor: 'rgba(0, 158, 182, 0.55)',
                },
                '&:hover .dd-go, &:focus-visible .dd-go': {
                    opacity: 1,
                    transform: 'translateX(0)',
                },
            }}
        >
            <IconTile item={item} className="dd-tile" />
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}
                >
                    {item.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.5, mt: 0.25 }}
                >
                    {item.description}
                </Typography>
            </Box>
            <TrailingIcon
                className="dd-go"
                sx={{
                    alignSelf: 'center',
                    flexShrink: 0,
                    fontSize: 18,
                    color: BRAND_BLUE,
                    opacity: 0,
                    transform: 'translateX(-4px)',
                    transition: 'opacity 0.15s ease, transform 0.15s ease',
                }}
            />
        </Box>
    );
}

function HoverDropdown({ id, label, header, items, placement = 'bottom-start' }) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const closeTimer = useRef(null);
    const lastPointerType = useRef('mouse');

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const openMenu = () => {
        clearCloseTimer();
        setOpen(true);
    };

    const closeMenu = () => {
        clearCloseTimer();
        setOpen(false);
    };

    const scheduleClose = () => {
        clearCloseTimer();
        closeTimer.current = setTimeout(() => setOpen(false), 150);
    };

    useEffect(() => clearCloseTimer, []);

    const handlePointerEnter = (event) => {
        if (event.pointerType === 'touch') return;
        openMenu();
    };

    const handlePointerLeave = (event) => {
        if (event.pointerType === 'touch') return;
        scheduleClose();
    };

    const handleTriggerClick = () => {
        if (lastPointerType.current === 'mouse') {
            openMenu();
        } else {
            setOpen((prev) => !prev);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            if (anchorRef.current) anchorRef.current.focus();
        } else if (event.key === 'Enter' || event.key === ' ') {
            lastPointerType.current = 'keyboard';
        }
    };

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            closeMenu();
        }
    };

    return (
        <ClickAwayListener onClickAway={closeMenu}>
            <Box
                sx={{ position: 'relative', display: 'inline-flex' }}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
            >
                <ButtonStyledLink
                    ref={anchorRef}
                    color="inherit"
                    aria-expanded={open}
                    aria-controls={open ? id : undefined}
                    onPointerDown={(event) => { lastPointerType.current = event.pointerType; }}
                    onClick={handleTriggerClick}
                >
                    <Typography sx={{ fontWeight: 420 }} variant="body1">
                        {label}
                    </Typography>
                </ButtonStyledLink>

                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorRef.current}
                    placement={placement}
                    disablePortal
                    transition
                    sx={{ zIndex: 1 }}
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={150}>
                            {/* Top padding keeps the hover area continuous between trigger and panel */}
                            <Box sx={{ pt: 1 }}>
                                <Paper
                                    elevation={0}
                                    tabIndex={-1}
                                    sx={{
                                        width: 420,
                                        maxWidth: 'calc(100vw - 32px)',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(15, 23, 42, 0.1)',
                                        borderTop: `2px solid ${BRAND_CYAN}`,
                                        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)',
                                        outline: 'none',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <Box sx={{ p: 1 }}>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'block',
                                                px: 1.5,
                                                pt: 0.75,
                                                pb: 0.75,
                                                color: 'text.secondary',
                                                fontWeight: 600,
                                                fontSize: 13,
                                            }}
                                        >
                                            {header}
                                        </Typography>
                                        {items.map((item) => (
                                            <DropdownRow key={item.title} item={item} />
                                        ))}
                                    </Box>
                                </Paper>
                            </Box>
                        </Fade>
                    )}
                </Popper>
            </Box>
        </ClickAwayListener>
    );
}

function NavBarCollapse() {
    const [anchorElMobileProducts, setAnchorElMobileProducts] = useState(null);
    const openMobileProducts = Boolean(anchorElMobileProducts);

    const handleOpenMobileProducts = (event) => {
        event.preventDefault();
        setAnchorElMobileProducts(event.currentTarget);
    };

    const handleCloseMobileProducts = () => {
        setAnchorElMobileProducts(null);
    };

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
                <Link href='#' underline="none" color="textPrimary" aria-controls="products-menu-mobile" aria-haspopup="true" onClick={handleOpenMobileProducts}>
                    <MenuItem>
                        Products
                    </MenuItem>
                </Link>
                <Menu
                    id="products-menu-mobile"
                    anchorEl={anchorElMobileProducts}
                    open={openMobileProducts}
                    onClose={handleCloseMobileProducts}
                    PaperProps={{ sx: { borderRadius: '10px', mt: 0.5 } }}>
                    <Typography variant="caption" sx={{ display: 'block', px: 2, pt: 0.5, pb: 0.5, color: 'text.secondary', fontWeight: 600 }}>
                        Discover
                    </Typography>
                    {PRODUCT_ITEMS.map((item) => (
                        <MenuItem
                            key={item.title}
                            component="a"
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            onClick={handleCloseMobileProducts}
                            sx={{ whiteSpace: 'normal', maxWidth: 320, alignItems: 'flex-start', gap: 1.5, py: 1.25 }}>
                            <IconTile item={item} size={36} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.45 }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))}
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

            <div id="appbar-collapse">
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, alignItems: 'center' }}>
                    <ButtonStyledLink color="inherit" component="a" href="/">
                        <Typography sx={{ fontWeight: 420 }} variant="body1">
                            Home
                        </Typography>
                    </ButtonStyledLink>
                    <ButtonStyledLink color="inherit" component="a" href="/about">
                        <Typography sx={{ fontWeight: 420 }} variant="body1">
                            About
                        </Typography>
                    </ButtonStyledLink>
                    <ButtonStyledLink color="inherit" component="a" href="/case-studies">
                        <Typography sx={{ fontWeight: 420 }} variant="body1">
                            Portfolio
                        </Typography>
                    </ButtonStyledLink>

                    <HoverDropdown
                        id="products-menu"
                        label="Products"
                        header="Discover"
                        items={PRODUCT_ITEMS}
                        placement="bottom-start"
                    />

                    <HoverDropdown
                        id="connect-menu"
                        label="Connect"
                        header="Stay Up To Date"
                        items={CONNECT_ITEMS}
                        placement="bottom-end"
                    />

                    <Button variant="contained" color="primary" component="a" href="/contact-us" sx={{ ml: 1 }}>
                        <Typography sx={{ fontWeight: 420 }} variant="body1">
                            Let's Talk !
                        </Typography>
                    </Button>
                </Box>
            </div>
        </div>
    );
}
export default NavBarCollapse;