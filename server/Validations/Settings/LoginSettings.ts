export const LoginSettings = {
    username    :{unique:true,  require:true,   min: 4, max:14},
    password    :{unique:false, require:true,   min: 6, max:30},
}


export const ILoginTest = {
    username    :{unique:true,  require:true, min:LoginSettings.username.min, max:LoginSettings.username.max, value: "Testusername"},
    password    :{unique:false, require:true, min:LoginSettings.password.min, max:LoginSettings.password.max, value: "Testpassword"},
}