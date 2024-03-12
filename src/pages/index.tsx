"use client";

import { useEffect, useState } from "react";
import StoneLogo from "../../components/StoneLogo";
import { GetCotacao } from "../services/cotacao.service";
import { CotacaoResponse } from "../types/CotacaoResponse";
import { ConvertForm } from "../../components/ConvertForm";
import { ResultContent } from "../../components/ResultContent";
import api from "../services/api/api";

interface ResponseData {
  valor?: number;
  tax?: number;
  type?: "card" | "money";
  dolar?: number;
  message?: string;
}

const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function FormatDate(date: Date): string {
  let formattedDate = `${date.getDay()} de ${
    months[date.getMonth()]
  } de ${date.getFullYear()}`;

  return formattedDate;
}

function FormatTime(date: Date): string {
  let formattedTime = `${date.getUTCHours()}:${date.getUTCMinutes()} UTC`;
  return formattedTime;
}

export default function Page() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [cotacao, setCotacao] = useState<CotacaoResponse>();
  const [state, setState] = useState<"CONVERT" | "RESULT">("CONVERT");
  const [convertedValue, setConvertedValue] = useState<number>(0);
  const [tax, setTax] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = ({ value, tax, type }: any) => {
    const valor = Number.parseInt(value);
    const percentageTax = Number.parseInt(tax) / 100;
    setTax(Number.parseFloat(tax));
    const IOF = 0.05;
    api
      .post("", {
        value: valor,
        tax: percentageTax,
        type: type,
        iof: IOF,
        cotacao: cotacao,
      })
      .then((response) => response.data)
      .then(({ valor, tax, type, dolar }: ResponseData) => {
        setConvertedValue(valor);
        setTax(tax);
        setState("RESULT");
      });
    // setPaymentMethod(type);
    //
  };

  useEffect(() => {
    GetCotacao()
      .then((response) => response.data)
      .then((data) => {
        setCotacao(data);
        let date = new Date(data.USDBRL.timestamp * 1000);
        let formattedDate = FormatDate(date);
        let formattedTime = FormatTime(date);
        setTime(formattedTime);
        setDate(formattedDate);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="m-14">
      <section className="flex items-center gap-x-12">
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
      </section>

      {state === "CONVERT" ? <ConvertForm onSubmit={handleSubmit} /> : null}
      {state === "RESULT" ? (
        <ResultContent
          onBackButton={() => setState("CONVERT")}
          tax={tax}
          dolar={cotacao.USDBRL?.bid * 1}
          convertedValue={convertedValue}
          paymentMethod={paymentMethod}
        />
      ) : null}
    </div>
  );
}
