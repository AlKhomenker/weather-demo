import React, {useState, useEffect} from 'react';
import styles from './SearchLocation.module.css';
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setNewLocation} from "../../Store/Reducers/locationReducer";
import {ModalPopUp} from "../ModalPopUp/ModalPopUp";


const SearchLocation = () => {

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');
    const [status, setStatus] = useState(true);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setLocation(value);
    }

    useEffect(() => {
        const pattern = /^[a-zA-Z\s-]+$/;
        if (location.length > 0 && pattern.test(location)) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [location]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status) {
            await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09xrWzkJzTkGOGl6mYcWcDrE5tn9djaGlK&q=${location}`)
                .then(res => {
                    dispatch(setNewLocation(res.data[0]));
                    setLocation('');
                }).catch(err => {
                    console.log(err)
                    setShow(true);
                    setLocation(location);
                });
        }
    }


    return (
        <div>
            <Form className={styles.wrapper}>
                <InputGroup className="mb-">
                    <FormControl placeholder="Find out the weather in your city:" value={location}
                                 className={styles.input} onChange={handleChange}/>
                    <Button variant='outline-light' className={styles.btn} onClick={handleSubmit}
                            style={{cursor: `${(!status) ? ('not-allowed') : ('pointer')}`}}
                            disabled={(!status) ? ('disabled') : null}>search</Button>
                </InputGroup>
                <span>names must be in English only, may contain spaces and hyphens</span>
            </Form>
            <ModalPopUp show={show} title={'Input Error:'} message={`Sorry, we cannot find this city: "${location}" . Please check if you have written correctly.`}/>
        </div>

    );
};

export {SearchLocation};
