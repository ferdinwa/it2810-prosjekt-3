import React, {useEffect, useState} from 'react'
import {Button, Popover, PopoverBody, PopoverHeader, Modal, ModalHeader, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import { getPlayers } from '../actions/playerActions'
import { IPlayer, IPlayerReduxProps, IScroller } from '../interfaces'



const Scroller = ({getPlayers, player}: IScroller) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [position, setPosition] = useState()
    const [nation, setNation] = useState()
    const [club, setClub] = useState()


    const toggle = (playername: string, playerage: string, playerposition: string,
        playernation: string, playerclub: string) => {
        setName(playername)
        setAge(playerage)
        setPosition(playerposition)
        setNation(playernation)
        setClub(playerclub)
        setModal(!modal);
    }

    const toggleModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        getPlayers()
    }, [getPlayers] )

    const  {players} = player
    return (  
        <div>
            <ul>
                {players.map((({...players} : IPlayer) => (
                    <div><Button color="secondary" onClick={() => toggle(players.name, players.age, players.position,
                    players.nation, players.club, )} > {players.name} </Button>
                    </div>       
                )))}
            </ul>
            <Modal isOpen={modal} toggle={toggleModal}> 
                <ModalHeader toggle={toggleModal}> {name} </ModalHeader>
                <ModalBody> 
                    Alder: {age} 
                    <br/>
                    Posisjon: {position}
                    <br/>
                    Klubb: {club}
                    <br/>
                    Nasjon: {nation}
                </ModalBody>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state: IPlayerReduxProps) => ({
   player: state.player
})

export default connect(mapStateToProps, { getPlayers })(Scroller)

