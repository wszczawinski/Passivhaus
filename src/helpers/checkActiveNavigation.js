export const checkActiveNavigation = (navbarItem, setter) => {
    const { pathname } = window.location;
    console.log('ddd', pathname)
    if ( pathname.includes(navbarItem.toLowerCase().split(' ')[0])) {
        setter(navbarItem)
    }
   
}