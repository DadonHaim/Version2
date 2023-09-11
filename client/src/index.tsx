// import "./styles/index.css";
import ReactDOM  from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import {SocketProvider} from "./Socket"
import myStore from "./Store/Store"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SocketProvider>
    <Provider store={myStore}>
        <App/>
    </Provider>
  </SocketProvider>
);
