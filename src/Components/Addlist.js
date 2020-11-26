import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

//const BrowserHistory=require('react-r') 



function Handlelist(props) {
    const [openTask, setOpenTask] = React.useState(false);
    const [list, setList] = React.useState('');
    const [opens, setOpens] = React.useState(false);

    const handleClickOpen = () => {
        setOpens(true);
    };

    const handleClose = () => {
        setOpens(false);
    };

    const handleCreate = () => {
        setOpenTask(true);
        props.fun();
        console.log(openTask)


        let board = { ...JSON.parse(localStorage.boards) };

        board[props.title].push({ name: list, cards: [] });
        //board[props.title]['' + list].cards = [];
        console.log(board);
        localStorage.boards = JSON.stringify(board);
        props.refreshDashboard();
    }
    const handleList = (e) => {

        setList(e.target.value);
    }
    useEffect(() => {
        handleClickOpen();
    }, [openTask]);


    var openn = props.op;
    console.log(openTask);

    return (

        <div>

            <Dialog
                open={opens}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title"><input type="text" onChange={handleList} placeholder="Add a new list..."></input></DialogTitle>
                <DialogContent className="button-container">
                    <Button variant="contained" size="small" color="Primary" onClick={handleCreate}> Save list</Button>
                    <Button variant="contained" size="small" color="secondary" onClick={props.fun}> Cancel</Button>

                </DialogContent>

            </Dialog>












        </div>

    )
}

export default Handlelist
