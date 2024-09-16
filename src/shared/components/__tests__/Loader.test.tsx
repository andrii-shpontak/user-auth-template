import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Loader from '../Loader';

describe('Loader', () => {
  it('renders correctly', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('has the correct spinner style', () => {
    render(<Loader />);
    const spinnerElement = screen.getByTestId('spinner');
    const spinnerStyle = window.getComputedStyle(spinnerElement);
    expect(spinnerStyle.borderTopWidth).toBe('8px');
    expect(spinnerStyle.width).toBe('10rem');
    expect(spinnerStyle.height).toBe('10rem');
  });
});
