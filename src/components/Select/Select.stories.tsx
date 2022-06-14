import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () =>
    <>
        <Select
            value={"2"}
            onChange={action("Value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}/>
    </>

export const WithoutValue = () =>
    <>
        <Select
            value={"1"}
            onChange={action("Value changed")}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},
            ]}/>
    </>






