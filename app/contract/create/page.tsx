"use client"

import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { format } from "date-fns";
import { ContractCreate } from "@/components/contract-create";
import { abi } from '../../../abi';
import { Api } from '@/javascript/api';

import ComponentWithSideBar from "@/components/component-with-side-bar";
import PageBase from "@/components/page-base";

export default function CreateContractPage() {
  const { data: session } = useSession();
  const { data: hash, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const [ contract, setContract ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  const generateLink = async ( values ) => {
    const startDate = values.startDate;
    const endDate = values.endDate;
    const amount = values.amount;
    const body = { description: values.description, start_date: startDate, end_date: endDate, amount };

    setLoading(true);

    const contractResponse = await (new Api()).post( { 
      url: 'contracts', currentUser: session?.user, body
    } );

    const durationInSeconds = (new Date(endDate) - new Date(startDate)) / 1000;
    writeContract({ address: process.env.NEXT_PUBLIC_RENT_INSURANCE_ADDRESS, abi, functionName: 'initializeInsurance',
      args: [BigInt(amount), BigInt(durationInSeconds)],
    });
    setContract(contractResponse);
    setLoading(false);
  }

  if (isPending || isLoading) return <p>Cargando ...</p>;

  if (isConfirming) return <p>Confirmando ...</p>;

  if (contract) return (
    <div>
      <h1>Link generado</h1>
      <p>Mandale este link a tu inquilino para que pueda abrirlo y firmarlo</p>
      <p>{`http://localhost:3000/contract/pending?contract_id=${String(contract.id)}`}</p>
    </div>
  );

  return (
    <PageBase>
      <ComponentWithSideBar>
      <ContractCreate onGenerateLinkButtonClick={generateLink} />
      </ComponentWithSideBar>
    </PageBase>
  )
}

