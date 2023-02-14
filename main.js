
  const form = document.querySelector('#quiz-form');
  
  let score = 0;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const answer1 = form.answer1.value;
    if (answer1 === 'B') {
      score++;
    }
    const answer2 = form.answer2.value;
    if (answer2 === 'A') {
      score++;
    }
    const answer3 = form.answer3.value;
    if (answer3 === 'D') {
      score++;
    }
    const answer4 = form.answer4.value;
    if (answer4 === 'B') {
      score++;
    }
    const answer5 = form.answer5.value;
    if (answer5 === 'B') {
      score++;
    }
    alert('Your score is ' + score + '/5');
    score = 0;
  });

 