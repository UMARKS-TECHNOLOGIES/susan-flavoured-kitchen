import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

const ProductAccordion = () => {
    const sections = [
        { title: "Description", text: "Delicious smoky Jollof Rice with grilled chicken." },
        { title: "Ingredients", text: "Rice, tomatoes, pepper mix, spices, chicken." },
        { title: "Hygiene Promise", text: "Prepared fresh in a clean environment." },
        { title: "Delivery Information", text: "Delivered within 25-35 minutes." },
    ];

    return (
        <Accordion type="single" collapsible className="w-full border-t">
            {sections.map((sec, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b">

                    <AccordionTrigger className="text-lg font-medium">
                        {sec.title}
                    </AccordionTrigger>

                    <AccordionContent className="text-gray-600">
                        {sec.text}
                    </AccordionContent>

                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default ProductAccordion