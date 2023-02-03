import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test("Should be disabled", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Should be loading", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector('span')).toBeInTheDocument()
})

test("Should render <a></a> tag", () => {
    const {container} = render(<Button type='link' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})

test("Should render <Link></Link> tag", () => {
    const {container} = render(<Router><Button href='' type="link"></Button></Router>)

    expect(container.querySelector('a')).toBeInTheDocument()
})