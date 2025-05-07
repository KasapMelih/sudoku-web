"use client";

import { useState, useCallback, useEffect } from "react";
import type React from "react";
import { Flag, Bomb } from "lucide-react";
import { cn } from "@/lib/utils";

interface Cell {
  mine: boolean;
  revealed: boolean;
  flagged: boolean;
  count: number;
}
type Board = Cell[][];
type Status = "init" | "playing" | "lost" | "won";

export interface MinesweeperBoardProps {
  onStatusChange?: (s: "init" | "playing" | "lost" | "won") => void;
  onFlagChange?: (count: number) => void;
  onReset?: () => void;
  /* varsa başka prop'lar */
}

const SIZE = 16;
const MINES = 40;
const DIRS = [-1, 0, 1];

const emptyBoard = (): Board =>
  Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => ({
      mine: false,
      revealed: false,
      flagged: false,
      count: 0,
    }))
  );

/* güvenli üretim (ilk tık) */
function generateBoard(firstR: number, firstC: number): Board {
  const board = emptyBoard();
  const forbidden = new Set<string>();
  DIRS.forEach((dr) =>
    DIRS.forEach((dc) => {
      const r = firstR + dr,
        c = firstC + dc;
      if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) forbidden.add(`${r},${c}`);
    })
  );

  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * SIZE);
    const c = Math.floor(Math.random() * SIZE);
    if (forbidden.has(`${r},${c}`) || board[r][c].mine) continue;
    board[r][c].mine = true;
    placed++;
  }

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c].mine) continue;
      let cnt = 0;
      DIRS.forEach((dr) =>
        DIRS.forEach((dc) => {
          if (!dr && !dc) return;
          const nr = r + dr,
            nc = c + dc;
          if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) return;
          if (board[nr][nc].mine) cnt++;
        })
      );
      board[r][c].count = cnt;
    }
  }

  return board;
}

/* ---------- React bileşeni ------------------- */
export function MinesweeperBoard({
  onStatusChange,
  onFlagChange,
  onReset,
}: MinesweeperBoardProps) {
  /* ---------- state ---------------- */
  const [board, setBoard] = useState<Board>(emptyBoard);
  const [status, setStatus] = useState<Status>("init");

  /* her durum değiştiğinde parent'a bildir */
  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  /* flood‑fill */
  const revealEmpty = useCallback((r: number, c: number, b: Board) => {
    const stack = [[r, c]];
    while (stack.length) {
      const [x, y] = stack.pop()!;
      DIRS.forEach((dx) =>
        DIRS.forEach((dy) => {
          if (!dx && !dy) return;
          const nx = x + dx,
            ny = y + dy;
          if (nx < 0 || nx >= SIZE || ny < 0 || ny >= SIZE) return;
          const cell = b[nx][ny];
          if (cell.revealed || cell.flagged) return;
          cell.revealed = true;
          if (cell.count === 0 && !cell.mine) stack.push([nx, ny]);
        })
      );
    }
  }, []);

  /* komşu bayrak sayısı */
  const countFlags = (r: number, c: number, b: Board) => {
    let n = 0;
    DIRS.forEach((dr) =>
      DIRS.forEach((dc) => {
        if (!dr && !dc) return;
        const nr = r + dr,
          nc = c + dc;
        if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) return;
        if (b[nr][nc].flagged) n++;
      })
    );
    return n;
  };
  // toplam bayrak sayısını hesapla

  /* komşu hücreleri aç (chord) */
  const chord = (r: number, c: number, b: Board, loseCallback: () => void) => {
    DIRS.forEach((dr) =>
      DIRS.forEach((dc) => {
        if (!dr && !dc) return;
        const nr = r + dr,
          nc = c + dc;
        if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) return;
        const cell = b[nr][nc];
        if (cell.revealed || cell.flagged) return;

        cell.revealed = true;
        if (cell.mine) {
          // yanlış bayrak → kaybet
          b.forEach((row) => row.forEach((c) => (c.revealed = true)));
          loseCallback();
          return;
        }
        if (cell.count === 0) revealEmpty(nr, nc, b);
      })
    );
  };

  /* sol tık */
  const leftClick = (r: number, c: number) => {
    if (status === "lost" || status === "won") return;

    // ilk tık
    if (status === "init") {
      const b = generateBoard(r, c);
      b[r][c].revealed = true;
      if (b[r][c].count === 0) revealEmpty(r, c, b);
      setBoard(b);
      setStatus("playing");
      return;
    }

    setBoard((prev) => {
      const b = prev.map((row) => row.map((cell) => ({ ...cell })));
      const cell = b[r][c];

      // Chord: hücre zaten açık ve rakam ise
      if (cell.revealed && cell.count > 0) {
        if (countFlags(r, c, b) === cell.count) {
          chord(r, c, b, () => setStatus("lost"));
        }
      } else {
        if (cell.flagged || cell.revealed) return prev;

        cell.revealed = true;
        if (cell.mine) {
          b.forEach((row) => row.forEach((c) => (c.revealed = true)));
          setStatus("lost");
          return b;
        }
        if (cell.count === 0) revealEmpty(r, c, b);
      }

      const hidden = b.flat().filter((c) => !c.revealed).length;
      if (hidden === MINES) setStatus("won");
      return b;
    });
  };

  /* sağ tık */
  const rightClick = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault();
    if (status !== "playing") return;
    setBoard((prev) => {
      const b = prev.map((row) => row.map((cell) => ({ ...cell })));
      const cell = b[r][c];
      if (cell.revealed) return prev;
      cell.flagged = !cell.flagged;
      // toplam bayrak sayısını hesapla
      const flags = b.flat().filter((c) => c.flagged).length;
      onFlagChange?.(flags);
      return b;
    });
  };

  /* reset */
  const reset = () => {
    setBoard(emptyBoard());
    setStatus("init");
    onReset?.();
  };

  /* renkler */
  const colors: Record<number, string> = {
    1: "text-blue-800",
    2: "text-green-800",
    3: "text-red-800",
    4: "text-purple-800",
    5: "text-yellow-800",
    6: "text-cyan-800",
    7: "text-slate-900",
    8: "text-slate-900",
  };

  /* render */
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between max-w-[640px] mx-auto">
        <span className="font-semibold">
          {status === "init" && "First click is safe!"}
          {status === "playing" && "Good luck!"}
          {status === "lost" && "💥 Boom! Try again?"}
          {status === "won" && "🏆 You cleared the field!"}
        </span>
        <button
          onClick={reset}
          className="rounded bg-primary px-3 py-1 text-sm font-medium"
        >
          Restart
        </button>
      </div>

      <div className="grid grid-cols-16 gap-0.5 border-2 border-primary max-w-[640px] mx-auto">
        {board.map((row, r) =>
          row.map((cell, c) => (
            <button
              key={`${r}-${c}`}
              onClick={() => leftClick(r, c)}
              onContextMenu={(e) => rightClick(e, r, c)}
              className={cn(
                "aspect-square flex items-center justify-center text-sm font-medium",
                "focus:outline-none select-none",
                cell.revealed
                  ? "bg-[#D1CFEA] text-slate-900"
                  : "bg-[#FFAC9D] hover:bg-[#FF9D8B] border border-[#FF8D7A]"
              )}
            >
              {cell.revealed ? (
                cell.mine ? (
                  <Bomb className="h-4 w-4 text-slate-900" />
                ) : cell.count ? (
                  <span className={cn("font-bold", colors[cell.count])}>
                    {cell.count}
                  </span>
                ) : null
              ) : cell.flagged ? (
                <Flag className="h-4 w-4 text-[#E8322C]" />
              ) : null}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
