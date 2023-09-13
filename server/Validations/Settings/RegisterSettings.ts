import randomString from "../../Functions/RandomString"

export const RegisterSettings = {
    username    :{unique:true,  require:true,   min: 4, max:14},
    email       :{unique:true,  require:true,   min: 6, max:50},
    password    :{unique:false, require:true,   min: 6, max:30},
    firstName   :{unique:false, require:false,  min: 2, max:12},
    lastName    :{unique:false, require:false,  min: 2, max:12}
}

export const IRegisterTest = {
    username    :{unique:true,  require:true, min: RegisterSettings.username.min,     max:RegisterSettings.username.max,  value: "Test"+randomString(6)},
    password    :{unique:false, require:true, min: RegisterSettings.password.min,     max:RegisterSettings.password.max,  value: "Test"+randomString(6)},
    email       :{unique:true,  require:true, min: RegisterSettings.email.min,        max:RegisterSettings.email.max,     value: "Test"+randomString(6)},
    firstName   :{unique:false, require:true, min: RegisterSettings.firstName.min,    max:RegisterSettings.firstName.max, value: "Test"+randomString(6)},
    lastName    :{unique:false, require:true, min: RegisterSettings.lastName .min,    max:RegisterSettings.lastName.max,  value: "Test"+randomString(6)}
}