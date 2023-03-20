export const getTableData = (csv: string) => {
  if (!csv) return null
  const [header, ...rows] = csv.split("\n")
  return [header, rows] as [string, string[]]
}
