import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SudokuBoard } from "@/components/ui/sudoku-board";

export default function SudokuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Games</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              Hint
            </Button>
            <Button size="sm">Submit</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex justify-center">
          <Card className="max-w-xl w-full">
            <CardContent className="p-6">
              <SudokuBoard />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
