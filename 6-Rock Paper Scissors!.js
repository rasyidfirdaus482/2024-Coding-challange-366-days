const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));