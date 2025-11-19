import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { useCart } from '../../../store/useCart';

const ProductAccordion = ({ product, item }) => {
    const data = product || item;
    if (!data) {
        console.error('ProductAccordion: No product/item prop provided');
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <p className="text-gray-500">Product not found</p>
            </div>
        );
    }

    const { isInCart, getItemQuantity } = useCart();
    const inCart = isInCart(data.id);
    const quantity = getItemQuantity(data.id);

    const sections = [
        { title: "Description", text: data.description || "Delicious smoky Jollof Rice with grilled chicken." },
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