import React from 'react'

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p>
                Select something
                <br />
                or create an entry!
            </p>

            <icon className="far fa-star fa-4x mt-5"></icon>
        </div>
    )
}
