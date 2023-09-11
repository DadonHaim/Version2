
interface IActionPageStore{
    payload :{
        type: "thePage" | "subPage";
        newValue:any;
    }
}
interface IActionFlagStore{
    payload :{
        type: "isLogin";
        newValue:any;
    }
}
interface IActionUserStore{
    payload :{
        type: "user";
        newValue:any;
    }
}