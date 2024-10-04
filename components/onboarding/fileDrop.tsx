import { CloudUpload, Upload } from "lucide-react";
import { DragEvent, useRef, useState } from "react";

export function FileDrop({ setFiles }: { setFiles: (value: File[]) => void }) {
  const [isOver, setIsOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files)
      .filter((file) => file.type === "application/pdf")
      .slice(0, 1);
    if (droppedFiles.length > 0) {
      setFileName(droppedFiles[0].name);
      setFiles(droppedFiles);
    }

    droppedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        console.log(reader.result);
      };

      reader.onerror = () => {
        console.error("There was an issue reading the file.");
      };

      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || [])
      .filter((file) => file.type === "application/pdf")
      .slice(0, 1);
    if (selectedFiles.length > 0) {
      setFileName(selectedFiles[0].name);
      setFiles(selectedFiles);
    }

    selectedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        console.log(reader.result);
      };

      reader.onerror = () => {
        console.error("There was an issue reading the file.");
      };

      reader.readAsDataURL(file);
    });
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div
        onClick={handleDivClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`${
          isOver ? "lightgray" : "white"
        } flex items-center justify-items-center w-full h-[130px] border-2 border-dotted rounded-md bg-[#FBFAF8] cursor-pointer`}
      >
        <div className="flex flex-col items-center justify-center gap-3 text-neutral-600 h-full w-full">
          {fileName ? (
            <CloudUpload size={20} className="text-neutral-600" />
          ) : (
            <Upload size={20} className="text-neutral-600" />
          )}
          <span>
            {fileName
              ? fileName
              : "Click or Drag & Drop Your Resume"}
          </span>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
    </div>
  );
}
