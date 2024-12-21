'use client'

import ChartWrapper from "components/chart/ChartWrapper";
import {Grid2} from "@mui/material";
import DashboardEarningChart from "components/pages/dashboard/DashboardEarningChart";
import DashboardSalesChart from "components/pages/dashboard/DashboardSalesChart";
import DashboardTransaction from "components/pages/dashboard/DashboardTransaction";
import {useState} from "react";
import DashboardWidget from "components/pages/dashboard/DashboardWidget";

export default function Dashboard() {
    const [widgets, setWidgets] = useState([
        { title: 'Students', content: '1230', color: 'primary', icon: '/images/icons/dashboard-widget-1.svg' },
        { title: 'Sales', content: '1230', color: 'secondary', icon: '/images/icons/dashboard-widget-2.svg' },
        { title: 'Coaches', content: '1230', color: 'tertiary', icon: '/images/icons/dashboard-widget-3.svg' },
        { title: 'Classes', content: '1230', color: 'success', icon: '/images/icons/dashboard-widget-4.svg' },
    ]);

    return (
        <ChartWrapper>
            <Grid2 container spacing={6}>
                {widgets.map((e, i) => (
                    <Grid2 key={i} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <DashboardWidget
                            title={e.title}
                            content={e.content}
                            icon={e.icon}
                            color={e.color}/>
                    </Grid2>
                ))}
                <Grid2 size={{ xs: 12, sm: 12, lg: 8 }}>
                    <DashboardEarningChart/>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <DashboardSalesChart/>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 12 }}>
                    <DashboardTransaction/>
                </Grid2>
            </Grid2>
        </ChartWrapper>
    )
}
