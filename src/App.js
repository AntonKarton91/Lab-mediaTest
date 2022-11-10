import './App.css';
import ContainerComponent from "./Components/Container.Component";
import React, {useEffect} from "react";
import {Provider, useDispatch} from 'react-redux'
import {fetchUserList} from "./Store/acyncActions/listAcyncActions";
import {store} from "./Store/store";


function App() {


    return (
      <Provider store={store}>
        <ContainerComponent/>
      </Provider>
    );
}

export default App;
