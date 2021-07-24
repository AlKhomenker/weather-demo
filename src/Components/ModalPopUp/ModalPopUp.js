import React, {useEffect, useState} from 'react';
import {Button, Modal } from 'react-bootstrap';

const ModalPopUp = (props) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
       setShow(props.show);
    }, [props.show]);

    const handleClose = () => setShow(false);

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export {ModalPopUp};
