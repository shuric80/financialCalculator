import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import CalculatorWrapper from './Calculator';

export default {
    component: CalculatorWrapper,
    title: 'Calculator',
    decorators: [withKnobs]
}

export const Default = () => {
    const componentKnobs = {}

    return <CalculatorWrapper/>
}
