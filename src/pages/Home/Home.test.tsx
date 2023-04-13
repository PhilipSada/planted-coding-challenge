import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import data from '../../data/combinedData.json';

beforeEach(() => render(<Home />));
describe("Home Page", () => {

  it("shows the 10 locations", async () => {
    const element = await screen.findByTestId('locations');
    expect(element.children).toHaveLength(10);
    data.forEach((elem) => expect(screen.getByText(elem.name)).toBeInTheDocument());

  })

  it("shows all the plantation projects", async () => {
    const project = await screen.findAllByTestId('project');
    expect(project).toHaveLength(30);
  })

  it("renders a search box that filters the locations", async () => {

    const searchInput: HTMLInputElement = screen.getByPlaceholderText('Filter locations');
    expect(searchInput).toBeInTheDocument();


    fireEvent.change(searchInput, { target: { value: 'Potsdam' } });

    expect(searchInput.value).toBe('Potsdam');

    const element = await screen.findByTestId('locations');
    expect(element.children).toHaveLength(1);

  })

})