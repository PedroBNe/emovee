"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, ChangeEvent, FormEvent } from "react";

export default function CreateVisit() {
  const [form, setForm] = useState({
    title: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecione uma imagem.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("file", selectedFile);

      const res = await fetch("/api/visit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Erro ao criar visita.");
      }

      alert("Visita criada com sucesso!");
      setForm({ title: "" });
      setSelectedFile(null);
    } catch (error) {
      console.error("Erro ao criar visita:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Criar Nova Visita</h1>
      <form onSubmit={handleSubmit} className="w-fit flex flex-col gap-4 m-5 p-4 bg-[#111827] text-white rounded-xl">
        <h2 className="font-semibold">New visit</h2>
        <Input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input type="file" onChange={handleFileChange} required />
        <Button variant={'secondary'} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Criar Visita"}
        </Button>
      </form>
    </div>
  );
}
