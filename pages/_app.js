import "@/styles/globals.css";

import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { DemoContext, DemoContextProvider } from "@/Context/demoContext";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* wrap with context provider */}
        <DemoContextProvider>
          <Component {...pageProps} />
        </DemoContextProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
