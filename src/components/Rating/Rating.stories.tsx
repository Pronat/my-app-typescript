import React from 'react';
import {action} from '@storybook/addon-actions'
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
    }

export const Rating0 = () => <Rating value={0} onClick={x=>x} />
export const Rating1 = () => <Rating value={1} onClick={x=>x} />
export const Rating2 = () => <Rating value={2} onClick={x=>x} />
export const Rating3 = () => <Rating value={3} onClick={x=>x} />
export const Rating4 = () => <Rating value={4} onClick={x=>x} />
export const Rating5 = () => <Rating value={5} onClick={x=>x} />








    // export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>
// export const Emoji = () => <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//         smile-smile
//     </span>
// </Button>
