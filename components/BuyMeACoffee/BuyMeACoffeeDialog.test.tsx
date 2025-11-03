import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BuyMeACoffeeDialog } from './BuyMeACoffeeDialog';
import {
  BuyMeACoffeeProvider,
  useBuyMeACoffeeContext,
} from './BuyMeACoffeeContext';

describe('BuyMeACoffeeDialog', () => {
  test('renders correctly', () => {
    const App = () => {
      const { setDialogVisible } = useBuyMeACoffeeContext();
      const handleOpen = useCallback(() => {
        setDialogVisible(true);
      }, [setDialogVisible]);
      return (
        <>
          {createPortal(
            <button onClick={handleOpen}>Open</button>,
            document.body,
          )}
          <BuyMeACoffeeDialog />
        </>
      );
    };
    const { container } = render(
      <BuyMeACoffeeProvider>
        <App />
      </BuyMeACoffeeProvider>,
    );
    expect(container).toBeEmptyDOMElement();

    fireEvent.click(screen.getByText('Open'));
    expect(container).not.toBeEmptyDOMElement();

    fireEvent.click(screen.getByTitle('Close'));
    expect(container).toBeEmptyDOMElement();
  });
});
