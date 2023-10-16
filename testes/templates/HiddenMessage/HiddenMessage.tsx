import * as React from 'react'

export function HiddenMessage({children}: any) {
    const [showMessage, setShowMessage] = React.useState(false)
    return (
        <div>
            <label htmlFor="toggle">Show Message</label>
            <input
                id="toggle"
                type="checkbox"
                onChange={e => setShowMessage(e.target.checked)}
                checked={showMessage}
            />
            {showMessage ? children : null}
        </div>
    )
}
