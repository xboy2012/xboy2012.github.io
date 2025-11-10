import { useCallback } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  BuyMeACoffeeProvider,
  useBuyMeACoffeeContext,
} from './BuyMeACoffeeContext';

describe('BuyMeACoffeeContext', () => {
  const App = () => {
    const { dialogVisible, setDialogVisible } = useBuyMeACoffeeContext();
    const handleSwitch = useCallback(() => {
      setDialogVisible((value) => !value);
    }, [setDialogVisible]);
    return (
      <>
        {dialogVisible && <div>Dialog</div>}
        <button onClick={handleSwitch}>Switch</button>
      </>
    );
  };
  it('renders correctly', () => {
    render(
      <BuyMeACoffeeProvider>
        <App />
      </BuyMeACoffeeProvider>,
    );

    expect(screen.queryByText('Dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Dialog')).not.toBeInTheDocument();
  });
});
