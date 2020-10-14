import React, {useState} from 'react'
import {Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap'


const Scroller = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div className="overflow-auto">
            <Button id="Popover1" type="button" block>
                Pelé
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Pelé</PopoverHeader>
                <PopoverBody>Greatest player</PopoverBody>
            </Popover>
        </div>
    )
}

export default Scroller

