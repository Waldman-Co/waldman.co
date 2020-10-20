const unActiveNavItems = () => 
        document.querySelectorAll('.navbar-link').forEach(el => el.classList.remove('active'));

const onNavItemClick = (target,external = false) =>{
    if(window.location.pathname !== '/' && !external){
        window.location.href = `/` + target
    }else {
        document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'})
    }
}
        
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

const onLoadPageNavItemHandler = () => {
    switch(window.location.pathname){
        case '/contact/':
            unActiveNavItems()
            document.querySelector('.contact-btn').classList.add('active')
            onNavItemClick('.contact-btn',true)
            break
        case '/blog/':
            unActiveNavItems()
            document.querySelector('.blog-btn').classList.add('active')
            onNavItemClick('.blog-btn',true)
            break
        case '/team/':
            unActiveNavItems()
            document.querySelector('.team-btn').classList.add('active')
            onNavItemClick('.team-btn',true)
            break
        default:
            onHomeClick();
            break
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('.section-anchor')
    window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        for (let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
                const id = sections[s].id
                if (document.querySelector('.active') && document.querySelector(`.${id}-btn`)) {
                    document.querySelector('.active').classList.remove('active')
                    document.querySelector(`.${id}-btn`).classList.add('active')
                }
            }
        }
    }
}

onLoadPageNavItemHandler()

if(window.location.pathname === '/') spyScrolling()
    