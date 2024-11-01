import { useState } from 'react'
import './App.css'
import {InputBox} from './components/index.js';
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmnt, setConvertedAmnt] = useState(0)

  const useCurrency = useCurrencyInfo(from)
  const options = Object.keys(useCurrency)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmnt(amount)
    setAmount(convertedAmnt)
  }

  const convert = () => {
    setConvertedAmnt(amount * useCurrency[to])
  }

  return (
    <div className='grid sm:grid-cols-2'>
      <div
        className="sm:col-span-1 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >    </div>

        <div className="sm:col-span-1 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-cyan-950">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencychange={(currency) => setAmount(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmnt}
                            currencyOptions={options}
                            onCurrencychange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            useCurrencyInfo
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
