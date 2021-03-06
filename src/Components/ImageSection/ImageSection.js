import React from 'react';
import styles from './ImageSection.module.css';
import {SearchLocation} from "../SearchLocation/SearchLocation";

import city from '../../Assets/weatherTheme/city.png';
import Zoom from "react-reveal/Zoom";

const ImageSection = (props) => {

    return (
        <div>
            <div className={styles.header} style={{background:`url(${city})`}}>
                <div className={styles.txt}>
                    <Zoom cascade>  <h1>{props.header}</h1></Zoom>
                    <div className={styles.quote}>
                        <p>{props.quote}</p>
                        <hr/>
                    </div>

                    {(props.header !== 'favorite')?(
                        <SearchLocation/>
                    ): null}
                </div>
            </div>
        </div>
    );
};

export {ImageSection};
