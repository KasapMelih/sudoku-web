"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function TicTacToeBoard() {
  // In a real implementation, this would be populated with actual game data
  const [board, setBoard] = useState<(null | "X" | "O")[][]>([
    [null, null, null],
    [null, "X", null],
    [null, null, "O"],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== null) return;

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    // Switch player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const getCellContent = (value: null | "X" | "O") => {
    if (value === "X") {
      return <span className="text-3xl font-bold text-blue-500">X</span>;
    } else if (value === "O") {
      return <span className="text-3xl font-bold text-red-500">O</span>;
    }
    return null;
  };

  return (
    <div className="grid grid-cols-3 gap-2 aspect-square">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className={cn(
              "aspect-square flex items-center justify-center bg-muted/50",
              "border-2 border-primary rounded-md",
              "hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {getCellContent(cell)}
          </button>
        ))
      )}
    </div>
  );
}
