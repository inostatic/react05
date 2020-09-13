import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import {Button} from './Button'


let container = null;
beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
});

it("Button default", () => {
    act(() => {
        render(<Button/>, container)
    });

    expect(container.textContent).toBe("Добавить");
})

it("should return the text", () => {
    act(() => {
        render(<Button text={'Найти'} />, container)
    });

    expect(container.textContent).toBe("Найти")
})
