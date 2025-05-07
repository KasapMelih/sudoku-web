"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function SudokuBoard() {
  // This would be populated with actual game data in a real implementation
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill(null)));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null
  );
  type CellKey = `${number},${number}`;

  // Sample initial values (would come from game state in real implementation)
  const initialValues: Record<CellKey, number> = {
    "0,0": 5,
    "0,1": 3,
    "0,4": 7,
    "1,0": 6,
    "1,3": 1,
    "1,4": 9,
    "1,5": 5,
    "2,1": 9,
    "2,2": 8,
    "2,7": 6,
    "3,0": 8,
    "3,4": 6,
    "3,8": 3,
    "4,0": 4,
    "4,3": 8,
    "4,5": 3,
    "4,8": 1,
    "5,0": 7,
    "5,4": 2,
    "5,8": 6,
    "6,1": 6,
    "6,6": 2,
    "6,7": 8,
    "7,3": 4,
    "7,4": 1,
    "7,5": 9,
    "7,8": 5,
    "8,4": 8,
    "8,7": 7,
    "8,8": 9,
  } as const;

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell([row, col]);
  };

  const isCellInitial = (row: number, col: number) => {
    return initialValues[`${row},${col}` as CellKey] !== undefined;
  };

  const getCellValue = (row: number, col: number) => {
    return initialValues[`${row},${col}` as CellKey] || "";
  };

  const isSameBox = (
    row1: number,
    col1: number,
    row2: number,
    col2: number
  ) => {
    const boxRow1 = Math.floor(row1 / 3);
    const boxCol1 = Math.floor(col1 / 3);
    const boxRow2 = Math.floor(row2 / 3);
    const boxCol2 = Math.floor(col2 / 3);
    return boxRow1 === boxRow2 && boxCol1 === boxCol2;
  };

  return (
    <div className="grid grid-cols-9 gap-0.5 border-2 border-primary">
      {Array(9)
        .fill(null)
        .map((_, rowIndex) =>
          Array(9)
            .fill(null)
            .map((_, colIndex) => {
              const isSelected =
                selectedCell &&
                selectedCell[0] === rowIndex &&
                selectedCell[1] === colIndex;
              const isRelated =
                selectedCell &&
                (selectedCell[0] === rowIndex ||
                  selectedCell[1] === colIndex ||
                  isSameBox(
                    selectedCell[0],
                    selectedCell[1],
                    rowIndex,
                    colIndex
                  ));
              const isInitial = isCellInitial(rowIndex, colIndex);

              // Add borders to separate 3x3 boxes
              const borderRight =
                (colIndex + 1) % 3 === 0 && colIndex < 8
                  ? "border-r-2 border-r-primary"
                  : "";
              const borderBottom =
                (rowIndex + 1) % 3 === 0 && rowIndex < 8
                  ? "border-b-2 border-b-primary"
                  : "";

              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(
                    "aspect-square flex items-center justify-center text-lg font-medium",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                    isSelected
                      ? "bg-primary/20"
                      : isRelated
                      ? "bg-primary/10"
                      : "bg-background",
                    isInitial ? "font-bold" : "",
                    borderRight,
                    borderBottom
                  )}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {getCellValue(rowIndex, colIndex)}
                </button>
              );
            })
        )}
    </div>
  );
}
