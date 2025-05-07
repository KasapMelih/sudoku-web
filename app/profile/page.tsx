import Link from "next/link";
import {
  ArrowLeft,
  Trophy,
  Medal,
  Star,
  Calendar,
  Clock,
  Settings,
  BarChart,
  Activity,
} from "lucide-react";

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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Games</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/settings">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center md:items-start gap-4 md:flex-row">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Player123"
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">
                  Player123
                </h1>
                <div className="flex items-center gap-2 justify-center md:justify-start mt-1">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    <span>Level 42</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    <span>8,765 Points</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Since 2023</span>
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-2 text-center md:text-left">
                  Competitive puzzle solver and strategy game enthusiast.
                </p>
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Game Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg">
                      <span className="text-xs text-muted-foreground">
                        Games
                      </span>
                      <span className="text-2xl font-bold">321</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg">
                      <span className="text-xs text-muted-foreground">
                        Wins
                      </span>
                      <span className="text-2xl font-bold">241</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg">
                      <span className="text-xs text-muted-foreground">
                        Win Rate
                      </span>
                      <span className="text-2xl font-bold">75%</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 bg-muted/50 rounded-lg">
                      <span className="text-xs text-muted-foreground">
                        Rank
                      </span>
                      <span className="text-2xl font-bold">#42</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="history">Game History</TabsTrigger>
              <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Sudoku</CardTitle>
                    <CardDescription>Your Sudoku performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Skill Level
                          </span>
                          <span className="font-medium">Advanced</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Puzzles Solved
                          </span>
                          <p className="text-xl font-bold">124</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Best Time
                          </span>
                          <p className="text-xl font-bold">02:45</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/games/sudoku/play">Play Sudoku</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Minesweeper</CardTitle>
                    <CardDescription>
                      Your Minesweeper performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Skill Level
                          </span>
                          <span className="font-medium">Intermediate</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Mines Cleared
                          </span>
                          <p className="text-xl font-bold">1,245</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Best Time
                          </span>
                          <p className="text-xl font-bold">01:12</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/games/minesweeper/play">
                        Play Minesweeper
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Tic Tac Toe</CardTitle>
                    <CardDescription>
                      Your Tic Tac Toe performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Skill Level
                          </span>
                          <span className="font-medium">Expert</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Win Rate
                          </span>
                          <p className="text-xl font-bold">85%</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Games Played
                          </span>
                          <p className="text-xl font-bold">187</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/games/tictactoe/play">Play Tic Tac Toe</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent game activity and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-green-100 text-green-700">
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Won a Sudoku match against MindMaster
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Today at 14:32
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-blue-100 text-blue-700">
                        <Medal className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Earned "Speed Demon" achievement in Minesweeper
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Yesterday at 18:45
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-red-100 text-red-700">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Reached Level 42</p>
                        <p className="text-xs text-muted-foreground">
                          2 days ago
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-yellow-100 text-yellow-700">
                        <Star className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Completed a tournament in 3rd place
                        </p>
                        <p className="text-xs text-muted-foreground">
                          3 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>
                    Badges and achievements you've earned
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                        <Trophy className="h-8 w-8 text-yellow-600" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        First Win
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Win your first game
                      </span>
                    </div>

                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Medal className="h-8 w-8 text-blue-600" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        Speed Demon
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Complete a game in record time
                      </span>
                    </div>

                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Star className="h-8 w-8 text-green-600" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        Perfect Score
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Achieve a perfect score
                      </span>
                    </div>

                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <Activity className="h-8 w-8 text-purple-600" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        Streak Master
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Win 10 games in a row
                      </span>
                    </div>

                    <div className="flex flex-col items-center p-4 border rounded-lg opacity-50">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <Clock className="h-8 w-8 text-gray-400" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        Time Lord
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Play for 100 hours
                      </span>
                    </div>

                    <div className="flex flex-col items-center p-4 border rounded-lg opacity-50">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <BarChart className="h-8 w-8 text-gray-400" />
                      </div>
                      <span className="font-medium text-sm text-center">
                        Top 10
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Reach top 10 on leaderboard
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Game History</CardTitle>
                  <CardDescription>
                    Your recent games and results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Sudoku - Medium</p>
                            <p className="text-xs text-muted-foreground">
                              Today at 14:32
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Win
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-muted-foreground">Time:</span>{" "}
                        04:12 |
                        <span className="text-muted-foreground ml-2">
                          Score:
                        </span>{" "}
                        850 |
                        <span className="text-muted-foreground ml-2">
                          Opponent:
                        </span>{" "}
                        MindMaster
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">Minesweeper - Hard</p>
                            <p className="text-xs text-muted-foreground">
                              Yesterday at 18:45
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          Loss
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-muted-foreground">Time:</span>{" "}
                        02:34 |
                        <span className="text-muted-foreground ml-2">
                          Score:
                        </span>{" "}
                        420 |
                        <span className="text-muted-foreground ml-2">
                          Opponent:
                        </span>{" "}
                        BombExpert
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Tic Tac Toe - Ranked</p>
                            <p className="text-xs text-muted-foreground">
                              2 days ago
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Win
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-muted-foreground">Time:</span>{" "}
                        01:45 |
                        <span className="text-muted-foreground ml-2">
                          Score:
                        </span>{" "}
                        320 |
                        <span className="text-muted-foreground ml-2">
                          Opponent:
                        </span>{" "}
                        XOPlayer
                      </div>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Sudoku - Easy</p>
                            <p className="text-xs text-muted-foreground">
                              3 days ago
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Win
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-muted-foreground">Time:</span>{" "}
                        02:21 |
                        <span className="text-muted-foreground ml-2">
                          Score:
                        </span>{" "}
                        650 |
                        <span className="text-muted-foreground ml-2">
                          Opponent:
                        </span>{" "}
                        NumberNewbie
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Statistics</CardTitle>
                  <CardDescription>
                    In-depth analysis of your gaming performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Sudoku Stats</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Games Played
                          </p>
                          <p className="text-xl font-bold">124</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Win Rate
                          </p>
                          <p className="text-xl font-bold">78%</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Avg. Time
                          </p>
                          <p className="text-xl font-bold">03:45</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Best Time
                          </p>
                          <p className="text-xl font-bold">02:12</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Minesweeper Stats
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Games Played
                          </p>
                          <p className="text-xl font-bold">87</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Win Rate
                          </p>
                          <p className="text-xl font-bold">65%</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Mines Cleared
                          </p>
                          <p className="text-xl font-bold">1,245</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Best Time
                          </p>
                          <p className="text-xl font-bold">01:12</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Tic Tac Toe Stats
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Games Played
                          </p>
                          <p className="text-xl font-bold">187</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Win Rate
                          </p>
                          <p className="text-xl font-bold">85%</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Draw Rate
                          </p>
                          <p className="text-xl font-bold">10%</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Avg. Moves
                          </p>
                          <p className="text-xl font-bold">5.2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
