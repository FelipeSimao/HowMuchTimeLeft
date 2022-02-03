
const day = 86400000; // quantidade de segundo em um dia


function countDays() {

  let dateInitial = new Date();S
  let dateEnd = new Date(document.querySelector('input').value)

  let timeLeft = dateEnd.getTime() - dateInitial.getTime()

  document.querySelector('p').innerText = `${Math.floor(timeLeft / day)} dia(s) restantes para dia: ${dateInitial.getDate()}`
}