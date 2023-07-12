import React from 'react'
import { BeatLoader } from "react-spinners";

const Loading = ({ isLoading, error, children }) => {
    const elementType = children?.type?.render?.displayName;
    const renderHandler = () => {
        if (elementType === 'Button') {
            const cloneButton = React.cloneElement(children, { disabled: true }, (<BeatLoader color="#969bac" size={7} />))
            return (
                <>
                    {isLoading ? cloneButton : error ? <>{children}<p>{error}</p></> : children}
                </>
            )
        }
        return (
            <>
                {isLoading ? (<BeatLoader color="#496ef0" size={10} />) : error ? <p>{error}</p> : children}
            </>
        )
    }

    return renderHandler()
}

export default Loading