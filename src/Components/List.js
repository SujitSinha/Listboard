import React from 'react'
import Addcard from './Addcard'
import Button from '@material-ui/core/Button';

import '../Style/Common.scss';
let setFlag;

function List(props) {
    const [show, setShow] = React.useState(false);


    const handleCard = (flag) => {

        setFlag !== flag && setShow(flag);
        setFlag = flag;

    }
    return (
        <div>
            <h1 className="list-header" title={props.data.name}>{props.data.name}</h1>


            {props.data.cards.map((card) => {
                return (<div class="card">{card}

                </div>

                )
            })

            }

            < Button variant="contained" size="small" color="Primary" onClick={() => handleCard(true)}>Add new card</Button>
            { show && <Addcard listname={props.data.name} title={props.title} refresh={props.refreshDashboard} handleCard={handleCard} />}


        </div >
    )
}

export default List;

