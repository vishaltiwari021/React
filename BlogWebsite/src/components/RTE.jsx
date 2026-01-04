import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, label, control }) {
    return (
        <div className="w-full">
            {label && <label>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field:  { onChange } }) => (
                    <Editor
                        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}  // ✅ ADD THIS LINE
                        initialValue="<p></p>"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "code",
                                "link"
                            ],
                            toolbar: 
                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdentindent | removeformat | help",
                        }}
                        onEditing={(value) => onChange(value)}
                    />
                )}
            />
        </div>
    );
}