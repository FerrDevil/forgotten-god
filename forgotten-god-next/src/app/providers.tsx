'use client';
import { Provider } from "react-redux"
import store from '@/store/store'
import ErrorMessageProvider from "@/components/ToastMessage/ToastMessageProvider";

 
export function Providers({ children }: {children : React.ReactNode} ) {
  return (
    <Provider store={store}>
      <ErrorMessageProvider>
        {children}
      </ErrorMessageProvider>
    </Provider>
  );
}