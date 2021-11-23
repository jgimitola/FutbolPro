import { render } from '@testing-library/react';

import CountryContext from './country-context';

describe('CountryContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountryContext />);
    expect(baseElement).toBeTruthy();
  });
});
