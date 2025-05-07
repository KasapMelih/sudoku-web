import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TicTacToeBoard } from "@/components/ui/tictactoe-board";

export default function TicTacToePage() {
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
              <span className="text-sm font-medium">00:45</span>
            </div>
            <Button size="sm">Forfeit</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="max-w-md mx-auto">
                  <TicTacToeBoard />
                </div>
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
                      <span className="font-medium">You (X)</span>
                    </div>
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">Opponent (O)</span>
                    </div>
                    <span className="text-lg font-bold">0</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Game Mode
                      </span>
                      <span className="font-medium">Best of 5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Game Status</h2>
                <div className="p-3 bg-yellow-100 text-yellow-800 rounded-md">
                  <p className="font-medium">Your turn</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Time per move:</span> 60
                    seconds
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Current round:</span> 2/5
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
