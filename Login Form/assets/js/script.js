const showHiddenPass = (loginPass, loginEye) =>{
const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        if(input.type === 'password'){
            input.type = 'text'
            iconEye.innerHTML = 'visibility'
        }else{
            input.type = 'password'
            iconEye.innerHTML = 'visibility_off'
        }
    })
}
showHiddenPass('login-pass','login-eye')