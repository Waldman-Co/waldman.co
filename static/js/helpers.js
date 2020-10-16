const formatPhone = (obj) => {
        const numbers = obj.innerHTML.replace(/\D/g, '')
        const char = {0:numbers[0] === '+' ? '' : '+' ,1:' (',4:') ',7:' - '}
        obj.innerHTML = '';
        for (var i = 0; i < numbers.length; i++) {
            obj.innerHTML += (char[i]||'') + numbers[i];
        }
}


const onPageLoad = () => {
    // Format phone numbers
    let phone = document.querySelector('#formatPhone')
    phone = formatPhone(phone)

}

onPageLoad()