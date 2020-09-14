import {Container, IconContainer, Logo, Menu, MenuItem, SmallText} from '../styles/Header.style'
import {Icon, InlineIcon} from '@iconify/react';
import goldIcon from '@iconify/icons-mdi/gold';
import trophyVariantOutline from '@iconify/icons-mdi/trophy-variant-outline';
import accountPlusOutline from '@iconify/icons-mdi/account-plus-outline';
import menuIcon from '@iconify/icons-mdi/menu';
import MediaQuery from "react-responsive";


const Header = () => {
    return (
        <Container>
            <Logo>GAMICO</Logo>

            <MediaQuery query="(min-width: 1024px)"> {/*Desktop Menu*/}
            <Menu>
                <MenuItem><IconContainer><Icon
                    icon={goldIcon}/></IconContainer><SmallText>ZDOBYWAJ</SmallText></MenuItem>
                <MenuItem><IconContainer><Icon
                    icon={trophyVariantOutline}/></IconContainer><SmallText>LIDERZY</SmallText></MenuItem>
                <MenuItem last><IconContainer><Icon icon={accountPlusOutline}/></IconContainer><SmallText>REJESTRACJA</SmallText></MenuItem>
            </Menu>
            </MediaQuery>

            <MediaQuery query="(max-width: 1024px)">  {/*Mobile Menu*/}
            <Menu>
                <MenuItem last><IconContainer><Icon icon={menuIcon} /></IconContainer></MenuItem>
            </Menu>
            </MediaQuery>

        </Container>
    );
}

export default Header;