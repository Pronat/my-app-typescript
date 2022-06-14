import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'


export default {
    title: 'Select',
    component: Select,
    }

export const Select = () => <Select value={0} onClick={x=>x} />
}







