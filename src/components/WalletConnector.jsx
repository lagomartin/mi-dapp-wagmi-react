import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';

export function WalletConnector() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  if (isConnected) {
    return (
      <div className="account-info">
        <p>Conectado a: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
        <p>Balance: {balance?.formatted} {balance?.symbol}</p>
        <button onClick={() => disconnect()}>Desconectar</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button key={connector.id} onClick={() => connect({ connector })}>
          Conectar {connector.name}
        </button>
      ))}
    </div>
  );
}