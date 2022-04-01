import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <p>It's me Who has no Copy!</p>
            <p>House : {house} </p>
            <div className='border p-1 m-1 rounded'>
                <Special></Special>
            </div>
        </div>
    );
};

export default Myself;