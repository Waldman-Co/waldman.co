const unActiveNavItems = () => 
        document.querySelectorAll('.navbar-link').forEach(el => el.classList.remove('active'));

const onHomeClick = (e) => {
    if(window.location.pathname === '/'){
        unActiveNavItems()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }else{
        const home = document.querySelector('.home-btn')
        home.href = '/'
        home.click()
    }
    document.querySelector('.home-btn').classList.add('active')
}

const onNavItemClick = (item,target) => {
    unActiveNavItems()
    document.querySelector(item).classList.add('active')
    document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'})
}

const onLoadPageNavItemHandler = () => {
    switch(window.location.pathname){
        case '/contact/':
            onNavItemClick('.contact-btn');
            break;
        case '/team/':
            onNavItemClick('.contact-btn');
            break;
        default:
            onHomeClick();
            break; 
    }
}
onLoadPageNavItemHandler()