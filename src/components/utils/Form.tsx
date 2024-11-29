'use client';

import { Input } from '@nextui-org/input';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { Select, SelectItem } from '@nextui-org/react';
import { SegmentsForm } from './Segments-form';
import React, { useState } from 'react';

export default function FormInterface() {
  const [selected, setSelected] = useState('CPF');
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [tel, setTel] = useState('');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [segmento, setSegmento] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contato = {
      nome,
      email,
      telefone: tel,
      documento: value,
      tipoDocumento: selected,
      empresa,
      segmento,
    };

    try {
      const response = await fetch('/api/register-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contato),
      });

      if (response.ok) {
        setIsPopupVisible(true); // Exibe o popup
        setNome('');
        setEmail('');
        setTel('');
        setValue('');
        setEmpresa('');
        setSegmento('');
      } else {
        const error = await response.json();
        console.error('Erro:', error.error || 'Ocorreu um erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div className="w-[23em] lg:w-[30em] md:w-[38em] min-h-[50em] rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl relative mt-4 xl:mt-0">
      <form
        className="flex flex-col w-[75%] flex-wrap md:flex-nowrap gap-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          label="Nome Completo"
          variant="underlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <Input
          type="email"
          label="E-mail"
          variant="underlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          label="Telefone"
          variant="underlined"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />
        <Input
          type="text"
          label="Nome da Empresa"
          variant="underlined"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          required
        />
        <RadioGroup
          label="Seleciona uma opção"
          orientation="horizontal"
          defaultValue="CPF"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <Radio value="CPF">CPF</Radio>
          <Radio value="CNPJ">CNPJ</Radio>
        </RadioGroup>
        <Input
          type="text"
          variant="underlined"
          label={selected}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <Select
          label="Segmentos"
          placeholder="Selecione um segmento"
          value={segmento}
          onChange={(e) => setSegmento(e.target.value)}
        >
          {SegmentsForm.map((seg) => (
            <SelectItem key={seg.key} value={seg.label}>
              {seg.label}
            </SelectItem>
          ))}
        </Select>
        <button
          type="submit"
          className="botoes hover:opacity-80 transition w-fit font-bold rounded-full p-4 px-[40%] cursor-pointer"
        >
          Enviar
        </button>
      </form>

      {/* Popup de Sucesso */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Contato enviado com sucesso!</h2>
            <p className="mt-2 text-gray-600">Obrigado por entrar em contato. Retornaremos em breve.</p>
            <button
              onClick={() => setIsPopupVisible(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
