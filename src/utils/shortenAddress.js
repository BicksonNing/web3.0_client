export const shortenAddress = (address) =>
  `${address.substring(0, 5)}...${address.slice(-5)}`;
