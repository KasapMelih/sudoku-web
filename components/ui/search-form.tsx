"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search for games or players
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-sm mx-auto my-2"
    >
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search games or players..."
        className="w-full pl-8"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
