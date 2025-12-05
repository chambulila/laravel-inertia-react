import { Edit2Icon } from "lucide-react";
import React from "react";

export default function EditButton({ onEdit, ...props }) {
    return (
        <button 
            onClick={onEdit} 
            className={`text-gray-600 hover:text-gray-800 ${props.className || ''}`}
            {...props}
        >
            <Edit2Icon size={16} />
        </button>
    );
}
