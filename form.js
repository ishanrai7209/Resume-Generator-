function formValidation(){  
    // var uid = document.registration.userid;  
    // var passid = document.registration.passid;  
    var uname = document.registration.username;  
    var uadd = document.registration.address;  
    var ucountry = document.registration.country;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var umsex = document.registration.msex;  
    var ufsex = document.registration.fsex; 
    var skills = document.registration.skills;
    var desc = document.registration.desc;
    // if(userid_validation(uid,5,12)){  
        // if(passid_validation(passid,7,12)){  
            if(allLetter(uname)){  
                if(alphanumeric(uadd)){   
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){  
                                if(validsex(umsex,ufsex)){  
                                    processform(uname,uadd,ucountry,uzip,uemail,skills,desc);
                                }  
                            }   
                        }  
                    }   
                }  
            }  
        // }  
    // }  
    return false;
}
  

function processform(name,address,country,zip,email,skills,desc){
    console.log("done");
    var nameElement= document.createElement("div");
    nameElement.innerText = name.value;
    var parentDiv = document.getElementsByClassName("previewMain")[0];
    parentDiv.appendChild(nameElement);

    var AddElement= document.createElement("div");
    AddElement.innerText = address.value;
    parentDiv.appendChild(AddElement);

    var countryElement= document.createElement("div");
    countryElement.innerText = country.value;
    parentDiv.appendChild(countryElement);

    var zipElement= document.createElement("div");
    zipElement.innerText = zip.value;
    parentDiv.appendChild(zipElement);

    var emailElement= document.createElement("div");
    emailElement.innerText = email.value;
    parentDiv.appendChild(emailElement);

    var skillElement= document.createElement("div");
    skillElement.innertext = skills.value;
    parentDiv.appendChild(skillElement);

    var descElement = document.createElement("div");
    descElement.innerText = desc.value;
    parentDiv.appendChild(descElement);
}

/*function userid_validation(uid,mx,my){  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx){  
        alert("User Id should not be empty / length be between "+mx+" to "+my);  
        uid.focus();  
        return false;  
    }  
    return true;  
}  

function passid_validation(passid,mx,my){  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx){  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        passid.focus();  
        return false;  
    }  
    return true;  
} */  

function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Username must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function alphanumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('User address must have alphanumeric characters only');  
        uadd.focus();  
        return false;  
    }  
} 

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function allnumeric(uzip){   
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers)){  
        return true;  
    }  
    else{  
        alert('ZIP code must have numeric characters only');  
        uzip.focus();  
        return false;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    /* else{  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false; 
    }  */
}

function validsex(umsex,ufsex){  
    x=0;  
    if(umsex.checked){  
        x++;  
    } 
    if(ufsex.checked){  
        x++;   
    }  
    if(x==0){  
        alert('Select Male/Female');  
        umsex.focus();  
        return false;  
    }  
    else{  
        alert('Form Successfully Submitted');  
        return true;
    }  
}   