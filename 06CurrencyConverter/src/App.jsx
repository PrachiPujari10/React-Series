import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("inr");   // ✅ Default INR
  const [to, setTo] = useState("usd");      // ✅ Default USD
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/36273389/pexels-photo-36273389/free-photo-of-chicago-elevated-train-in-downtown-curve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="w-full max-w-md mx-auto border border-white/30 rounded-2xl p-6 backdrop-blur-md bg-white/20 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />

          {/* Swap */}
          <div className="relative w-full h-0.5 my-6">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Swap
            </button>
          </div>

          {/* To */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl mt-6 shadow-md hover:bg-blue-700 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;