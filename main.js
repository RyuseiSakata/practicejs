'use strict'

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  btn.addEventListener('click', () => {
    result.textContent = 'hit!';
  });
}
