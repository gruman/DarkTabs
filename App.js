import Main from './Main';
import { ContextProvider } from './state/context';
export default function App() {
  return (
    <ContextProvider>
    <Main />
    </ContextProvider>
  );
}
