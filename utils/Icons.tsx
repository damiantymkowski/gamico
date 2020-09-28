import {Icon, InlineIcon} from '@iconify/react';
import goldIcon from '@iconify/icons-mdi/gold';
import trophyVariantOutline from '@iconify/icons-mdi/trophy-variant-outline';
import accountPlusOutline from '@iconify/icons-mdi/account-plus-outline';
import menuIcon from '@iconify/icons-mdi/menu';
import emailIcon from '@iconify/icons-mdi/email';

export const mailIcon = () => {
    return(
        <Icon icon={emailIcon} />
    );
}

export const menuGoldIcon = () => {
    return(
        <Icon icon={goldIcon}/>
    );
}

export const menuTrophyIcon = () => {
    return(
        <Icon icon={trophyVariantOutline}/>
    );
}

export const menuAccountIcon = () => {
    return(
        <Icon icon={accountPlusOutline}/>
    );
}

export const menuHamburgerIcon = () => {
    return(
        <Icon icon={menuIcon}/>
    );
}