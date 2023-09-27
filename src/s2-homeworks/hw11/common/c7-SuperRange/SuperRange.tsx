import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props)
    return (
        <Slider
            sx={{
                width: 147,
                color: '#00CC22',
                height: 3,
                paddingTop: '56px ',
                marginRight: '22px ',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:after': {
                        position: 'relative',
                        top: 3,
                        backgroundColor: 'currentColor',
                        left: 3,
                        height: 6,
                        width: 6,
                        borderRadius: '50%',
                    },
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },
                    '& .airbnb-bar': {
                        height: 9,
                        width: 1,
                        backgroundColor: 'currentColor',
                        marginLeft: 1,
                        marginRight: 1,
                    },
                },
                '& .MuiSlider-track': { // зеленая линия
                    height: 4,
                },
                '& .MuiSlider-rail': { // серая линия
                    color: '#8B8B8B',
                    opacity: 1,
                    height: 4,
                },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
