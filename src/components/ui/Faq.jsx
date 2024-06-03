import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <div className=" bg-black min-h-screen">
      <div className=" container">
        <h1 className=" text-white text-7xl text-center mb-20">FAQ</h1>
        <div className=" max-w-[800px] mx-auto">
            <Accordion  type="single" collapsible>
              <AccordionItem value="item-1" className=" border-white border border-solid mb-4 p-3  rounded-lg">
                <AccordionTrigger className="text-white hover:no-underline">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-white !border-none outline-none "> Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className=" border-white border border-solid mb-4 p-3 rounded-lg">
                <AccordionTrigger className="text-white hover:no-underline">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-white !border-none outline-none"> Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className=" border-white border border-solid mb-4 p-3 rounded-lg">
                <AccordionTrigger className="text-white hover:no-underline">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-white !border-none outline-none"> Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className=" border-white border border-solid mb-4 p-3 rounded-lg">
                <AccordionTrigger className="text-white hover:no-underline">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-white !border-none outline-none"> Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className=" border-white border border-solid  p-3 rounded-lg">
                <AccordionTrigger className="text-white hover:no-underline">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-white !border-none outline-none"> Yes. It adheres to the WAI-ARIA design pattern</AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
      </div>
    </div>
  );
}
