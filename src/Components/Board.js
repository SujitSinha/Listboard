import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/Common.scss';
import List from './List'
import Button from '@material-ui/core/Button';
import Addlist from './Addlist';
import { useHistory } from 'react-router-dom';



function Board() {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery();
    let title = (query.get('name')) || localStorage.boards && Object.keys(JSON.parse(localStorage.boards))[0];
    const board = localStorage.boards && JSON.parse(localStorage.boards)[title];
    const [open, setOpen] = React.useState(false);
    const [dashboard, setDashboard] = React.useState(board);
    const his = useHistory();

    const handleClickOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const refreshDashboard = () => {
        setDashboard(JSON.parse(localStorage.boards)[title])
    }

    const handleRoute = () => {
        his.push("/addboard");
    }

    return (
        <>
            {title && <div className="container">
                <h1 className="board-header">Board Name-{title}</h1>

                <Button variant="contained" size="small" color="Secondary" onClick={handleClickOpen}>
                    Add new list
      </Button>
                {open &&
                    <Addlist fun={handleClickOpen} title={title} refreshDashboard={refreshDashboard} />
                }
                <div className="list-container">

                    {dashboard && dashboard.map((list) => {
                        return (<div className="list-container-item">
                            <List data={list} title={title} refreshDashboard={refreshDashboard} />
                        </div>
                        )


                    })

                    }
                </div>

            </div>
            }

            {!title && <div><p>No Board found!!!!</p>
                <Button variant="contained" size="small" color="Secondary" onClick={handleRoute}>Create Board</Button>
            </div>
            }
        </>

    )
}

export default Board
