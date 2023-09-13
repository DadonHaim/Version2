import "./Components/Global/GlobalStyle.css"
import {
    // useSocket,
    useStore,
    useEffect,
    useSelector,
    Guest,
    memo,
    User,
    socket,
} from "./importAll"

const App = memo( ()=>{
   
    let {actions,dispatch}  = useStore()
    let mainPage            = useSelector<any,any>(store=>store.mainPage)
  

     useEffect(()=>{
        let token = sessionStorage.getItem("token");
        if(token)
            socket.emit<string>("Start-With-Token",token)
        socket.on<server,User>("Start-Token-Valid",(user)=>{
          dispatch(actions.setIsLogin(true));
          dispatch(actions.setUser(user));
        })
      })



    if(mainPage == "Guest") return  <Guest/>

    else if (mainPage == "Game")
        return <>
            <button onClick={
                ()=>{
                   dispatch(actions.setIsLogin(false))
                   dispatch(actions.setMainPage("Guest"))
                    User.KillToken()  
                }
            }>התנתק</button>
        </>
    
    
    return <></>
} )

export default App