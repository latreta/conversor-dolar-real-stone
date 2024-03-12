import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  valor?: number;
  tax?: number;
  type?: "card" | "money";
  dolar?: number;
  message?: string;
};

function CalculateMoneyPurchase(
  purchaseValue: number,
  tax: number,
  iof: number,
  cotacaoDolar: number
) {
  const impostoCalculado = purchaseValue * tax;
  const iofCalculado = cotacaoDolar * iof;
  return (purchaseValue + impostoCalculado) * (cotacaoDolar * 1 + iofCalculado);
}

// [(Valor em dólar) + (imposto do Estado) + (IOF de transações internacionais)] x (valor do dólar)
function CalculateCreditCardPurchase(
  purchaseValue: number,
  tax: number,
  iof: number,
  dolarValue: number
) {
  const impostoCalculado = purchaseValue * tax;
  const iofCalculado = purchaseValue * iof;
  return (purchaseValue + impostoCalculado + iofCalculado) * dolarValue;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { value, tax, iof, type, cotacao } = req.body;

  if (type === "money") {
    const calculatedValue = CalculateMoneyPurchase(
      value,
      tax,
      iof,
      cotacao.USDBRL.bid
    );
    res.status(200).json({
      valor: calculatedValue,
      tax,
      type,
      dolar: cotacao.USDBRL.bid,
    });
  } else if (type === "card") {
    const calculatedValue = CalculateCreditCardPurchase(
      value,
      tax,
      iof,
      cotacao.USDBRL.bid
    );
    res.status(200).json({
      valor: calculatedValue,
      tax,
      type,
      dolar: cotacao.USDBRL.bid,
    });
  } else {
    res.status(400).json({ message: "Invalid type" });
  }
}
