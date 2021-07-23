// passwords array

var passwords = [{

        password: "password1"
    },
    {

        password: "password2"
    },
    {

        password: "password3"
    }

]

function validate() {

    var password = document.getElementById("password").value

    for (var i = 0; i < passwords.length; i++) {
        // check is user input  password of a current index of the passwords array
        if (password == passwords[i].password) {
            //for example: user go to index.html
            window.open('index.html', '_blank');
            return
        }
    }
    //if password is incorrect, set a text  inside validation_info
    document.getElementById("validation_info").style.display = "flex";
}