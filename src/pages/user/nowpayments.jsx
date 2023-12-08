import React from "react";
import NowPaymentsApi from "@nowpaymentsio/nowpayments-api-js";

const npApi = new NowPaymentsApi({ apiKey: "A7M40XV-CG1448Z-KVVED3G-NW3V0TK" }); // your api key

const NowPayment = () => {
  const [currenciesArr, setCurrenciesArr] = React.useState([]);
  React.useEffect(() => {
    async function fetchCurrencies() {
      const { currencies } = await npApi.getCurrencies();
      setCurrenciesArr(currencies);
    }
    fetchCurrencies();
  }, []);

  return (
    <div>
      <h2>Available currencies</h2>
      <br />
      {currenciesArr.map((currency) => (
        <p>{currency}</p>
      ))}
    </div>
  );
  
};

export default NowPayment;
