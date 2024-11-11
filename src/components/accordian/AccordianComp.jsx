import React, { useState } from 'react';
import data from './accoData';
import './accordian.css';

const AccordianComp = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultiple(cpyMultiple);

        // setMultiple((prevMultiple) =>
        //     prevMultiple.includes(getCurrentId)
        //         ? prevMultiple.filter((item) => item !== getCurrentId)
        //         : [...prevMultiple, getCurrentId]
        // );
    }

    console.log(selected, multiple);
    return (
        <div className='wrapper'>
            <h1>Accordian</h1>
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                className='acco-btn'>{enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
            <div className='accordian'>
                {data && data.length > 0 ?
                    (data.map((dataItem) => (
                        < div className="acco-item" key={dataItem.id} >
                            {/* For single selection */}
                            {/* <div className="acco-title"
                                onClick={() => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div> */}

                            {/* For multiple selection */}
                            < div className="acco-title"
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>

                                <span>{enableMultiSelection
                                    ? multiple.includes(dataItem.id)
                                    : selected === dataItem.id ? '-' : '+'}</span>
                            </div>

                            {/* For Single selection */}
                            {/* {selected === dataItem.id ?
                                <div className='acco-content'>
                                    {dataItem.answer}
                                </div> : null} */}

                            {/* For Multiple Selection */}

                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 &&
                                (<div className='acco-content'>{dataItem.answer}</div>)
                                : selected === dataItem.id &&
                                (<div className='acco-content'>{dataItem.answer}</div>
                                )}
                        </div>
                    )))
                    : (
                        <div>No data found!</div>
                    )}
            </div >
        </div >

        // <div className='wrapper'>
        //     <h1>Accordion</h1>
        //     <button
        //         onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        //         className='acco-btn'>
        //         {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
        //     </button>
        //     <div className='accordion'>
        //         {data && data.length > 0 ? (
        //             data.map((dataItem) => {
        //                 const isOpen = enableMultiSelection
        //                     ? multiple.includes(dataItem.id)
        //                     : selected === dataItem.id;

        //                 return (
        //                     <div className="acco-item" key={dataItem.id}>
        //                         <div
        //                             className="acco-title"
        //                             onClick={
        //                                 enableMultiSelection
        //                                     ? () => handleMultiSelection(dataItem.id)
        //                                     : () => handleSingleSelection(dataItem.id)
        //                             }
        //                         >
        //                             <h3>{dataItem.question}</h3>
        //                             <span>{isOpen ? '-' : '+'}</span>
        //                         </div>
        //                         {isOpen && (
        //                             <div className='acco-content'>{dataItem.answer}</div>
        //                         )}
        //                     </div>
        //                 );
        //             })
        //         ) : (
        //             <div>No data found!</div>
        //         )}
        //     </div>
        // </div>
    )
}

export default AccordianComp;