import {Box, Drawer, IconButton, List, styled, useMediaQuery} from "@mui/material";
import {useDispatch, useSelector} from "store";
import {ThemeActions} from "store/slices/ThemeSlice";
import Link from "next/link";
import Logo from "components/shared/Logo";
import {CloseRounded} from "@mui/icons-material";
import Menus from "constants/menus";
import SidebarItems from "layouts/app/components/sidebar/components/SidebarItems";
import {CardShadow} from "theme/shadows";

const MenuHeaderWrapper = styled(Box)(({ theme, width }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingLeft: theme.spacing(3.5),
    transition: 'padding .25s ease-in-out',
    minHeight: theme.mixins.toolbar.minHeight
}))

export default function AppSidebar() {
    const dispatch = useDispatch();
    const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const { sidebarWidth, isSidebarCollapsed } = useSelector(state => state.theme);
    const variant = isSidebarCollapsed ? 'persistent' : hidden ? 'temporary' : 'permanent';

    return (
        <Drawer
            open={!isSidebarCollapsed}
            onClose={() => dispatch(ThemeActions.setSidebarCollapse(!isSidebarCollapsed))}
            variant={variant}
            sx={{
                width: isSidebarCollapsed ? 0 : sidebarWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    border: 'none',
                    boxShadow: CardShadow,
                    boxSizing: 'border-box',
                },
            }}>
            <MenuHeaderWrapper
                width={sidebarWidth}
                sx={{
                    ...(!hidden && {
                        justifyContent: 'center'
                    })
                }}>
                <Link href={'/app'}>
                    <Logo width={160}/>
                </Link>
                {hidden && (
                    <IconButton onClick={() => dispatch(ThemeActions.setSidebarCollapse(!isSidebarCollapsed))}>
                        <CloseRounded/>
                    </IconButton>
                )}
            </MenuHeaderWrapper>
            <Box height={20}/>
            <List sx={{ pt: 0 }}>
                <SidebarItems
                    // themeConfig={themeConfig}
                    items={Menus}/>
            </List>
        </Drawer>
    )
}
