console.log(new Date().toTimeString())

const submit = document.getElementById('submit');
const _email = document.getElementById('email');
const _password = document.getElementById('password');
let info = document.getElementById('info');

submit.addEventListener('click', function(e){
    e.preventDefault();

    const data = {}
    data.email = _email.value
    data.password = _password.value

    const post = async () => {

        const fetchUrl = 'http://localhost:8000/user/signup',
        fetchRequest = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
            mode: 'cors'
        }

        return await fetch(fetchUrl, fetchRequest)
        .then(res => res.json())
        .then(res => {
            //info.innerText = JSON.stringify(res)
            console.log(res)
            if(res.added) window.location.replace('/login')
            //else HANDLE ERRORS //bad email/password
        })
    }
    post();
});