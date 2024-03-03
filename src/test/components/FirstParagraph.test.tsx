import React from "react";
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import FirstParagraph from "../../components/FirstParagraph"

test("Render paragraph component", () => {
    const tree = render(<FirstParagraph />)
    expect(tree).toMatchSnapshot()
})