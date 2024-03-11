import { useState, FormEvent } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { TransferIcon } from "./TransferIcon";

interface ConvertFormProps {
  onSubmit: ({ value, tax, type }: any) => void;
}

export function ConvertForm({ onSubmit }: ConvertFormProps) {
  const [value, setValue] = useState<string>("");
  const [tax, setTax] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ value, tax, type });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex mt-28 gap-x-6">
        <div className="flex flex-col gap-2.5">
          <label className="font-bold text-lg">Dólar</label>
          <input
            type="text"
            placeholder="$ 1,00"
            className="h-[56px] w-[168px] border-2 p-4 border-gray-light border-opacity-20 rounded-md"
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="font-bold text-lg">Taxa do estado</label>
          <input
            type="text"
            placeholder="0 %"
            radioGroup="purchasetype"
            onChange={(e) => setTax(e.target.value)}
            className="h-[56px] w-[168px] border-2 p-4 border-gray-light border-opacity-20 rounded-md"
          ></input>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <label className="font-bold">Tipo de compra</label>

          <div className="flex flex-row gap-x-4 py-4">
            <div style={{ display: "flex", columnGap: "8px" }}>
              <input
                id="money"
                type="radio"
                value="money"
                name="purchase_type"
                onChange={(e) => setType(e.target.value)}
              ></input>
              <label htmlFor="money" style={{ fontSize: "16px" }}>
                Dinheiro
              </label>
            </div>
            <div style={{ display: "flex", columnGap: "8px" }}>
              <input
                id="card"
                type="radio"
                value="card"
                onChange={(e) => setType(e.target.value)}
                name="purchase_type"
              ></input>
              <label htmlFor="card" style={{ fontSize: "16px" }}>
                Cartão
              </label>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8">
        <PrimaryButton
          type="submit"
          className="flex gap-x-4 border-brand-2 border-[1px] bg-brand-1 disabled:bg-gray-light text-white p-4 rounded-md text-lg font-semibold"
        >
          <TransferIcon />
          <span>Converter</span>
        </PrimaryButton>
      </div>
    </form>
  );
}
