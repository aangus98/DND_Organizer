// File: imageUpload.tsx
import React from "react"; // Ensure React is imported for JSX support
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
    const [files, setFiles] = useState<File[]>([]);
    
    const onDrop = (acceptedFiles: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };
    
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
        "image/*": [],
        },
    });
    
    return (
        <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <ul>
            {files.map((file) => (
            <li key={file.name}>{file.name}</li>
            ))}
        </ul>
        </div>
    );
    };

export default ImageUpload;