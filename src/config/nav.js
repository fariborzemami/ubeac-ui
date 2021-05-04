import Roles from './roles'
export default {
    sidebar:
        [
            {
                title: 'Home',
                href: '/',
                icon: 'wizard',
                roles: [Roles.ALL]
            },
            {
                title: 'Team/Add',
                href: '/teams/add',
                icon: 'wizard',
                roles: [Roles.ALL]
            },
            {
                title: 'Team/AddNew',
                href: '/teams/addnew',
                icon: 'wizard',
                roles: [Roles.ALL]
            },
            {
                title: 'Team/AddNewNew',
                href: '/teams/addnewnew',
                icon: 'wizard',
                roles: [Roles.ALL]
            },
            {
                title: 'About',
                href: '/about',
                icon: 'wizard',
                roles: [Roles.ALL]
            }
        ],
    profile:
        [
            {
                title: 'My Profile',
                href: '/profile',
                icon: 'profile',
                roles: [Roles.AUTH]
            },
            {
                title: 'Register',
                href: '/register',
                icon: 'register',
                roles: [Roles.UNKNWON]
            },
            {
                title: 'Login',
                href: '/login',
                icon: 'login',
                roles: [Roles.UNKNWON]
            }
        ]
}