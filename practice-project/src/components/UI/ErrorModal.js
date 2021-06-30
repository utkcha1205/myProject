import classes from './ErrorModal.module.css';
import React from 'react';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
    return(
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>{props.title}</header>
                <div className={classes.content}>{props.message}</div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>OK</Button>
                </footer>
            </Card>
        </React.Fragment>
    )
}

export default ErrorModal;