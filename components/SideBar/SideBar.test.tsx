import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '.';

describe('should render as expected', () => {
  it('should render the component', () => {
    const result = render(<SideBar />);
    expect(result.container.innerHTML).toBeTruthy();

    const moreButton = screen.getByText('Show Contacts');
    fireEvent.click(moreButton);
  });
});
