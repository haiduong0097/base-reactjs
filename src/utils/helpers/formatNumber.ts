import BigNumber from "bignumber.js";

export const formatPrecisionAmount = (amount: string, precision = 18) => {
  const rawValue = new BigNumber(`${amount}`).toFixed(precision);
  return amount && parseFloat(amount) !== Infinity
    ? new BigNumber(rawValue).toFormat()
    : "0";
};
