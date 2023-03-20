import React from "react"

export type FileInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  accept?: string
}

const FileInput = ({ accept, onChange, label }: FileInputProps) => {
  return (
    <div className="flex text-zinc-600">
      <label
        htmlFor="file-upload"
        className="relative rounded bg-indigo-600 py-1 px-2 text-xs
           font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <span>{label ?? "Upload a file"}</span>
        <input
          id="file-upload"
          name="file-upload"
          onChange={onChange}
          type="file"
          className="sr-only"
          accept={accept}
        />
      </label>
    </div>
  )
}

export default FileInput
