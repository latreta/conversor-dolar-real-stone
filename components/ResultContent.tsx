import { LeftArrowIcon } from "./LeftArrowIcon";
import { SecondaryButton } from "./SecondaryButton";

const PaymentMethod = {
  money: "dinheiro",
  card: "cartão de crédito",
};

interface ResultContentProps {
  tax: number;
  dolar: number;
  convertedValue: number;
  paymentMethod: string;
  onBackButton: () => void;
}

const formatValue = (value: number) => {
  return value?.toFixed(2);
};

export function ResultContent({
  tax = 0,
  dolar = 0,
  convertedValue = 0,
  paymentMethod,
  onBackButton,
}: ResultContentProps) {
  return (
    <div className="flex flex-col mt-28 gap-x-6">
      <section className="flex flex-row">
        <SecondaryButton
          className="w-6"
          type="button"
          onClick={() => onBackButton()}
        >
          <LeftArrowIcon />
          <span>Voltar</span>
        </SecondaryButton>
      </section>
      <section className="mt-6">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl text-gray-darker">O resultado do cálculo é</h3>
          <h1 className="text-6xl text-brand-1 font-semibold">
            R$ {convertedValue?.toFixed(2)}
          </h1>
        </div>
        <div className="flex flex-col text-gray-light mt-8 gap-y-4">
          <span>
            Compra no {PaymentMethod[paymentMethod]} e taxa de {tax}%
          </span>
          <span>Cotação do dólar: $1,00 = U$ {formatValue(dolar)}</span>
        </div>
      </section>
    </div>
  );
}
