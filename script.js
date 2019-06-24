document.querySelector('#field').addEventListener('click', function(event) {
  const ball = document.querySelector('#ball');
  const field = document.querySelector('#field');
  let fieldCoords = field.getBoundingClientRect();
  let borderWidth = field.offsetWidth - field.clientWidth;
  let ballTop = event.clientY - fieldCoords.top - borderWidth/2 - ball.offsetHeight/2;
  let ballLeft = event.clientX - fieldCoords.left - borderWidth/2 - ball.offsetWidth/2;  
  
  ballTop = Math.max(ballTop, 0);
  ballLeft = Math.max(ballLeft, 0);

  if (ballTop + ball.offsetHeight > field.offsetHeight + +getComputedStyle(ball).marginTop.slice(0, -2)) {
    ballTop = field.offsetHeight + +getComputedStyle(ball).marginTop.slice(0, -2) - ball.offsetHeight;
  }

  if (ballLeft + ball.offsetWidth > field.offsetWidth + +getComputedStyle(ball).marginLeft.slice(0, -2)) {
    ballLeft = field.offsetWidth + +getComputedStyle(ball).marginLeft.slice(0, -2) - ball.offsetWidth;
  }

  ball.style.top = ballTop - +getComputedStyle(ball).marginTop.slice(0, -2) + "px";
  ball.style.left = ballLeft - +getComputedStyle(ball).marginLeft.slice(0, -2) + "px";
  
});
