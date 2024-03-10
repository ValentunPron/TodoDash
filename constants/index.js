import HouseIcon from "@/assets/HouseIcon";
import DoneIcon from "@/assets/DoneIcon";
import StatisticsIcon from "@/assets/StatisticsIcon";
import CalendarIcon from "@/assets/CalendarIcon";

export const sidebarLinks = [
    {
        icon: <HouseIcon />,
        route: '/',
        label: 'Home',
    },
    {
        icon: <DoneIcon />,
        route: '/task',
        label: 'My Task',
    },
    {
        icon: <StatisticsIcon />,
        route: '/statistic',
        label: 'Statistic',
    },
    {
        icon: <CalendarIcon />,
        route: '/calendar',
        label: 'Calendar',
    }
]