export default function Home() {
  return (
    <main style={{fontFamily: "system-ui", maxWidth: 900, margin: "60px auto", padding: 24}}>
      <h1>PathReplay</h1>
      <p>Historical payment-path simulator</p>
      <p>A research tool for replaying historical Stellar payment routes against recorded market data to compare path choices, slippage, and settlement outcomes.</p>
      <p>Network: Testnet development configuration.</p>
    </main>
  );
}
