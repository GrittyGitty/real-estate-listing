import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';


const WithErrorMessageContainer = ({ children:el }) => {
    const [visibility, toggleVisi] = useState("visible");
    const { submitCount, errors } = useFormContext();

    const error = errors?.[el.props.name]?.message;

    useEffect(() => {
        toggleVisi("visible");
        setTimeout(() => { toggleVisi("hidden") }, 2000)
    }, [error, submitCount])
    return (
        <div className="error-message-container">
            {el}
            {error &&
                <div className="error-message" style={{ visibility }} >
                    {error}
                </div>
            }
        </div>
    )
}

export default WithErrorMessageContainer;