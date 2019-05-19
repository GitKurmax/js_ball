document.body.addEventListener('click', function(event) {
  const ball = document.querySelector('#ball');
  const field = document.querySelector('#field');
  let fieldCoords = field.getBoundingClientRect();
  let ballTop = event.clientY - fieldCoords.top - 10 - ball.offsetHeight/2;
  let ballLeft = event.clientX - fieldCoords.left - 10 - ball.offsetWidth/2;  
  
  if (event.target !== field) {
    return;
  }
  
  if (ballTop < 0) {
    ballTop = 0;
  }
  
  if (ballLeft < 0) {
    ballLeft = 0;
  }

  if (ballTop + ball.offsetHeight > field.offsetHeight - 20) {
    ballTop = field.offsetHeight - 20 - ball.offsetHeight;
  }

  if (ballLeft + ball.offsetWidth > field.offsetWidth - 20) {
    ballLeft = field.offsetWidth - 20 - ball.offsetWidth;
  }

  ball.style.top = ballTop - +getComputedStyle(ball).marginTop.slice(0, -2) + "px";
  ball.style.left = ballLeft - +getComputedStyle(ball).marginLeft.slice(0, -2) + "px";
  
});
