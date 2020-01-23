const monthNumToName = {
  '01': 'Enero',
  '02' : 'Febrero',
  '03' : 'Marzo',
  '04' : 'Abril',
  '05' : 'Mayo',
  '06' : 'Junio',
  '07' : 'Julio',
  '08' : 'Agosto',
  '09' : 'Septiembre',
  '10' : 'Octubre',
  '11' : 'Noviembre',
  '12' : 'Diciembre',
}
export function getYearAndMonth(yearAndMonth){
  const [year , monthNum] = yearAndMonth.split('-')
  const month = monthNumToName[monthNum]
  return [year , month]
}
