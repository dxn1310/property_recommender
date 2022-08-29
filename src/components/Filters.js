import React, { useState } from 'react';
import Slider1 from './Slider_Price1.js';
import Slider2 from './Slider_Price2.js';
import { Button } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';



export default function Filters({ filters, setFilters }) {

    const [accordion_value, setaccordion_value] = useState("");
    const [index1, setindex1] = useState(1);
    const [index2, setindex2] = useState(1);
    const [slider_value, setslider_value] = useState(0);

    const handlecollapse = () => {
        setindex1(1)
        setindex2(1)
    }

    const handleRefresh = (e) => {
        setindex1(1)
        setindex2(1)
        setslider_value(0)
        setFilters({
            rob: "",
            area: "all",
            when: "",
            price: 0,
            type: ""
        })

    }

    const handleSubmission = (e) => {
        e.preventDefault();
        if (accordion_value == "rent") {
            const area = document.getElementsByClassName("select-drop")[0].value;
            const type = document.getElementsByClassName("select-drop")[1].value;
            const when = document.getElementsByClassName("select-drop")[2].value;

            setFilters({
                rob: accordion_value,
                area: area,
                when: when,
                price: slider_value,
                type: type
            })

        }
        else if (accordion_value == "buy") {
            const area = document.getElementsByClassName("select-drop")[3].value;
            const type = document.getElementsByClassName("select-drop")[4].value;
            const when = document.getElementsByClassName("select-drop")[5].value;


            setFilters({
                rob: accordion_value,
                area: area,
                when: when,
                price: slider_value,
                type: type
            })
        }
    }
    return (
        <div className='Filters-outer'>
            <div className='Filters-inner'>
                <div className='Accordion-class'>
                    <div>
                        <Accordion index={index1} allowMultiple className='btn' onClick={(e) => { setaccordion_value("rent"); setindex1(0); setindex2(1); }}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        Rent
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel >
                                    <div className='Option2'>
                                        <div className='option-select'>
                                            <Select className='select-drop'>
                                                <option value="all"><p className='option-value' selected>All the properties</p></option>
                                                <option>Kundalahalli</option>
                                                <option>Marathalli</option>
                                                <option>HSR Layout</option>
                                            </Select>
                                        </div>
                                        <div className='option-select'>
                                            <Select className='select-drop'>
                                                <option selected>Type</option>
                                                <option>House</option>
                                                <option>Office</option>
                                            </Select>
                                        </div>
                                        <div className='option-select1'>
                                            <Select className='select-drop'>
                                                <option selected>Availibility</option>
                                                <option>Move in </option>
                                                <option>After 1 week</option>
                                                <option>More than 1 Week</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='Option3'>
                                        <div className='Slider'>
                                            <Slider1 slider_value={slider_value} setslider_value={setslider_value} /></div>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div>
                        <Accordion index={index2} allowMultiple className='btn' onClick={(e) => { setaccordion_value("buy"); setindex1(1); setindex2(0); }}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        Buy
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={10}>
                                    <div className='Option2'>
                                        <div className='option-select'>
                                            <Select className='select-drop'>
                                                <option value="all"><p className='option-value' selected>All the properties</p></option>
                                                <option>Kundalahalli</option>
                                                <option>Marathalli</option>
                                                <option>HSR Layout</option>
                                            </Select>
                                        </div>
                                        <div className='option-select'>
                                            <Select className='select-drop'>
                                                <option selected>Type</option>
                                                <option>House</option>
                                                <option>Land</option>
                                            </Select>
                                        </div>

                                        <div className='option-select1'>
                                            <Select className='select-drop'>
                                                <option selected>Availibility</option>
                                                <option>Move in </option>
                                                <option>After 1 week</option>
                                                <option>More than 1 Week</option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='Option3'>
                                        <div className='Slider'><Slider2 slider_value={slider_value} setslider_value={setslider_value} /></div>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div>
                    <Switch colorScheme='teal' onChange={handlecollapse} />
                </div>

            </div>
            <div className='Search-btn'>
                <Button
                    className='fil-btn'
                    size='md'
                    height='40px'
                    width='150px'
                    border='2px'
                    borderColor='green.500'
                    borderRadius='50px'
                    onClick={(e) => handleSubmission(e)}>
                    Search
                </Button>
            </div>
            <div>
                <Button
                    className='fil-btn'
                    size='md'
                    height='40px'
                    width='150px'
                    border='2px'
                    borderColor='green.500'
                    borderRadius='50px'
                    onClick={(e) => handleRefresh(e)}>
                    Refresh
                </Button>
            </div>
        </div >
    )
}
