import './App.css';
import {Route, Switch, Redirect} from "react-router";
import Main from "./Pages/Main/Main";
import Favorite from "./Pages/Favorite/Favorite";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import {useSelector} from "react-redux";


function App() {

    const currentTheme = useSelector(state => state.themeStates.theme);

    return (
        <div className='App' style={{backgroundColor:`${(currentTheme === 'light') ? ('#F5F5F5') : ('#272E38')}`}}>
            <NavBar className='Navbar'/>
            <Switch>
                <Route path={'/'} exact component={Main}/>
                <Route path={'/favorite'} component={Favorite}/>
                <Redirect exact from='*' to='/'/>
            </Switch>
        </div>

    );
}

export default App;
