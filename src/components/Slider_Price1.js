import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import React from 'react';
import { Tooltip } from '@chakra-ui/react';

export default function Slider_Price1({ slider_value, setslider_value }) {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)

  console.log(sliderValue);
  return (
    <div>
      <Slider
        id='slider'
        defaultValue={5}
        min={0}
        max={300000}
        colorScheme='teal'
        onChange={(v) => setslider_value(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={50000} mt='1' ml='-2.5' fontSize='sm'>
          50K
        </SliderMark>
        <SliderMark value={100000} mt='1' ml='-2.5' fontSize='sm'>
          1L
        </SliderMark>
        <SliderMark value={200000} mt='1' ml='-2.5' fontSize='sm'>
          2L
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
          <SliderThumb boxSize={8}  />
        </Tooltip>
      </Slider>
    </div>
  )
}


