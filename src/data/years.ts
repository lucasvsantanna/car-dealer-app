export const modelYearsOptions = () => {
  const thisYear = new Date().getFullYear()
  const years = []

  for (let i = 2015; i <= thisYear; i++) {
    years.push({ value: i, label: i })
  }

  return years
}
