import React from "react";
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { ResponsiveAppBar } from "../AppBar";
import '../../assets/css/fonts.css';
import car_image from '../../assets/images/car_image.jpg';




interface Props {
    title: string,
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled("div")({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Gulzar'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black',
    textDecoration: 'none'
})
const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    lineHeight: '3em'
})

export const Home = (props: Props) => {
    return (
        <Root>
            <ResponsiveAppBar />
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> Drive with class. </p>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>See our Inventory</Button>
                </MainText>
            </Main>
        </Root>
    )
}
//  <NavbarContainer>
{/* <Logo>
<LogoA to="#">Car Lot</LogoA>
</Logo>
<LogoNavigation>
<li>
    <NavA to="/">Home</NavA>
</li>
<li>
    <NavA to="/dashboard">Dashboard</NavA>
</li>
<li>
    <NavA to="/signin">Sign In</NavA>
</li>
</LogoNavigation>
</NavbarContainer> */}