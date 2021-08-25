const getLocation = (pathname) => {

    if(pathname.includes('/tv')){
        pathname = '/tv';
    }

    switch(pathname){
        case '/':
            return 0;
        case '/tv':
            return 1;
        case '/search':
            return 2;
        default:
            return 0;
    }
}

export default getLocation;