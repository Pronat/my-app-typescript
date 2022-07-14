import React from 'react';

export const sum = (...state: Array<number>) => {
    return state.reduce((a, b) => a + b)

}