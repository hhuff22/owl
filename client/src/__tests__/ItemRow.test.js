import React from 'react';
import ItemRow from "../components/ItemRow";
import { render, screen, fireEvent } from '@testing-library/react';

const dummyItem = {
    id: 9,
    name: "dummy item name",
    stock: 10,
    cost: 1,
    capacity: 7
};

const dummyLowStock = {
    data: [{
        name: "dummy item name",
        cost: 5
    }],
    loading: false
};

const dummyLowStockTwo = {
    data: [{
        name: "dummy item name 2",
        cost: 5
    }],
    loading: false
};

const mockSetLowStock = jest.fn();

describe("Item Row", () => {
    test("should render correctly", () => {
        const props = {
            item: dummyItem,
            lowStock: dummyLowStock,
            setLowStock: mockSetLowStock
        };
        const { asFragment } = render(<ItemRow {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("should handle change correctly", () => {
        const expectedSetLowStockParam = {data: [{cost: -3, name: "dummy item name"}], loading: false};
        const props = {
            item: dummyItem,
            lowStock: dummyLowStock,
            setLowStock: mockSetLowStock
        };
        const setup = () => {
            const utils = render(<ItemRow {...props} />);
            const input = screen.getByTestId("item-row-9");
            return {input, ...utils};
        };
        const { input } = setup();
        expect(input).toBeTruthy();
        fireEvent.change(input, {target: {value: 2}});
        expect(mockSetLowStock).toHaveBeenCalledTimes(1);
        expect(mockSetLowStock).toHaveBeenCalledWith(expectedSetLowStockParam);
        mockSetLowStock.mockReset();
    });

    test("should not call SetLowStock", () => {
        const props = {
            item: dummyItem,
            lowStock: dummyLowStockTwo,
            setLowStock: mockSetLowStock
        };
        const setup = () => {
            const utils = render(<ItemRow {...props} />);
            const input = screen.getByTestId("item-row-9");
            return {input, ...utils};
        };
        const { input } = setup();
        expect(input).toBeTruthy();
        fireEvent.change(input, {target: {value: 2}});
        expect(mockSetLowStock).not.toHaveBeenCalled();
    });
})