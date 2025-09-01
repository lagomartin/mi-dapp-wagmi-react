import { useState } from 'react';
import { useAccount } from 'wagmi';
import { TokenInfo } from './TokenInfo';

export function TokenFinder() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [lookupAddress, setLookupAddress] = useState('');
  const { isConnected } = useAccount();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^0x[a-fA-F0-9]{40}$/.test(tokenAddress)) {
      setLookupAddress(tokenAddress);
    } else {
      alert('Dirección de token inválida');
    }
  };

  if (!isConnected) {
    return <p>Por favor, conecta tu wallet para buscar un token.</p>;
  }

  return (
    <div className="token-finder">
      <h2>Buscador de Tokens ERC-20</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          placeholder="Dirección del contrato del token (0x...)"
        />
        <button type="submit">Buscar Token</button>
      </form>
      {lookupAddress && <TokenInfo tokenAddress={lookupAddress} />}
    </div>
  );
}