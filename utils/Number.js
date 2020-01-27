export const _changeFormatToK = (num) => {
    return String(parseInt(num.split('.').join(''))/1000) + 'K' ;
}

export const _changeFormatToVND = (sum) => {
    return sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ';
}