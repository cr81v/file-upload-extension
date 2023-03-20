import React, { ChangeEvent, useEffect, useRef, useState } from "react"

import "~styles/base.css"
import "~styles/main.css"

import DataTable from "~components/data-table"
import FileInput from "~components/file-input"
import PanelWithHeaderFooter from "~components/panel-with-header-footer"

function IndexPopup() {
  const [data, setData] = useState("")
  const [file, setFile] = useState<File>()
  const reader = useRef(new FileReader())

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const [fileObj] = event.target.files
    if (!fileObj) return
    setFile(fileObj)
    reader.current.readAsText(fileObj)
  }

  useEffect(() => {
    reader.current.onload = () => {
      setData(reader.current.result as string)
    }
  }, [])

  const Header = () => {
    const title = file ? file.name : "Welcome. "
    return (
      <header className="px-2 py-3">
        <div className="-ml-2 -mt-3 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-2 mt-3">
            <h3 className="font-semibold leading-6 text-gray-900">{title}</h3>
          </div>
          <div className="ml-2 mt-3 flex-shrink-0">
            {!data && (
              <FileInput accept="text/csv" onChange={handleFileUpload} />
            )}
          </div>
        </div>
      </header>
    )
  }
  const Footer = () => (
    <footer className="flex justify-end items-center">
      <FileInput onChange={handleFileUpload} accept="text/csv" />
    </footer>
  )

  return (
    <PanelWithHeaderFooter
      header={<Header />}
      footer={data ? <Footer /> : null}>
      <div className="prose prose-sm">
        <DataTable data={data} />
      </div>
    </PanelWithHeaderFooter>
  )
}

export default IndexPopup
