import { Trash2Icon } from "lucide-react";
import React from "react";

export default function DeleteButton({ ...props }) {
    return (
        <button {...props} className={`text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 ${props.className}`}>
            <Trash2Icon size={16} />
        </button>
    );
}
