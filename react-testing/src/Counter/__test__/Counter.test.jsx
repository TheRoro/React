import React from 'react'
import { Counter } from '../Counter'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("header renders with correct text", () => {
    const component = render(<Counter />)
    const headerElement = component.getByTestId("header")

    expect(headerElement.textContent).toBe("My Counter")
})

test("counter intially start with text of 0", () => {
    const { getByTestId } = render(
        <Counter />)
    const counterElement = getByTestId("counter")
    expect(counterElement.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    const { getByTestId } = render(
        <Counter />)
    const inputElement = getByTestId("input")
    expect(inputElement.value).toBe("1")
})

test("add button renders with +", () => {
    const { getByTestId } = render(
        <Counter />)
    const addBtn = getByTestId("add-btn")
    expect(addBtn.textContent).toBe("+")
})

test("subtract button renders with -", () => {
    const { getByTestId } = render(
        <Counter />)
    const subtractBtn = getByTestId("subtract-btn")
    expect(subtractBtn.textContent).toBe("-")
})