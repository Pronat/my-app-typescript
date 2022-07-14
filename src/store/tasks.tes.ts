import React from 'react';
import {sum} from "./tasks";

test(' test sum of array', () => {


    expect(sum(1, 2, 5, 55, 12)).toBe(75)
    expect(sum(1, 2, -5, 55, 12)).toBe(70)

})

