import React, {useEffect, useState} from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

import logo from '../../../Assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";

import {useDispatch, useSelector} from "react-redux";
import {setNewPageUrl, setTheme} from "../../../Store/Reducers/themeReducer";
import {setFavoriteLocation} from "../../../Store/Reducers/favoriteLocationReducer";
import {ModalPopUp} from "../../ModalPopUp/ModalPopUp";

const localStorage = window.localStorage;

const NavBar = () => {

    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.themeStates.theme);
    const currentPage = useSelector(state => state.themeStates.page);
    const currentLocation = useSelector(state => state.locationState.location);
    const favoriteLocation = useSelector(state => state.favoritesLocationsState.favoriteLocation);

    const [statusLocation, setStatusLocation] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const [show, setShow] = useState(false);


    useEffect(() => {
        setScreenWidth(window.innerWidth);
        dispatch(setNewPageUrl(window.location.pathname));
    }, [dispatch]);


    const changeThemes = () => {
        if(currentTheme === 'light'){
            dispatch(setTheme('dark'));
            localStorage.setItem('localTheme', 'dark');
        }else{
            dispatch(setTheme('light'));
            localStorage.setItem('localTheme', 'light');
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
        }
    }

    const removeLocation = () => {
        for (let i = 0; i < favoriteLocation.length; i++){
            if(favoriteLocation[i].Key === currentLocation.Key){
                let indexElement = favoriteLocation.indexOf(currentLocation);
                favoriteLocation.splice(indexElement, 1);
                dispatch(setFavoriteLocation(favoriteLocation));
                setStatusLocation(false);
            }
        }
    }


    return (
        <div className={styles.navBlock}>
            <ModalPopUp show={show} title={'Added successfully!'} message={`You have added this city:" ${currentLocation.LocalizedName}" to your favorites`}/>
            <div className={styles.container}>
                <div><img src={logo} alt='logo' className={styles.images}/></div>
                <div>
                    <NavLink to="/" exact activeStyle={{fontWeight: "bold", borderBottom: '3px solid white'}}
                             className={styles.NavLink} onClick={()=>{changePage('/')}}>Home</NavLink>
                    <NavLink to="/favorite" activeStyle={{fontWeight: "bold", borderBottom: '3px solid white'}}
                             className={styles.NavLink} onClick={()=>{changePage('/favorite')}}>Favorite</NavLink>
                </div>
                <div>
                    <Button variant="outline-light" className={styles.btn} onClick={changeThemes}><FontAwesomeIcon icon={(currentTheme === 'light') ? (faSun) : (faMoon)}/></Button>
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
                </div>
            </div>
        </div>
    );
};

export default NavBar;
