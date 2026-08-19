import { produce } from "immer";
import { UploadIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

interface FileDropzoneProps {
  accept?: string;
  maxFiles?: number;
  value?: File[];
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function FileDropzone({
  accept = "image/*",
  maxFiles = 1,
  value = [],
  onChange,
  disabled = false,
  className = "",
}: FileDropzoneProps) {
  const files = value;
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const [renaming, setRenaming] = useState<{ index: number; name: string } | null>(null);

  function updateFiles(recipe: (draft: File[]) => void) {
    onChange?.(produce(files, recipe));
  }

  function addFiles(newFiles: FileList | null) {
    if (!newFiles) return;
    onChange?.(Array.from(newFiles).slice(0, maxFiles));
  }

  function removeFile(index: number) {
    updateFiles((draft) => {
      draft.splice(index, 1);
    });
  }

  function commitRename() {
    if (!renaming) return;
    const trimmed = renaming.name.trim();
    const current = files[renaming.index];

    if (trimmed && trimmed !== current.name) {
      updateFiles((draft) => {
        draft[renaming.index] = new File([current], trimmed, {
          type: current.type,
          lastModified: current.lastModified,
        });
      });
    }
    setRenaming(null);
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={() => inputRef.current?.click()}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        addFiles(e.dataTransfer.files);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      className={`flex w-full h-40 flex-col items-center justify-center rounded-md border-2 border-dashed p-4 text-lg font-medium transition-all cursor-pointer
        ${dragging ? "border-(--color-brand-600) bg-(--color-brand-50)" : "border-(--color-grey-300) bg-(--color-grey-0) hover:border-(--color-brand-600) hover:bg-(--color-grey-50)"}
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}`}
    >
      <input
        ref={inputRef}
        type="file"
        className="sr-only"
        multiple={maxFiles !== 1}
        accept={accept}
        onChange={(e) => addFiles(e.target.files)}
      />

      {files.length === 0 ? (
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex size-11 items-center justify-center rounded-md bg-(--color-grey-100) text-(--color-grey-600)">
            <UploadIcon size={22} />
          </div>
          <p className="text-lg font-bold text-(--color-grey-700)">
            Upload {maxFiles === 1 ? "an image" : "images"}
          </p>
          <p className="text-base font-semibold text-(--color-grey-500)">Drag and drop or click to upload</p>
        </div>
      ) : (
        <div className="flex w-full h-full flex-col items-center justify-center gap-2">
          {files.map((file, index) => {
            const isEditing = renaming?.index === index;
            return (
              <div
                key={`${file.name}-${index}`}
                className="flex w-full items-center gap-3 rounded-md border border-(--color-grey-200) bg-(--color-grey-100) p-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-(--color-grey-0) text-(--color-grey-400) shadow-sm cursor-not-allowed">
                  <UploadIcon size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      autoFocus
                      className="w-full truncate rounded border border-(--color-brand-600) bg-(--color-grey-0) px-1.5 py-0.5 text-lg font-bold text-(--color-grey-700) outline-none"
                      value={renaming.name}
                      onChange={(e) => setRenaming({ index, name: e.target.value })}
                      onBlur={commitRename}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") commitRename();
                        if (e.key === "Escape") setRenaming(null);
                      }}
                    />
                  ) : (
                    <p
                      className="cursor-pointer truncate text-lg font-bold text-(--color-grey-700) hover:underline"
                      title={`${file.name} — click to rename`}
                      onClick={() => setRenaming({ index, name: file.name })}
                    >
                      {file.name}
                    </p>
                  )}
                  <p className="text-base font-semibold text-(--color-grey-500)">{formatBytes(file.size)}</p>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => removeFile(index)}
                  className="flex size-9 shrink-0 items-center justify-center rounded-md border border-(--color-grey-200) bg-(--color-grey-0) text-(--color-grey-500) transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <XIcon size={18} />
                </button>
              </div>
            );
          })}
          <p className="text-base font-semibold text-(--color-grey-500)">Drag and drop or click to replace</p>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
