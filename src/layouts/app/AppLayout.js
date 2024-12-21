import AppNavbar from "layouts/app/components/navbar/AppNavbar";
import {Box, styled} from "@mui/material";
import AppSidebar from "layouts/app/components/sidebar/AppSidebar";
import {useSelector} from "store";

const LayoutWrapper = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
}));

const MainContentWrapper = styled(Box)(({ theme, isSidebarCollapsed }) => ({
    flexGrow: 1,
    minWidth: 0,
    background: theme.palette.background.default,
    width: isSidebarCollapsed ? '100vw' : '100%',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const ContentWrapper = styled('main')(({ theme }) => ({
    flexGrow: 1,
    width: '100%',
    marginRight: 'auto',
    padding: theme.spacing(6),

    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },

    [theme.breakpoints.up('xl')]: {
        width: '80%',
        margin: 'auto',
    }
}))

export default function AppLayout({ children }) {
    const { isSidebarCollapsed } = useSelector(state => state.theme);

    return (
        <LayoutWrapper>
            <AppSidebar/>
            <MainContentWrapper>
                <AppNavbar/>
                <ContentWrapper sx={{
                    ...(isSidebarCollapsed && { width: '100vw' })
                }}>
                    <Box height={80}/>
                    {children}
                </ContentWrapper>
            </MainContentWrapper>
        </LayoutWrapper>
    )
}
