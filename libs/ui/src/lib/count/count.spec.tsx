import { render } from '@testing-library/react';

import Count from './count';

describe('Count', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Count />);
    expect(baseElement).toBeTruthy();
  });
});
