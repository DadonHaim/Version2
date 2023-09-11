export default class ResultValid<T=any>{
    public messages : T;
    public valid:boolean;

    public constructor(messages:T , isValid:boolean){
        this.valid = isValid;
        this.messages = messages;
    }

    public Valid(callback:(msg:T)=>void):ResultValid{
        if(this.valid)
            callback(this.messages);
        return this;
    }
    public NoValid(callback:(msg:T)=>void):ResultValid{
        if(!this.valid)
            callback(this.messages);
        return this;
    }
}


