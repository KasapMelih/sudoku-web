"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function SudokuBoard() {
  // This would be populated with actual game data in a real implementation
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill(null)));
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null
  );
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  // Sample initial values (would come from game state in real implementation)
  const initialValues = {
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
  };

  // Solution for validation
  const solution = {
    "0,0": 5,
    "0,1": 3,
    "0,2": 4,
    "0,3": 6,
    "0,4": 7,
    "0,5": 8,
    "0,6": 9,
    "0,7": 1,
    "0,8": 2,
    "1,0": 6,
    "1,1": 7,
    "1,2": 2,
    "1,3": 1,
    "1,4": 9,
    "1,5": 5,
    "1,6": 3,
    "1,7": 4,
    "1,8": 8,
    "2,0": 1,
    "2,1": 9,
    "2,2": 8,
    "2,3": 3,
    "2,4": 4,
    "2,5": 2,
    "2,6": 5,
    "2,7": 6,
    "2,8": 7,
    "3,0": 8,
    "3,1": 5,
    "3,2": 9,
    "3,3": 7,
    "3,4": 6,
    "3,5": 1,
    "3,6": 4,
    "3,7": 2,
    "3,8": 3,
    "4,0": 4,
    "4,1": 2,
    "4,2": 6,
    "4,3": 8,
    "4,4": 5,
    "4,5": 3,
    "4,6": 7,
    "4,7": 9,
    "4,8": 1,
    "5,0": 7,
    "5,1": 1,
    "5,2": 3,
    "5,3": 9,
    "5,4": 2,
    "5,5": 4,
    "5,6": 8,
    "5,7": 5,
    "5,8": 6,
    "6,0": 9,
    "6,1": 6,
    "6,2": 1,
    "6,3": 5,
    "6,4": 3,
    "6,5": 7,
    "6,6": 2,
    "6,7": 8,
    "6,8": 4,
    "7,0": 2,
    "7,1": 8,
    "7,2": 7,
    "7,3": 4,
    "7,4": 1,
    "7,5": 9,
    "7,6": 6,
    "7,7": 3,
    "7,8": 5,
    "8,0": 3,
    "8,1": 4,
    "8,2": 5,
    "8,3": 2,
    "8,4": 8,
    "8,5": 6,
    "8,6": 1,
    "8,7": 7,
    "8,8": 9,
  };

  // State to track user input values
  const [userValues, setUserValues] = useState<Record<string, number>>({});

  const handleCellClick = (row: number, col: number) => {
    if (!isCellInitial(row, col) && !isCompleted) {
      setSelectedCell([row, col]);
    }
  };

  const isCellInitial = (row: number, col: number) => {
    return initialValues[`${row},${col}`] !== undefined;
  };

  const getCellValue = (row: number, col: number) => {
    const key = `${row},${col}`;
    if (initialValues[key] !== undefined) {
      return initialValues[key];
    }
    return userValues[key] || "";
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

  // Check if a cell value is correct according to the solution
  const isCellValueCorrect = (row: number, col: number) => {
    const key = `${row},${col}`;
    if (initialValues[key] !== undefined) {
      return true; // Initial values are always correct
    }

    if (userValues[key] === undefined) {
      return true; // Empty cells are not marked as incorrect
    }

    return userValues[key] === solution[key];
  };

  // Check if the puzzle is complete and correct
  const checkCompletion = useCallback(() => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const key = `${row},${col}`;
        const value =
          initialValues[key] !== undefined
            ? initialValues[key]
            : userValues[key];

        // If any cell is empty or incorrect, the puzzle is not complete
        if (value === undefined || value !== solution[key]) {
          return false;
        }
      }
    }
    return true;
  }, [userValues, initialValues, solution]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell || isCompleted) return;

      const [row, col] = selectedCell;
      const key = `${row},${col}`;

      // Check if the key is a number between 1-9
      if (/^[1-9]$/.test(e.key)) {
        const newValue = Number.parseInt(e.key, 10);
        setUserValues((prev) => ({ ...prev, [key]: newValue }));
      } else if (e.key === "Backspace" || e.key === "Delete") {
        // Clear the cell on backspace or delete
        setUserValues((prev) => {
          const newValues = { ...prev };
          delete newValues[key];
          return newValues;
        });
      } else if (e.key === "ArrowUp" && row > 0) {
        setSelectedCell([row - 1, col]);
      } else if (e.key === "ArrowDown" && row < 8) {
        setSelectedCell([row + 1, col]);
      } else if (e.key === "ArrowLeft" && col > 0) {
        setSelectedCell([row, col - 1]);
      } else if (e.key === "ArrowRight" && col < 8) {
        setSelectedCell([row, col + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell, isCompleted]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && !isCompleted) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isCompleted]);

  // Format time as mm:ss
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Check for completion after each move
  useEffect(() => {
    const isComplete = checkCompletion();
    if (isComplete && !isCompleted) {
      setIsCompleted(true);
      setIsRunning(false);
    }
  }, [userValues, checkCompletion, isCompleted]);

  // Reset game
  const handleReset = () => {
    setUserValues({});
    setTimer(0);
    setIsRunning(true);
    setIsCompleted(false);
    setSelectedCell(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{formatTime(timer)}</div>
        <Button onClick={handleReset} variant="outline">
          Yeni Oyun
        </Button>
      </div>

      {isCompleted && (
        <div className="bg-green-100 text-green-800 p-4 rounded-md flex items-center gap-2 mb-4">
          <CheckCircle2 className="h-5 w-5" />
          <span className="font-bold">
            Tebrikler! Sudoku'yu {formatTime(timer)} sürede tamamladınız.
          </span>
        </div>
      )}

      <div className="grid grid-cols-9 gap-0 border-4 border-primary max-w-[540px] mx-auto">
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
                const isCorrect = isCellValueCorrect(rowIndex, colIndex);
                const cellValue = getCellValue(rowIndex, colIndex);
                const hasValue = cellValue !== "";

                // Add thicker borders to separate 3x3 boxes
                const borderRight =
                  (colIndex + 1) % 3 === 0 && colIndex < 8
                    ? "border-r-4 border-r-primary"
                    : "border-r border-r-gray-300";
                const borderBottom =
                  (rowIndex + 1) % 3 === 0 && rowIndex < 8
                    ? "border-b-4 border-b-primary"
                    : "border-b border-b-gray-300";

                return (
                  <button
                    key={`${rowIndex}-${colIndex}`}
                    className={cn(
                      "aspect-square flex items-center justify-center text-2xl font-medium",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                      isSelected
                        ? "bg-primary/20"
                        : isRelated
                        ? "bg-primary/10"
                        : "bg-background",
                      isInitial ? "font-bold" : "",
                      !isCorrect && hasValue && !isInitial
                        ? "text-red-600"
                        : "",
                      borderRight,
                      borderBottom
                    )}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    disabled={isInitial || isCompleted}
                  >
                    {cellValue}
                  </button>
                );
              })
          )}
      </div>
    </div>
  );
}
