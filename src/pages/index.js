
import { Inter } from "next/font/google";
import Faq from "@/components/ui/Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <div>
   <Faq/>
 </div>
  );
}
