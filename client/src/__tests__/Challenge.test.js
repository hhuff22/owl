import React from 'react';
import Challenge from "../components/Challenge";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import * as axios from "axios";

jest.mock("axios");

const dummyResponseData = [{
    id: 0,
    name: "dummy item name",
    cost: 5
}];

describe("Challenge", () => {
    test("Should render correctly", () => {
        const { asFragment } = render(<Challenge />);
        expect(asFragment()).toMatchSnapshot();
    })

    test("should load data", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({data:dummyResponseData});
        })
        const {getByTestId} = render(<Challenge />);
        const lowStockButton = screen.getByTestId("low-stock-button");
        fireEvent.click(lowStockButton, {target: {}});
        await waitFor(() => {
            const rows = getByTestId("item-row-0");
            expect(rows).toBeTruthy();
        })
        expect(lowStockButton).toBeTruthy();
    })
})