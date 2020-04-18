import numeral from 'numeral'

const formatNumber = value => numeral(value).format('0,0')

export { formatNumber }
