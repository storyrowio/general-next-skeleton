import {
    AccountTreeRounded,
    DashboardRounded,
    PeopleRounded,
    StorageRounded
} from "@mui/icons-material";
import {GenerateUniqueId} from "utils/helper";
import Roles from "constants/role";

const Menus = [
    {
        id: GenerateUniqueId(),
        title: 'Dashboard',
        icon: DashboardRounded,
        href: '',
    },
    {
        id: GenerateUniqueId(),
        title: 'User',
        icon: PeopleRounded,
        permissions: ['all', 'user:read', 'user:create'],
        children: [
            {
                id: GenerateUniqueId(),
                title: 'All Users',
                href: '/user',
                permissions: ['all', 'user:read'],
            },
            {
                id: GenerateUniqueId(),
                title: 'Create User',
                href: '/user/create',
                permissions: ['all', 'user:create'],
            },
        ]
    },
    {
        sectionTitle: 'Setting',
        roles: [Roles.admin],
        permissions: ['setting:read'],
    },
    {
        id: GenerateUniqueId(),
        title: 'Role & Permission',
        icon: AccountTreeRounded,
        href: '/role',
        roles: [Roles.admin]
    },
    {
        id: GenerateUniqueId(),
        title: 'Configuration',
        icon: StorageRounded,
        href: '/configuration',
        roles: [Roles.admin]
    },
];

export default Menus;
