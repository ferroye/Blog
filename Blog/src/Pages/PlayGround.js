import React from 'react'
import CardContainer from '../Component/Mid/CardContainer'
import DragableCard from '../Component/Mid/DragableCard'
import { TopMenu } from '../Component/Top/topMenu'

const PlayGround = () => {


    return (
        <>
            <TopMenu />
            <CardContainer className="card" id="board-1">
                <div className="card-body">
                    <DragableCard className="btn btn-primary" id="card-1">
                        <p>Card One</p>
                    </DragableCard>
                </div>
            </CardContainer>

            <CardContainer className="card" id="board-2" >
                <div className="card-body">
                    <DragableCard className="btn btn-primary" id="card-2">
                        <p>Card Two</p>
                    </DragableCard>
                </div>
            </CardContainer>
            <div className="float-right">
                <CardContainer className="card" id="board-2" >
                    <div className="card-body">

                    </div>
                </CardContainer>
            </div>
        </>
    )
}
export default PlayGround;