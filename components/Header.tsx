import {Container, IconContainer, Logo, Menu, MenuItem, SmallText} from '../styles/Header.style'
import {Icon} from '@iconify/react';
import goldIcon from '@iconify/icons-mdi/gold';
import trophyVariantOutline from '@iconify/icons-mdi/trophy-variant-outline';
import accountPlusOutline from '@iconify/icons-mdi/account-plus-outline';
const Header = () => {
    return (
        <Container>
            <Logo>GAMICO</Logo>
            <Menu>
                <MenuItem><IconContainer><Icon
                    icon={goldIcon}/></IconContainer><SmallText>ZDOBYWAJ</SmallText></MenuItem>
                <MenuItem><IconContainer><Icon
                    icon={trophyVariantOutline}/></IconContainer><SmallText>LIDERZY</SmallText></MenuItem>
                <MenuItem last><IconContainer><Icon icon={accountPlusOutline}/></IconContainer><SmallText>REJESTRACJA</SmallText></MenuItem>
            </Menu>
        </Container>
    );
}

export default Header;