'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Cliente {
  name: string;
  status: string;
  data: string;
  email: string;
}

interface Filtro {
  value: string;
  label: string;
}

const clientesData: Cliente[] = [
  { name: 'Joao Vitor', status: 'Ativo', data: '12/11/2030', email: 'joao@gmail.com' },
  { name: 'Ana Clara', status: 'Inativo', data: '10/01/2022', email: 'ana@gmail.com' },
  { name: 'Pedro Alves', status: 'Ativo', data: '15/08/2024', email: 'pedro@gmail.com' },
];

const filtros: Filtro[] = [
  { value: 'recente', label: 'Mais recente' },
  { value: 'tardio', label: 'Mais antigo' },
  { value: 'alfabeto', label: 'Nomes de A-Z' },
  { value: 'oposto', label: 'Nomes de Z-A' },
];

export default function Client() {
  const [clientes, setClientes] = useState<Cliente[]>(clientesData);
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('');

  const aplicarFiltro = () => {
    let clientesFiltrados = [...clientesData];

    switch (filtroSelecionado) {
      case 'recente':
        clientesFiltrados.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        break;
      case 'tardio':
        clientesFiltrados.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
        break;
      case 'alfabeto':
        clientesFiltrados.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'oposto':
        clientesFiltrados.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setClientes(clientesFiltrados);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 relative z-30">
      <h2 className="font-semibold text-3xl">Clientes</h2>
      <div className="w-full h-auto flex flex-col gap-5 justify-center items-center bg-white">
        <div className="w-full border-b-1 p-4 flex justify-between items-center">
          <div className="w-[70%] text-center items-center flex gap-5">
            <p>Filtrar</p>
            <Select onValueChange={setFiltroSelecionado}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um filtro" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filtros.map((fil, index) => (
                    <SelectItem key={index} value={fil.value}>
                      {fil.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button variant="blue" onClick={aplicarFiltro}>
              Aplicar
            </Button>
          </div>
        </div>
        <div className="w-[1200px] p-5 mb-4 border-1">
          <Table className="max-w-[1200px]">
            <TableCaption>Lista de Clientes Cadastrados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.map((info, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{info.name}</TableCell>
                  <TableCell>{info.status}</TableCell>
                  <TableCell>{info.data}</TableCell>
                  <TableCell className="text-right">{info.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
