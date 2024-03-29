export const checkActiveNavigation = (navbarItem: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    const { pathname } = window.location;

    if (pathname.includes(navbarItem.toLowerCase().split(' ')[0])) {
        setter(!!navbarItem);
    }
};
