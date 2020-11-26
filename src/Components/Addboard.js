import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import '../Style/Common.scss';
var store = require('store');


function Addboard() {
    const his = useHistory();
    const [open, setOpen] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    var [boardname, setBoardname] = React.useState("");
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        his.push("/board");
        setOpen(false);

    };
    const handleboardName = (e) => {
        setBoardname(e.target.value);

    }
    const createBoard = () => {
        if (!localStorage.boards) {
            localStorage.boards = JSON.stringify([]);
        }
        let boards = { ...JSON.parse(localStorage.boards) };
        boards[boardname] = [];
        console.log(boards);
        localStorage.boards = JSON.stringify(boards);

        history.push(`/board?name=${boardname}`);
        setSubmitted(true);

    }




    useEffect(() => {
        handleClickOpen();
    }, []);
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"New Board"}</DialogTitle>
                <DialogContent>
                    <input type="text" onChange={handleboardName}></input>
                    <div className="button-container">
                        <Button variant="contained" size="small" color="Primary" onClick={createBoard}> Create Board</Button> {"or"}
                        <Button variant="contained" size="small" color="Secondary" onClick={handleClose}> Cancel</Button></div>
                </DialogContent>

            </Dialog>


        </div>
    )
}

export default Addboard
