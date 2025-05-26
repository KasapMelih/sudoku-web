import Link from "next/link";
import { ArrowLeft, Trophy, Medal, Search, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Games</span>
          </Link>
          {/* <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Trophy className="h-4 w-4 mr-2" />
              My Ranking
            </Button>
          </div> */}
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground">
              See who's leading the competition across all games.
            </p>
          </div>

          {/* <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search players..."
                className="w-full pl-8"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Select defaultValue="all-time">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="global">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div> */}

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Games</TabsTrigger>
              <TabsTrigger value="sudoku">Sudoku</TabsTrigger>
              <TabsTrigger value="minesweeper">Minesweeper</TabsTrigger>
              <TabsTrigger value="tictactoe">Tic Tac Toe</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Global Rankings</CardTitle>
                  <CardDescription>
                    Players ranked by total score across all games
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Games Played</TableHead>
                        <TableHead>Win Rate</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-2" />1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">GrandMaster42</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2023
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>1,245</TableCell>
                        <TableCell>92%</TableCell>
                        <TableCell className="text-right font-bold">
                          24,680
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-gray-400 mr-2" />2
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">PuzzleMaster</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2022
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>987</TableCell>
                        <TableCell>88%</TableCell>
                        <TableCell className="text-right font-bold">
                          22,345
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-amber-700 mr-2" />3
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">GameWizard</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2023
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>876</TableCell>
                        <TableCell>85%</TableCell>
                        <TableCell className="text-right font-bold">
                          19,876
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">4</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">LogicQueen</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2022
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>765</TableCell>
                        <TableCell>82%</TableCell>
                        <TableCell className="text-right font-bold">
                          18,543
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">5</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">StrategyKing</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2023
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>654</TableCell>
                        <TableCell>80%</TableCell>
                        <TableCell className="text-right font-bold">
                          17,210
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/50">
                        <TableCell className="font-medium">42</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">You (Player123)</div>
                              <div className="text-xs text-muted-foreground">
                                Since 2023
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>321</TableCell>
                        <TableCell>75%</TableCell>
                        <TableCell className="text-right font-bold">
                          8,765
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sudoku" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sudoku Rankings</CardTitle>
                  <CardDescription>
                    Players ranked by Sudoku performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Best Time</TableHead>
                        <TableHead>Puzzles Solved</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-2" />1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">SudokuMaster</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>01:24</TableCell>
                        <TableCell>542</TableCell>
                        <TableCell className="text-right font-bold">
                          12,450
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-gray-400 mr-2" />2
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">NumberNinja</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>01:32</TableCell>
                        <TableCell>487</TableCell>
                        <TableCell className="text-right font-bold">
                          11,870
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-amber-700 mr-2" />3
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">GridGenius</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>01:45</TableCell>
                        <TableCell>423</TableCell>
                        <TableCell className="text-right font-bold">
                          10,980
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="minesweeper" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Minesweeper Rankings</CardTitle>
                  <CardDescription>
                    Players ranked by Minesweeper performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Best Time</TableHead>
                        <TableHead>Mines Cleared</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-2" />1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">MineClearer</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>00:42</TableCell>
                        <TableCell>8,742</TableCell>
                        <TableCell className="text-right font-bold">
                          14,320
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-gray-400 mr-2" />2
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">BombDefuser</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>00:45</TableCell>
                        <TableCell>7,985</TableCell>
                        <TableCell className="text-right font-bold">
                          13,750
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-amber-700 mr-2" />3
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">MineHunter</div>
                              <Badge className="ml-2">Expert</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>00:48</TableCell>
                        <TableCell>7,654</TableCell>
                        <TableCell className="text-right font-bold">
                          12,980
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tictactoe" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Tic Tac Toe Rankings</CardTitle>
                  <CardDescription>
                    Players ranked by Tic Tac Toe performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Win Rate</TableHead>
                        <TableHead>Games Played</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-2" />1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">TicTacPro</div>
                              <Badge className="ml-2">Master</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>98%</TableCell>
                        <TableCell>1,245</TableCell>
                        <TableCell className="text-right font-bold">
                          9,870
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-gray-400 mr-2" />2
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">XOChampion</div>
                              <Badge className="ml-2">Master</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>96%</TableCell>
                        <TableCell>1,120</TableCell>
                        <TableCell className="text-right font-bold">
                          9,540
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Medal className="h-4 w-4 text-amber-700 mr-2" />3
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10" />
                            <div>
                              <div className="font-medium">GridMaster</div>
                              <Badge className="ml-2">Master</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>95%</TableCell>
                        <TableCell>987</TableCell>
                        <TableCell className="text-right font-bold">
                          9,120
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
