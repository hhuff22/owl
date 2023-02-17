import React from 'react';
import Instructions from "../components/Instructions";
import { render } from '@testing-library/react';

test("should render correctly", () => {
    const { asFragment } = render(<Instructions />);
    expect(asFragment()).toMatchSnapshot();
})