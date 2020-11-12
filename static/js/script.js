const unActiveNavItems = () => 
        document.querySelectorAll('.navbar-link').forEach(el => el.classList.remove('active'));

const onNavItemClick = (target, external = false) =>{
    if (window.location.pathname !== '/' && !external) {
        window.location.href = `/` + target
    } else {
        document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'})
    }
}
        
const onHomeClick = (e) => {
    if (window.location.pathname === '/') {
        unActiveNavItems()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    } else{
        const home = document.querySelector('.home-btn')
        home.href = '/'
        home.click()
    }
    document.querySelector('.home-btn').classList.add('active')
}

const onLoadPageNavItemHandler = () => {
    const p = window.location.pathname
    switch(true) {
        case /\/contact\//.test(p):
            unActiveNavItems()
            document.querySelector('.contact-btn').classList.add('active')
            onNavItemClick('.contact-btn',true)
            break
        case /\/blog\//.test(p):
        case /\/posts\/[0-9]+/.test(p):
            unActiveNavItems()
            document.querySelector('.blog-btn').classList.add('active')
            onNavItemClick('.blog-btn',true)
            break
        case /\/team\//.test(p):
            unActiveNavItems()
            document.querySelector('.team-btn').classList.add('active')
            onNavItemClick('.team-btn',true)
            break
        case /\/projects\//.test(p):
            unActiveNavItems()
            document.querySelector('.projects-btn').classList.add('active')
            onNavItemClick('.projects-btn',true)
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

const projectSpyScrolling = () => {
    const projects = document.querySelectorAll('.project-card')
    window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        for (let index in projects) {
            const project = projects[index]
            // update to more precise: if the middle of the project is anywhere in the middle 1/3rd of the viewport height -> offsetTop + offsetHeight / 2 >= window.innerHeight / 3 && offsetTop + offsetHeight / 2 <= window.innerHeight / 3 * 2
            if(projects.hasOwnProperty(index) && project.offsetTop <= scrollPos + 305 && project.offsetTop + project.offsetHeight - 500 >= scrollPos) {
                project.classList.add('active-card')
            }
            else if (projects.hasOwnProperty(index) && project.classList.contains('active-card')) {
                project.classList.remove('active-card')
            }
        }
    }
}

// set project image slide with thumnails
const setSlide = (classes, src, alt) => {
    const image = document.querySelector(`.${classes.split(' ')[0]}`)
    const next = document.createElement("img")
    next.setAttribute('src', src)
    next.setAttribute('alt', alt)
    next.className = classes

    image.replaceWith(next)
}

const activateThumbnail = (projectId, image) => {
    // unset active thumnail
    const activeThumbnail = document.querySelector(`.${projectId}.thumbnail-container > .image-thumbnail.active-thumbnail`)
    activeThumbnail.classList.remove('active-thumbnail')
    // activate new thumnail
    const activate = document.querySelector(`.${projectId}.thumbnail-container > .image-thumbnail[src="${image}"]`)
    activate.classList.add('active-thumbnail')
}

onLoadPageNavItemHandler()

if(window.location.pathname === '/') spyScrolling()
if(window.location.pathname === '/projects/') projectSpyScrolling()    