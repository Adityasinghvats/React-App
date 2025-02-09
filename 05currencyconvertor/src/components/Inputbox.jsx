import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    className = "",
    onCurrencychange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false
}) {
    // this hook generates a unique id to be used
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((option) => (
                            <option key={option} value={option}>  
                            {/*key is necessary for performance while using loop in react */}
                            {option}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
