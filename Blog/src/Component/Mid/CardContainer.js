import React from 'react'

const CardContainer = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
        console.log("Appended : " + e.target)
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            style={{ width: "18rem" }}
        >
            {props.children}
        </div>
    )
}
export default CardContainer;
