import {
  createContext,
  useContext,
  useState,
  useMemo,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { noop } from '../../src/utils/noop';

export interface BuyMeACoffeeContext {
  dialogVisible: boolean;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: BuyMeACoffeeContext = {
  dialogVisible: false,
  setDialogVisible: noop,
};

const BuyMeACoffeeContext = createContext(defaultContextValue);

export const BuyMeACoffeeProvider = ({ children }: { children: ReactNode }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const contextValue: BuyMeACoffeeContext = useMemo(
    () => ({
      dialogVisible,
      setDialogVisible,
    }),
    [dialogVisible, setDialogVisible],
  );

  return (
    <BuyMeACoffeeContext.Provider value={contextValue}>
      {children}
    </BuyMeACoffeeContext.Provider>
  );
};

export const useBuyMeACoffeeContext = () => {
  return useContext(BuyMeACoffeeContext);
};
