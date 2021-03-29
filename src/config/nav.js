import Roles from './roles'
export default {
    sidebar:
        [
            {
                title: 'Home',
                href: '/about',
                icon: 'wizard',
                roles: [Roles.ALL]
            },
            // {
            //     title: 'Management',
            //     href: '/manage',
            //     icon: 'manage',
            //     roles: [Roles.ADMIN],
            //     children:
            //         [
            //             {
            //                 title: 'Gateway',
            //                 href: '/gateway',
            //                 icon: 'gateway',
            //                 roles: [Roles.ADMIN]
            //             }, {
            //                 title: 'Device',
            //                 href: '/device',
            //                 icon: 'device',
            //                 roles: [Roles.ADMIN],
            //             },
            //             {
            //                 title: 'Sensor',
            //                 href: '/sensor',
            //                 icon: 'sensor',
            //                 roles: [Roles.ADMIN],
            //             }
            //         ]
            // },
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
            },
            {
                title: 'Forgot Password',
                href: '/forgotpassword',
                icon: 'forgotpassword',
                roles: [Roles.UNKNWON]
            }
        ]
}