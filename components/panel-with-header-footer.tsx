import React from "react"

export type PanelWithHeaderFooterProps = {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}

const PanelWithHeaderFooter = ({
  footer,
  header,
  children
}: PanelWithHeaderFooterProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      {header ?? (
        <div className="px-4 py-3">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h3 className="font-semibold leading-6 text-gray-900">
                File upload
              </h3>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <button
                type="button"
                className="whitespace-nowrap rounded bg-indigo-600 py-1 px-2 text-xs font-semibold
                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                pick a file
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 py-3 sm:p-6">{children}</div>
      <div className="px-4 py-2 sm:px-6">{footer}</div>
    </div>
  )
}

export default PanelWithHeaderFooter
