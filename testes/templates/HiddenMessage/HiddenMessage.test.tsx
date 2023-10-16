import * as React from 'react'
import {expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import {HiddenMessage} from './HiddenMessage'

test('shows the children when the checkbox is checked', () => {
    const testMessage = 'Test Message'
    render(<HiddenMessage>{testMessage}</HiddenMessage>)
    expect(screen.findByText('BJDISS-HGP001')).toBeDefined()
})
