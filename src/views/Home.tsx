import A from "../components/A";
import Intro from "../components/parts/Intro";
import { useAddress } from "@thirdweb-dev/react";
import Game from "./Game";

export default function Home() {
   const address = useAddress();
   return (
   <A>{ address ? <Game address={address} /> : <Intro /> }</A>)
}
