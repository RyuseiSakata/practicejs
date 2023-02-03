{
  console.log("hellow");
  const text = document.getElementById('Text');
  text.value = '文章';
  let msg = document.getElementById('msg');
  let btn = document.getElementById('checkButton');
  let cbtn = document.getElementById('clearButton');
  checkButton.addEventListener('click',() =>{
    msg.innerText = text.value;
  });
  clearButton.addEventListener('click',() =>{
    msg.innerText = "";
  })

}
