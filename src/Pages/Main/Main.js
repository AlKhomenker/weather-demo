import React from 'react';
import styles from './Main.module.css';
import global from '../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {DescriptionCard} from "../../Global/Components/DescriptionCard/DescriptionCard";




const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <WelcomeSection pageName='main' addBlock='form'/>
        </Container>
    );
};

export default Main;