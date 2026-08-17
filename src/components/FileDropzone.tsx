import { UploadIcon, XIcon } from "lucide-react";
import { useCallback, useRef, useState } from "react";

interface FileDropzoneProps {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  value?: File[];
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
}

function formatBytes(bytes: number): string {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return value.toFixed(2) + " " + units[unit];
}

function FileDropzone({
  accept = { "image/*": [] },
  maxFiles = 1,
  maxSize = 3_000_000,
  value = [],
  onChange,
  disabled = false,
  className,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const files = value;

  const acceptTypes = Object.keys(accept).join(",");

  const handleFiles = useCallback(
    (newFiles: File[]) => {
      const accepted = newFiles.slice(0, maxFiles).filter((file) => {
        if (maxSize && file.size > maxSize) return false;
        if (accept) {
          const matches = Object.keys(accept).some((type) =>
            type.endsWith("/*") ? file.type.startsWith(type.slice(0, -1)) : file.type === type,
          );
          if (!matches) return false;
        }
        return true;
      });

      onChange?.(accepted);
    },
    [accept, maxFiles, maxSize, onChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      handleFiles(Array.from(e.dataTransfer.files));
    },
    [handleFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragging(false);
  }, []);

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(Array.from(e.target.files ?? []));
    },
    [handleFiles],
  );

  const handleRemove = useCallback(
    (index: number) => {
      onChange?.(files.filter((_, i) => i !== index));
    },
    [files, onChange],
  );

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={`flex w-full h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4 text-lg font-medium transition-all cursor-pointer ${
        dragging
          ? "border-(--color-brand-600) bg-(--color-brand-50)"
          : "border-(--color-grey-300) bg-(--color-grey-0) hover:border-(--color-brand-600) hover:bg-(--color-grey-50)"
      } ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className ?? ""}`}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        ref={inputRef}
        className="sr-only"
        type="file"
        multiple={maxFiles !== 1}
        accept={acceptTypes}
        onChange={handleChange}
      />
      {files.length === 0 ? (
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex size-11 items-center justify-center rounded-md bg-(--color-grey-100) text-(--color-grey-600)">
            <UploadIcon size={22} />
          </div>
          <p className="text-lg font-bold text-(--color-grey-700)">
            Upload {maxFiles === 1 ? "a file" : "files"}
          </p>
          <p className="text-base font-semibold text-(--color-grey-500)">Drag and drop or click to upload</p>
          {maxSize && (
            <p className="text-base font-semibold text-(--color-grey-500)">
              Max size: {formatBytes(maxSize)}
            </p>
          )}
        </div>
      ) : (
        <div className="flex w-full h-full flex-col items-center justify-center gap-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex w-full items-center gap-3 rounded-md border border-(--color-grey-200) bg-(--color-grey-100) p-3"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-(--color-grey-0) text-(--color-brand-600) shadow-sm">
                <UploadIcon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-lg font-bold text-(--color-grey-700)" title={file.name}>
                  {file.name}
                </p>
                <p className="text-base font-semibold text-(--color-grey-500)">{formatBytes(file.size)}</p>
              </div>
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-md border border-(--color-grey-200) bg-(--color-grey-0) text-(--color-grey-500) transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                aria-label={`Remove ${file.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
              >
                <XIcon size={18} />
              </button>
            </div>
          ))}
          <p className="text-base font-semibold text-(--color-grey-500)">Drag and drop or click to replace</p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
