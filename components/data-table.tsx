import React from "react"

import { getTableData } from "~lib"

export type DataTableProps = {
  data: string
}

const DataTable = ({ data }: DataTableProps) => {
  try {
    const [header, rows] = getTableData(data)
    return (
      <table>
        <thead>
          <tr>
            {header.split(",").map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr>
              {row.split(",").map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  } catch (e) {
    return null
  }
}
export default DataTable
