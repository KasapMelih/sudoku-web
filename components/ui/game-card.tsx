import Link from "next/link";
import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  players: number;
  path: string;
}

export default function GameCard({
  title,
  description,
  image,
  players,
  path,
}: GameCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{players} players online</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild className="w-full">
          <Link href={`${path}/play`}>Play Now</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href={`${path}/practice`}>Practice</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
