import { render } from '@testing-library/react';
import AvatarFractal from './AvatarFractal.tsx';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders the App component', () => {
    render(<AvatarFractal />);
    expect(true).toBe(true);
  });
});
