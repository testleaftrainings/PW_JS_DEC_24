
function validateUser(user,loginInfo){      
        loginInfo(user)
}

function login(credentials){
    console.log("Login to the application  user as "+credentials)
}


validateUser("vidya",login)


//loginInfo=login
//loginInfo(:vidya)=login(Vidya)