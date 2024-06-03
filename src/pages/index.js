
import { Inter } from "next/font/google";
import Faq from "@/components/ui/Faq";
import Animate from "@/components/ui/Animate";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <div>
   <Faq/>
   <Animate/>
 </div>
  );
}
