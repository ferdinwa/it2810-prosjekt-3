import React, {useEffect, useState} from 'react'
import {Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap'
import {connect} from 'react-redux'
import { getPlayers } from '../actions/playerActions'
import { IPlayer, IPlayerReduxProps, IScroller } from '../interfaces'



const Scroller = ({getPlayers, player}: IScroller) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    useEffect(() => {
        getPlayers()
    }, [getPlayers] )

    const  {players} = player
    return (
        <div className="overflow-auto">
            <Button id="Popover1" type="button" block>
                Pelé
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Pelé</PopoverHeader>
                <PopoverBody>Greatest player</PopoverBody>
            </Popover>
            <div>
                <ul> {players.map((({name} : IPlayer) => (<li> <button>{name}</button> </li>)))} </ul>
            </div>
        </div>
        
    )
}


const mapStateToProps = (state: IPlayerReduxProps) => ({
    player: state.player
})

export default connect(mapStateToProps, { getPlayers })(Scroller)

