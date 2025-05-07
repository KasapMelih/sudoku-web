import Link from "next/link";
import { ArrowLeft, Clock, Flag, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MinesweeperBoard } from "@/components/ui/minesweeper-board";

export default function MinesweeperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Games</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">03:45</span>
            </div>
            <div className="flex items-center gap-1">
              <Flag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">10/40</span>
            </div>
            <Button size="sm">Restart</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <MinesweeperBoard />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Match Info</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">You</span>
                    </div>
                    <span className="text-lg font-bold">24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">Opponent</span>
                    </div>
                    <span className="text-lg font-bold">18%</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Difficulty
                      </span>
                      <span className="font-medium">
                        Medium (16x16, 40 mines)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Controls</h2>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Left Click:</span> Reveal cell
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Right Click:</span>{" "}
                    Flag/unflag cell
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Double Click:</span> Reveal
                    surrounding cells
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Toggle Flag Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
