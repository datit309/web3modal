const ConnectToCoin98Wallet = async () => {
  let provider = null;
  // @ts-ignore
  if (typeof window.coin98 !== 'undefined') {
    // @ts-ignore
    provider = window.coin98.provider;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No Coin98 Wallet found");
  }
  return provider;
};

export default ConnectToCoin98Wallet;
