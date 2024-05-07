export const ROUTES = {
    HOME: {
        path: '/',
        name: 'Home',
    },
    ABOUT: {
        path: '/about',
        name: 'About',
    },
    CONTACT: {
        path: '/contact',
        name: 'Contact',
    },
    PROJECTS: {
        path: '/projects',
        name: 'Projects',
        hearthstone: {
            path: '/projects/hearthstone',
            name: 'Hearthstone',
        },
        hearthstoneDetail:{
            path: '/projects/hearthstone/:name',
            name: 'Hearthstone Detail',
        },
        studioClean: {
            path: '/projects/studio-clean',
            name: 'Studio Clean',
        },
    },
    RESUME: {
        path: '/resume',
        name: 'Resume',
    },
};