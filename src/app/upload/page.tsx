// DragAndDrop.tsx

import React from 'react';
import { useDropzone } from 'react-dropzone';

interface DragAndDropProps {
  onDrop: (files: File[]) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-64 h-64 border-dashed border-2 border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-xl text-gray-600">Drop the files here ...</p>
      ) : (
        <p className="text-xl text-gray-600">Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DragAndDrop;