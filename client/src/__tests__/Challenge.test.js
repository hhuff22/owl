import React from 'react';
import Challenge from "../components/Challenge";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import * as axios from "axios";
import '@testing-library/jest-dom/extend-expect';

jest.mock("axios");

const dummyGetResponseData = [{
    id: 0,
    name: "dummy item name",
    cost: 5
}];
const dummyPostResponseData = 4;

describe("Challenge", () => {
    test("should render correctly", () => {
        const { asFragment } = render(<Challenge />);
        expect(asFragment()).toMatchSnapshot();
    })

    test("should load low stock data", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({data:dummyGetResponseData});
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

    test("should load reorder request data", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve({data:dummyGetResponseData});
        })
        axios.post.mockImplementation(() => {
            return Promise.resolve({data:dummyPostResponseData});
        })
        const {getByTestId} = render(<Challenge />);
        const lowStockButton = screen.getByTestId("low-stock-button");
        fireEvent.click(lowStockButton, {target: {}});
        const reorderButton = screen.getByTestId("reorder-button");
        fireEvent.click(reorderButton, {target: {}});
        await waitFor(() => {
            const totalCostLabel = getByTestId("total-cost");
            expect(totalCostLabel).toHaveTextContent("Total Cost: $4");
        })
        expect(reorderButton).toBeTruthy();
    })
})