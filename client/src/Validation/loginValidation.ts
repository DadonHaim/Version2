import ResultValid from "./ResultValid";

export default  function LoginValidation(obj:ILogin) : ResultValid{


    return new ResultValid<ILoginValidation>({username:"sss" ,password:"asdasd"},true);
} 


interface ILoginValidation{
    username? : string;
    password? : string;
}

