import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the search page by default', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const titleElement = screen.getByRole('heading');
  expect(titleElement).toHaveTextContent('Search');
});

test('renders the favourites page when navigated to', () => {
  render(<MemoryRouter initialEntries={['/favourites']}><App /></MemoryRouter>);
  const titleElement = screen.getByRole('heading');
  expect(titleElement).toHaveTextContent('Favourites');
});

test('renders a not-found page when navigated to a wrong url', () => {
  render(<MemoryRouter initialEntries={['/wrong']}><App /></MemoryRouter>);
  const titleElement = screen.getByRole('heading');
  expect(titleElement).toHaveTextContent('Page not found');
});
