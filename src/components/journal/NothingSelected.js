import React from 'react'

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p>
                Select something
                <br />
                or create a new note!
            </p>

            <icon className="fas fa-sticky-note fa-4x mt-5"></icon>
        </div>
    )
}
