export function validateUserName(username) { 

    let errorMessage = null
    let isValid = true

    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!username)
    {
        isValid = false
        errorMessage = "Username Missing"   
    }
    else if(reg.test(username) === false) 
    { 
        errorMessage = "Invalid Username"
        isValid =  false; 
    } 
    
    return {isValid, errorMessage};

}

export function validatePassword(password) { 

    let errorMessage = null
    let isValid = true


    if (!password)
    {
        isValid = false
        errorMessage = "Password Missing"   
    }

    return {isValid, errorMessage};

}
