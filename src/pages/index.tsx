import { FormEvent } from "react";
import StoneLogo from "../../components/StoneLogo";
import { TransferIcon } from "../../components/TransferIcon";

export default function Page() {
  const date = "14 de janeiro 2024";
  const time = "21:00 UTC";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="m-14">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-12">
          <StoneLogo />
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-6 text-gray-darker text-lg">
              <span>{date}</span>
              <span>|</span>
              <span>{time}</span>
            </div>
            <div className="text-gray-light text-sm">
              Dados de câmbio disponibilizados pela Morningstar.
            </div>
          </div>
        </div>

        <div className="flex mt-28 gap-x-6">
          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-lg">Dólar</label>
            <input
              type="text"
              placeholder="$ 1,00"
              className="h-[56px] w-[168px] border-2 p-4 border-gray-light border-opacity-20 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-bold text-lg">Taxa do estado</label>
            <input
              type="text"
              placeholder="0 %"
              radioGroup="purchasetype"
              className="h-[56px] w-[168px] border-2 p-4 border-gray-light border-opacity-20 rounded-md"
            ></input>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <label className="font-bold">Tipo de compra</label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "16px",
              }}
            >
              <div style={{ display: "flex", columnGap: "8px" }}>
                <input
                  id="money"
                  type="radio"
                  value="money"
                  name="purchase_type"
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
                  name="purchase_type"
                ></input>
                <label htmlFor="card" style={{ fontSize: "16px" }}>
                  Cartão
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="flex gap-x-4 bg-gray-light text-white p-4 rounded-md text-lg font-semibold"
          >
            <TransferIcon />
            <span>Converter</span>
          </button>
        </div>
      </form>
    </div>
  );
}
