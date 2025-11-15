import React, { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox";

const MenuSidebar = () => {

    const [hideSidebar, setHideSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const drinksTop = drinksRef.current?.offsetTop || 0;
            const reachedDrinks = window.scrollY >= drinksTop - 200;

            setHideSidebar(reachedDrinks);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const filters = [
        "Soups & Stews",
        "Rice",
        "Snacks & Pastries",
        "Drinks",
    ];

    return (
        <aside
            className={`
          hidden lg:block w-64 transition-all duration-300 bg-white rounded-lg p-6 shadow-md h-[600px]
          ${hideSidebar ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
            style={{ position: "sticky", bottom: "0px" }}
        >
            <h3 className="text-lg font-semibold mb-4 text-orange-600 flex items-center gap-3">
                <Checkbox />
                <span>All</span>
            </h3>

            <div className="space-y-3">
                {filters.map((filter) => (
                    <label
                        key={filter}
                        className="flex items-center font-semibold text-lg gap-3 cursor-pointer text-gray-700 hover:text-orange-600"
                    >
                        <Checkbox id={filter} />
                        <span>{filter}</span>
                    </label>
                ))}
            </div>
        </aside>
    )
}

export default MenuSidebar
