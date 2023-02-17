import React from 'react';
import App from "../components/App";
import { render } from '@testing-library/react';

test("Should render correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
})