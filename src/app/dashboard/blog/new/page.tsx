"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Category {
  id: string;
  name: string;
}

export default function CreateBlogPost() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    content: "",
    date: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Função para buscar as categorias da API
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Erro ao buscar categorias:", err);
    }
  };

  useEffect(() => {
    fetchCategories(); // Busca as categorias ao montar o componente
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      formData.append("categoryId", form.categoryId); // Categoria selecionada
      formData.append("file", selectedFile);

      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erro ao criar postagem.");

      alert("Postagem criada com sucesso!");
      setForm({ title: "", subtitle: "", content: "", date: "", categoryId: "" });
      setSelectedFile(null);
    } catch (error) {
      console.error("Erro ao criar postagem:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8">Criar Nova Postagem</h1>
      <form onSubmit={handleSubmit} className="w-fit flex flex-col gap-4 bg-[#111827] text-white rounded-lg p-4 m-5">
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
        <select
          className="border-[1px] p-2 rounded-lg text-black"
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma Categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <Input type="file" onChange={handleFileChange} required />
        <Button variant={"secondary"} type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Criar Postagem"}
        </Button>
      </form>
    </div>
  );
}
