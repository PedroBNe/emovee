"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface About {
  id: string;
  title: string;
  imageUrl: string;
}

export default function AboutPage() {
  const [about, setAbout] = useState<About | null>(null);
  const [form, setForm] = useState({ title: "" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os dados de About
  const fetchAbout = async () => {
    try {
      const res = await fetch("/api/about");

      if (res.ok) {
        const data = await res.json();
        setAbout(data);
        setForm({ title: data.title });
      } else {
        console.log("Nenhum registro de About encontrado.");
      }
    } catch (err) {
      console.error("Erro ao buscar About:", err);
      setError("Erro ao carregar About.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

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

      const res = await fetch("/api/about", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erro ao salvar About.");

      alert("About salvo com sucesso!");
      fetchAbout(); // Atualiza os dados após salvar
    } catch (error) {
      console.error("Erro ao salvar About:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Editar &quot;Sobre&quot;</h1>
      <form onSubmit={handleSubmit} className="w-fit flex flex-col items-center gap-4 bg-white rounded-xl p-4">
        <Input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input type="file" onChange={handleFileChange} required />
        <Button type="submit" disabled={loading} className="w-fit p-4 px-5">
          {loading ? "Enviando..." : "Salvar"}
        </Button>
      </form>
      {about?.imageUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Imagem Atual:</h2>
          <Image src={about.imageUrl} alt="Imagem do About" width={300} height={300} />
        </div>
      )}
    </div>
  );
}
