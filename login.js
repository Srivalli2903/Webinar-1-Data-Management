const txtEmail = document.getElementById("signEmail")
const txtPassword = document.getElementById("signPassword")
const btnLogin = document.getElementById("Loginbtn");
var uid;
document.getElementById("Loginbtn").addEventListener('click', e => {
//Login verification code
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(e => {
        uid = e.user.uid;
        localStorage.setItem('uid', e.user.uid)

        db.collection('users').doc(uid).get().then(snapshot => {
            alert("Hello " + snapshot.data().Name + "!\r\nWelcome!")
            localStorage.setItem("location", snapshot.data().Location)
            location.href = "home.html";
        })

    })
    promise.catch(e => {
        console.log(e.message)
        alert(e.message);
    })
}
)





