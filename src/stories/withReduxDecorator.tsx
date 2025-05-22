import { Provider } from "react-redux";
import { store } from "@/src/store"; // ajusta según tu estructura

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withReduxDecorator = (Story: any) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
