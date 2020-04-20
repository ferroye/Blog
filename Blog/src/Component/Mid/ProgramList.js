import React from 'react';


const ProgramList = ({ rowList }) => {

    const renderList = () => {
        return (
            rowList.map(item => (
                <div key={item.name} className="text-primary col-sm-4">
                    <li>
                        {item.name}
                    </li>
                </div>
            ))
        )
    }
    return (
        <>
            {renderList()}

        </>
    )
}

export default ProgramList;
