import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

export default function Card() {
    const his = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createBoard = () => {

        his.push("/addboard");


    }
    const viewBoard = () => {
        his.push("/board");

    }

    useEffect(() => {
        handleClickOpen();
    });

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">{"Create a new Board?"}</DialogTitle>
                <DialogContent className="button-container">
                    <Button variant="contained" size="small" color="Primary" onClick={createBoard}> Create</Button>
                    <Button variant="contained" size="small" color="secondary" onClick={viewBoard}> View</Button>
                </DialogContent>

            </Dialog>
        </div>
    );
}
