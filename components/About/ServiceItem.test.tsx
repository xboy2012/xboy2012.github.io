import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ServiceItem } from './ServiceItem';

describe('<ServiceItem /> should render as expected', () => {
  test('should render the component', () => {
    const name = Math.random().toString(36).substring(2);
    const icon = Math.random().toString(36).substring(2);
    const desc = Math.random().toString(36).substring(2);

    render(<ServiceItem name={name} icon={icon} desc={desc} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(desc)).toBeInTheDocument();
  });
});
