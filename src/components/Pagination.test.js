import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import {Pagination} from './Pagination'


let container = null;
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove();
    container = null;
});

it("should return a string from 1 to 10", () => {
    const fn = () => true
    act(() => {
        render(<Pagination currentPage={1} countPages={10} changeCurrentPage={fn}/>, container)
    })
    expect(container.textContent).toBe("«12345678910»")
})