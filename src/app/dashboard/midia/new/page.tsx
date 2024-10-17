"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";

export default function CreateMidiaPost() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    content: "",
    date: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      formData.append("subtitle", form.subtitle);
      formData.append("content", form.content);
      formData.append("date", form.date);
      formData.append("file", selectedFile);

      const res = await fetch("/api/midia", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Erro ao criar mídia.");
      }

      alert("Mídia criada com sucesso!");
      setForm({ title: "", subtitle: "", content: "", date: "" });
      setSelectedFile(null);
    } catch (error) {
      console.error("Erro ao criar mídia:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Criar Nova Mídia</h1>
      <form onSubmit={handleSubmit} className="w-fit flex flex-col gap-4 p-4 m-5 bg-[#111827] text-white rounded-xl">
        <Input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="subtitle"
          placeholder="Subtítulo"
          value={form.subtitle}
          onChange={handleChange}
          required
        />
        <Textarea
          name="content"
          placeholder="Conteúdo"
          value={form.content}
          onChange={handleChange}
          rows={5}
          required
        />
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <Input type="file" onChange={handleFileChange} required />
        <Button variant={'secondary'} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Criar Mídia"}
        </Button>
      </form>
    </div>
  );
}
