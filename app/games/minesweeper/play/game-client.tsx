"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Flag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MinesweeperBoard } from "@/components/ui/minesweeper-board";

const MINES = 40; // toplam mayın

export default function MinesweeperGameClient() {
  /* -------------------- state'ler -------------------- */
  const [time, setTime] = useState(0);
  const [flags, setFlags] = useState(0);
  const [status, setStatus] = useState<"init" | "playing" | "lost" | "won">(
    "init"
  );

  /* -------------------- kronometre ------------------- */
  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (status === "playing")
      id = setInterval(() => setTime((t) => t + 1), 1_000);
    if (status === "lost" || status === "won") id && clearInterval(id);
    return () => {
      if (id) clearInterval(id);
    };
  }, [status]);

  /* reset handler */
  const handleReset = () => {
    setTime(0);
    setFlags(0);
  };

  /* ---------- UI ---------- */
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Games</span>
          </Link>

          <div className="ml-auto flex items-center gap-4">
            {/* Zaman göstergesi */}
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {`${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
                  time % 60
                ).padStart(2, "0")}`}
              </span>
            </div>

            {/* Dinamik bayrak sayacı */}
            <div className="flex items-center gap-1">
              <Flag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {flags}/{MINES}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Oyun tahtası */}
          <MinesweeperBoard
            onStatusChange={setStatus}
            onFlagChange={setFlags}
            onReset={handleReset}
          />

          {/* Yan panel */}
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              {/* istediğin açıklamalar */}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
