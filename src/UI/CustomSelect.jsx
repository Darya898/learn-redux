import React from 'react';

const CustomSelect = ({rate,getChange}) => {
    return (
        <>
            <select value={rate} onChange={getChange}>
                <option value="0" disabled hidden>Рейтинг</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>

            </select>
        </>
    );
};

export default CustomSelect;