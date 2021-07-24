import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

import logo from '../../../Assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";

import {useDispatch, useSelector} from "react-redux";
import {setNewPageUrl, setTheme, setNewDegreeSystem} from "../../../Store/Reducers/themeReducer";
import {setFavoriteLocation} from "../../../Store/Reducers/favoriteLocationReducer";
import {ModalPopUp} from "../../ModalPopUp/ModalPopUp";


const NavBar = () => {

    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.themeStates.theme);
    const currentDegrees = useSelector(state => state.themeStates.degrees);
    const currentPage = useSelector(state => state.themeStates.page);
    const currentLocation = useSelector(state => state.locationState.location);
    const favoriteLocation = useSelector(state => state.favoritesLocationsState.favoriteLocation);

    const [statusLocation, setStatusLocation] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const [show, setShow] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState({});


    useEffect(() => {
        setScreenWidth(window.innerWidth);
        dispatch(setNewPageUrl(window.location.pathname));
    }, [dispatch]);


    const changeThemes = () => {
        if(currentTheme === 'light'){
            dispatch(setTheme('dark'));
        }else{
            dispatch(setTheme('light'));
        }
    }

    const changeDegrees = () => {
        if(currentDegrees === 'fahrenheit'){
            dispatch(setNewDegreeSystem('celsius'));
        }else{
            dispatch(setNewDegreeSystem('fahrenheit'));
        }
    }


    const changePage = (page) => {
        dispatch(setNewPageUrl(page));
    }


    useEffect(() => {
        for (let i = 0; i < favoriteLocation.length; i++){
            if(favoriteLocation[i].Key === currentLocation.Key){
                setStatusLocation(true);
            }else {
                setStatusLocation(false);
            }
        }
    }, [currentLocation,favoriteLocation]);



    const addLocation = () => {
        let favoriteArr = [];
        for (let i = 0; i< favoriteLocation.length; i++){
            favoriteArr.push(favoriteLocation[i])
        }
        if(!favoriteArr.includes(currentLocation)){
            favoriteArr.push(currentLocation);
            dispatch(setFavoriteLocation(favoriteArr));
            setStatusLocation(true);
            setShow(true);
            setPopUpMessage({title:'Added successfully!', message:`You have added this city: " ${currentLocation.LocalizedName}" to your favorites`});
        }
    }

    const removeLocation = () => {
        for (let i = 0; i < favoriteLocation.length; i++){
            if(favoriteLocation[i].Key === currentLocation.Key){
                let indexElement = favoriteLocation.indexOf(currentLocation);
                favoriteLocation.splice(indexElement, 1);
                dispatch(setFavoriteLocation(favoriteLocation));
                setStatusLocation(false);
                setShow(false);
            }
        }
    }


    return (
        <div className={styles.navBlock}>
            <ModalPopUp show={show} title={popUpMessage.title} message={popUpMessage.message}/>
            <div className={styles.container}>
                <div><img src={logo} alt='logo' className={styles.images}/></div>
                <div>
                    <NavLink to="/" exact activeStyle={{fontWeight: "bold", borderBottom: '3px solid white'}}
                             className={styles.NavLink} onClick={()=>{changePage('/')}}>Home</NavLink>
                    <NavLink to="/favorite" activeStyle={{fontWeight: "bold", borderBottom: '3px solid white'}}
                             className={styles.NavLink} onClick={()=>{changePage('/favorite')}}>Favorite</NavLink>
                </div>
                <div>
                    {(currentPage === '/') ? (
                        (statusLocation) ? (
                            <Button variant="outline-light" className={styles.btnSave} onClick={removeLocation}>{(screenWidth <= 420) ? '' : 'added '}
                                <FontAwesomeIcon icon={faHeart}/>
                            </Button>
                        ) : (
                            <Button variant="outline-light" className={styles.btn} onClick={addLocation}>{(screenWidth <= 420) ? '' : 'add to '}
                                <FontAwesomeIcon icon={faHeart}/>
                            </Button>
                        )) : null}
                        <Button variant="outline-light" className={styles.btn} onClick={changeDegrees}>&deg;{(currentDegrees === 'celsius') ? ('C') : ('F')}</Button>
                        <Button variant="outline-light" className={styles.btn} onClick={changeThemes}><FontAwesomeIcon icon={(currentTheme === 'light') ? (faSun) : (faMoon)}/></Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
