export default function Debug(str:string){ 
    if(
        process.env.npm_lifecycle_event === 'Debug' 
    ){
        console.log( `Debug:\t  ${str}` )
    }

}


