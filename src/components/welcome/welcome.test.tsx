import { render, screen } from '@testing-library/react';
import { Welcome } from '.';

describe('Welcome test', () => {
  test('Show welcome message', () => {
    render(<Welcome />);

    expect(
      screen.getByText('Template - React with Vite, TypeScript and Jest')
    ).toBeInTheDocument();
  });
});
