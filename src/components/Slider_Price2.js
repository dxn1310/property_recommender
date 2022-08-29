import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import React from 'react';
import { Tooltip } from '@chakra-ui/react';

export default function Slider_Price2({ slider_value, setslider_value }) {
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)

    console.log(sliderValue);
    return (
        <div>
            <Slider
                id='slider'
                defaultValue={5}
                min={0}
                max={30000000}
                colorScheme='teal'
                onChange={(v) => setslider_value(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={2000000} mt='1' ml='-2.5' fontSize='sm'>
                    20L
                </SliderMark>
                <SliderMark value={7000000} mt='1' ml='-2.5' fontSize='sm'>
                    70L
                </SliderMark>
                <SliderMark value={15000000} mt='1' ml='-2.5' fontSize='sm'>
                    1.5C
                </SliderMark>
                <SliderMark value={20000000} mt='1' ml='-2.5' fontSize='sm'>
                    2C
                </SliderMark>
                <SliderTrack boxSize={3} boxShadow>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${slider_value}/-`}
                >
                    <SliderThumb boxSize={8} />
                </Tooltip>
            </Slider>
        </div>
    )
}


