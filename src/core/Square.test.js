import React from 'react';
import { render } from 'react-testing-library';
import Square from './Square';

describe('<Square />', () => {
    it('renders a "x" sign', () => {
        const { getByText } = render(<Square value="x" />);
        expect(getByText('x')).toBeInTheDocument();
    });
});
