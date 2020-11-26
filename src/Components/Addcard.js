import React from 'react';



function Addcard(props) {
    const boards = JSON.parse(localStorage.boards);
    const list = JSON.parse(localStorage.boards)[props.title];
    list.filter((ls) => ls.name === props.listname);

    // list.cards.push()

    const [task, setTask] = React.useState('');
    //const [open, setOpen] = React.useState(false);

    const taskSetter = (e) => {
        setTask(e.target.value);
        console.log(task)

    }
    const saveCard = () => {

        boards[props.title].filter((ls) => ls.name === props.listname)[0].cards.push(task);
        localStorage.boards = JSON.stringify(boards);
        console.log(boards);
        props.refresh();
        props.handleCard(false);
    };

    return (
        <div>
            <textarea onChange={taskSetter} placeholder="Type here..." row="30" column="80"></textarea>
            <button onClick={saveCard}>Save</button>

        </div>
    )
}

export default Addcard
