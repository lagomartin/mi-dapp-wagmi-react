import { WalletConnector } from './components/WalletConnector';
import { TokenFinder } from './components/TokenFinder';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Mi DApp con Wagmi</h1>
        <WalletConnector />
      </header>
      <main>
        <TokenFinder />
      </main>
    </div>
  );
}

export default App;