import React from 'react';

const RowList = ({ rowList }) => {


    const renderList = () => {
        return (
            rowList.map(item => (
                <div key={item.name}>
                    <li><a href={item.link}>{item.name}</a>
                        <span> </span>-<span> </span>{item.description}
                    </li>
                </div>
            ))
        )
    }

    return (
        <div>
            {renderList()}
            <br />
        </div>
    )
}

export default RowList;
