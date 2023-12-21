import {Provider} from "react-redux";
import store from "./app/store.ts";
import TodoContainer from "./Components/TodoContainer.tsx";
import appStyle from './App.module.scss'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={appStyle.container}>
                    <TodoContainer/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
