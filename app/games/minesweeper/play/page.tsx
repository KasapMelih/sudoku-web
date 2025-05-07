// *** Server Component – BURAYA "use client" KOYMA ***

import dynamic from "next/dynamic";

// Dinamik import; ssr=false şart değil ama dosya küçülür
const GameClient = dynamic(() => import("./game-client"), { ssr: false });

export default function MinesweeperPlayPage() {
  return <GameClient />;
}
