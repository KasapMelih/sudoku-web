"use client";

import type React from "react";

import { useState } from "react";
import { Flag, Bomb } from "lucide-react";
import { cn } from "@/lib/utils";

export function MinesweeperBoard() {
  // In a real implementation, this would be populated with actual game data
  const boardSize = 16;
  const [revealed, setRevealed] = useState<boolean[][]>(
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(false))
  );
  const [flagged, setFlagged] = useState<boolean[][]>(
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(false))
  );

  // Sample data for demonstration
  const mines = new Set([
    "2,3",
    "5,7",
    "8,2",
    "10,10",
    "12,4",
    "3,15",
    "7,9",
    "14,6",
    "1,8",
    "9,13",
  ]);
  type CellKey = `${number},${number}`;

  const numbers: Record<CellKey, number> = {
    "1,3": 1,
    "2,2": 1,
    "2,4": 2,
    "3,3": 2,
    "3,4": 1,
    "4,7": 1,
    "5,6": 1,
    "5,8": 1,
    "6,7": 1,
    "7,2": 1,
    "8,1": 1,
    "8,3": 1,
    "9,2": 1,
    "9,10": 1,
    "10,9": 1,
    "10,11": 1,
    "11,10": 1,
    "11,4": 1,
    "12,3": 1,
    "12,5": 1,
    "13,4": 1,
  };

  const handleCellClick = (row: number, col: number) => {
    if (flagged[row][col]) return;

    const newRevealed = [...revealed];
    newRevealed[row][col] = true;
    setRevealed(newRevealed);
  };

  const handleRightClick = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (revealed[row][col]) return;

    const newFlagged = [...flagged];
    newFlagged[row][col] = !newFlagged[row][col];
    setFlagged(newFlagged);
  };

  const getCellContent = (row: number, col: number) => {
    const key = `${row},${col}`;

    if (!revealed[row][col]) {
      if (flagged[row][col]) {
        return <Flag className="h-4 w-4 text-red-500" />;
      }
      return null;
    }

    if (mines.has(key)) {
      return <Bomb className="h-4 w-4" />;
    }

    if (numbers[key]) {
      const colorClasses = {
        1: "text-blue-500",
        2: "text-green-600",
        3: "text-red-500",
        4: "text-purple-600",
        5: "text-yellow-600",
        6: "text-cyan-600",
        7: "text-black",
        8: "text-gray-600",
      };

      return (
        <span
          className={cn(
            "font-bold",
            colorClasses[numbers[key] as keyof typeof colorClasses]
          )}
        >
          {numbers[key]}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-cols-16 gap-0.5 border-2 border-primary max-w-[640px] mx-auto">
      {Array(boardSize)
        .fill(null)
        .map((_, rowIndex) =>
          Array(boardSize)
            .fill(null)
            .map((_, colIndex) => {
              const isRevealed = revealed[rowIndex][colIndex];

              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "aspect-square flex items-center justify-center text-sm font-medium",
                    "focus:outline-none",
                    isRevealed
                      ? "bg-muted"
                      : "bg-background hover:bg-muted/50 border border-border"
                  )}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
                >
                  {getCellContent(rowIndex, colIndex)}
                </button>
              );
            })
        )}
    </div>
  );
}
