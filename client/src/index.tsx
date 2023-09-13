import { Provider, SocketProvider, myStore ,ReactDOM, App} from './importAll';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SocketProvider>
    <Provider store={myStore}>
        <App/>
    </Provider>
  </SocketProvider>
);
