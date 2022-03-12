export const checkActiveNavigation = (navbarItem, setter) => {
    const { pathname } = window.location;

    if (pathname.includes(navbarItem.toLowerCase().split(' ')[0])) {
        setter(navbarItem);
    }
};
