import React, { useEffect, useState } from 'react';
import './randomcolor.css';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const colorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateHexRandomColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor = hexColor + hex[colorUtility(hex.length)];
        };

        setColor(hexColor);
        // console.log(hexColor);
    };


    const handleCreateRgbRandomColor = () => {
        const r = colorUtility(256);
        const g = colorUtility(256);
        const b = colorUtility(256);

        setColor(`rgb (${r}, ${g} ,${b})`);
    };

    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleCreateRgbRandomColor()
        } else {
            handleCreateHexRandomColor()
        }
    }, [typeOfColor]);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                background: color,
            }}>
            <div className='btns'>
                <button
                    className='color-btn'
                    onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button
                    className='color-btn'
                    onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
                <button
                    className='color-btn'
                    onClick={typeOfColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor}>Create Random Color</button>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '40px',
                marginTop: '80px',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor;