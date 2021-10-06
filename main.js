const txtEmail = document.getElementById("Email")
const txtPassword = document.getElementById("password")
const txtName = document.getElementById("Name")

var txtGrade = document.getElementById("grade");
document.getElementById("Register").addEventListener('click', e => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    const name = txtName.value
   
   if (email == "" || password == "" || name == "") {
                alert("Please enter all the fields");
    } else {
            const promise = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(cred => {
                //Store the information in the database
                db.collection('users').doc(cred.user.uid).set({
                Email: email,
                Name: name,
                Password: password
                }).then(() => {
                if(confirm("You have been successfully registered.")){
                window.location.href = "login.html"}
                });

                })
                promise.catch(e => {
                    console.log(e.message)
                    alert(e.message);
                })
                }
})
function show() {
    //Code to view the typed password
    var icon = document.getElementById("icon")
    if (txtPassword.type === "password") {
        txtPassword.type = "text"
        icon.style.color = "grey"
    } else {
        txtPassword.type = "password"
        icon.style.color = '#eeeeee';
    }
}
