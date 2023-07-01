export const debounce = (func: () => any, delay: number) => {
    let timer: NodeJS.Timeout
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => func.apply(this, args), delay)
    }
  }