import { useAccount, useContractReads } from 'wagmi';
import { erc20Abi } from 'viem';
import { formatUnits } from 'viem';

export function TokenInfo({ tokenAddress }) {
  const { address } = useAccount();

  const { data, isError, isLoading, refetch } = useContractReads({
    contracts: [
      { address: tokenAddress, abi: erc20Abi, functionName: 'name' },
      { address: tokenAddress, abi: erc20Abi, functionName: 'symbol' },
      { address: tokenAddress, abi: erc20Abi, functionName: 'decimals' },
      { address: tokenAddress, abi: erc20Abi, functionName: 'balanceOf', args: [address] },
    ],
    enabled: !!address,
  });

  if (isLoading) return <div className="loading">Cargando información del token...</div>;
  if (isError) return <div className="error">Error al cargar datos. Verifica que la dirección del token sea correcta y estés en la red Sepolia.</div>;

  const name = data?.[0]?.result;
  const symbol = data?.[1]?.result;
  const decimals = data?.[2]?.result;
  const balance = data?.[3]?.result;

  const formattedBalance = balance !== undefined && decimals !== undefined ? formatUnits(balance, decimals) : '0';

  return (
    <div className="token-info-card">
      <h3>{name} ({symbol})</h3>
      <p>Tu Balance: <strong>{formattedBalance} {symbol}</strong></p>
      <button onClick={() => refetch()} className="refresh-button">Actualizar</button>
    </div>
  );
}