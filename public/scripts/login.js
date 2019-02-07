console.log(new Date().toTimeString())
const submit = document.getElementById('login');
const _email = document.getElementById('email');
const _password = document.getElementById('password');
const info = document.getElementById('info');

submit.addEventListener('click', function(){

    const data = {}
    data.email = _email.value
    data.password = _password.value

    const post = async () => {

        return await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => {

            console.log(res)

            if(res.loggedIn) {
                console.log(res.header)
                //window.location.replace('/home')
            }

            else console.log('wrong pass')

        })
    };
    post();
})