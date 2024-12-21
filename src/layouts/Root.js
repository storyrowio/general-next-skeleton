'use client'

import {usePathname} from "next/navigation";
import {useSelector} from "store";
import Theme from "theme";
import {SessionProvider} from "next-auth/react";
import BlankLayout from "layouts/BlankLayout";
import {useEffect} from "react";
import Helper from "utils/helper";
import AuthLayout from "layouts/auth/AuthLayout";
import AppLayout from "layouts/app/AppLayout";

export default function RootApp({ children }) {
    const pathname = usePathname();
    const themeSetting = useSelector(state => state.theme);
    // const theme = useMemo(() => BuildTheme(themeSetting.activeMode), [themeSetting.activeMode]);

    const fetch = () => {
        setTimeout(() => {
            console.log('Fetch Profile')
        }, 3000);
    };

    let Layout = BlankLayout;

    if (pathname === '/' || pathname === '/register') {
        Layout = AuthLayout;
    } else if (pathname.includes('/app')) {
        Layout = AppLayout;
    }

    useEffect(() => {
        Helper.GetIp();
        fetch();
    }, []);

    return (
        <SessionProvider>
            <Theme mode={themeSetting.mode}>
                <Layout>
                    {children}
                </Layout>
            </Theme>
        </SessionProvider>
    )
}
