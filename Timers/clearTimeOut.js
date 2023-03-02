// Cancxelar um time out

const timeout = 4000
const finished = () => console.log('FInished')

let time = setTimeout(finished, timeout)
clearTimeout(time)