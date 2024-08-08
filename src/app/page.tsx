import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Feature/>
        <Faq/>
      </div>

      
    </div>
  );
}
