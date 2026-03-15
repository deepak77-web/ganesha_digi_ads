import Image from "next/image";
import Navbar from "./components/Navbar";
import First from "./components/First";
import Second from "./components/Second";
import Offer from "./components/Offer";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/five";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eighth from "./components/Eighth";
import Ninth from "./components/Ninth";
import Tenth from "./components/Tenth";
import Footer from "./components/Footer";
import { MouseFollow } from "./components/Animation";

export default function Home() {
  return (
    <div>
      <MouseFollow/>
      <First/>

      <Second/>
      <Offer/>
      
      <Third/>
      <Fourth/>
      <Fifth/>

      <Sixth/>
      <Seventh/>

      <Eighth/>

      {/* pricing not required as of now */}
      {/* <Ninth/> */}
      <Tenth/>
      
    </div>
  );
}
