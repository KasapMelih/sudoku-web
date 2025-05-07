import Link from "next/link";
import { Trophy, Users, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameCard from "@/components/ui/game-card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Trophy className="h-6 w-6" />
            <span>Rekabetci Zeka Oyunu</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/leaderboard" className="text-sm font-medium">
              Leaderboard
            </Link>
            <Link href="/profile" className="text-sm font-medium">
              Profile
            </Link>
            <Link href="/settings" className="text-sm font-medium">
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome to Rekabetci Zeka Oyunu
              </h1>
              <p className="text-muted-foreground">
                Compete in real-time with players around the world in classic
                games.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg bg-muted px-3 py-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">1,245 online</span>
              </div>
              <Button>Find Match</Button>
            </div>
          </div>
        </section>
        <section className="container py-8">
          <Tabs defaultValue="games" className="space-y-4">
            <TabsList>
              <TabsTrigger value="games">Games</TabsTrigger>
              <TabsTrigger value="active">Active Matches</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            </TabsList>
            <TabsContent value="games" className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <GameCard
                  title="Sudoku"
                  description="Test your logical thinking with this number puzzle game"
                  image="public/img/sudoku.jpg"
                  players={342}
                  path="/games/sudoku"
                />
                <GameCard
                  title="Minesweeper"
                  description="Clear the minefield without detonating any mines"
                  image="/placeholder.svg?height=200&width=400"
                  players={189}
                  path="/games/minesweeper"
                />
                <GameCard
                  title="Tic Tac Toe"
                  description="Classic game of X's and O's with a competitive twist"
                  image="/placeholder.svg?height=200&width=400"
                  players={421}
                  path="/games/tictactoe"
                />
              </div>
            </TabsContent>
            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sudoku Challenge</CardTitle>
                    <CardDescription>vs. Player123</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Your Score</p>
                        <p className="text-2xl font-bold">1250</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Opponent</p>
                        <p className="text-2xl font-bold">1180</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        12:45 remaining
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Resume Game</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tournaments" className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Challenge</CardTitle>
                    <CardDescription>Starts in 2 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        Games: Sudoku, Minesweeper, Tic Tac Toe
                      </p>
                      <p className="text-sm">Prize Pool: 5000 points</p>
                      <p className="text-sm">Participants: 64/128</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GameArena. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
