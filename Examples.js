import { getIngredients } from "./recipes.js";

test("Get only the ingredients list for Pesto", () => {
  //arrange
  const pestoRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups'
  };
  const expectedIngredients = ["Basil", "Pine Nuts", "Garlic", "Olive Oil", "Grated Parmesan"];

  //act
  const actualIngredients = getIngredients(pestoRecipe);

  //assertions
  expect(actualIngredients).toBeDefined();
  expect(actualIngredients).toEqual(expectedIngredients);
  expect(actualIngredients.length).toBe(5);
  expect(actualIngredients[0] === "Basil").toBeTruthy();
  expect(actualIngredients).not.toContain("Ice Cream");
});

test("correctly fetches a list of countries", (done) => {
    //arrange
    const inputLanguageCode = "es"
    const expectedValue ="Argentina"

    //act
    countryListLookup(inputLanguageCode, (result) =>{
      //assertions
      try {
        expect(result).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test("correctly fetches a list of countries", async () => {
    //arrange
    const inputLanguageCode = "es";
    const expectedValue ="Argentina";
    //act
    const actualValue = await countryListLookup(inputLanguageCode);
    //assertions
    expect(actualValue).toContain(expectedValue);
  });


import httpRequest from '../utils/http-request';
jest.mock('../utils/http-request');

test("correctly fetches a list of countries",  async () => {
    //arrange
    const inputLanguageCode = "jest";
    const expectedValue ="CodeLand";
    const resolvedValue = {
      status: 'MOCK',
      data: [
        { name: "CodeLand", capital: "Codecademy" },
      ]
    };
    // TODO: Mock the first resolved value of httpRequest
    httpRequest.mockResolvedValueOnce(resolvedValue);
    //act
    const actualValue = await countryListLookup(inputLanguageCode);
    //assertions
    expect(actualValue).toContain(expectedValue);
  });

import React from 'react';
import { Thought } from '../Thought.js';
import {render, screen } from '@testing-library/react';

// import render and screen here


test('Display the Thought component' , () => {
  // Pass to Thought component as thought prop
  const thought = {text: "learn react testing library"}
  // Add your testing logic here
  render(<Thought thought={thought} removeThought={() => {}} />);
  screen.debug();
});