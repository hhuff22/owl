import React from 'react';
import ItemRow from "../components/ItemRow";
import { render, screen, fireEvent } from '@testing-library/react';

const dummyItem = {
    id: 9,
    name: "dummy item name",
    stock: 5,
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

    test("should handle change correctly when low stock name = item name", () => {
        const expectedSetLowStockParam = {data: [{cost: 2, name: "dummy item name"}], loading: false};
        const props = {
            item: dummyItem,
            lowStock: dummyLowStock,
            setLowStock: mockSetLowStock
        };

        render(<ItemRow {...props} />);
        const input = screen.getByTestId("item-row-9");
        fireEvent.change(input, {target: {value: 2}});

        expect(input).toBeTruthy();
        expect(mockSetLowStock).toHaveBeenCalledTimes(1);
        expect(mockSetLowStock).toHaveBeenCalledWith(expectedSetLowStockParam);
        mockSetLowStock.mockReset();
    });

    test("should handle change correctly when low stock name != item name", () => {
        const expectedSetLowStockParam = {data: [{cost: 5, name: "dummy item name 2"}], loading: false}
        const props = {
            item: dummyItem,
            lowStock: dummyLowStockTwo,
            setLowStock: mockSetLowStock
        };

        render(<ItemRow {...props} />);
        const input = screen.getByTestId("item-row-9");
        fireEvent.change(input, {target: {value: 2}});

        expect(input).toBeTruthy();
        expect(mockSetLowStock).toHaveBeenCalledTimes(1);
        expect(mockSetLowStock).toHaveBeenCalledWith(expectedSetLowStockParam);
    });

    test("should handle change correctly when restock amount entered is < 0", () => {
        const expectedSetLowStockParam = {data: [{cost: 0, name: "dummy item name"}], loading: false}
        const props = {
            item: dummyItem,
            lowStock: dummyLowStock,
            setLowStock: mockSetLowStock
        };

        render(<ItemRow {...props} />);
        const input = screen.getByTestId("item-row-9");
        fireEvent.change(input, {target: {value: -3}});

        expect(input).toBeTruthy();
        expect(mockSetLowStock).toHaveBeenCalledTimes(1);
        expect(mockSetLowStock).toHaveBeenCalledWith(expectedSetLowStockParam);
    });
})