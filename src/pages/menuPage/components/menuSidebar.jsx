import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";

const MenuSidebar = () => {

    const filters = [
        "Soups & Stews",
        "Rice",
        "Snacks & Pastries",
        "Drinks",
    ];

    return (
        <aside className="p-6 rounded-xl shadow-md border border-gray-100 h-96 mt-16">
            <h3 className="text-lg font-semibold mb-4 text-orange-600 flex items-center gap-3">
                <Checkbox />
                <span>All</span>
            </h3>

            <div className="space-y-3">
                {filters.map((filter) => (
                    <label
                        key={filter}
                        className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-orange-600"
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
