{
  console.log("hellow");
  const text = document.getElementById('Text');
  text.value = '文章';
  let msg = document.getElementById('msg');
  let btn = document.getElementById('checkButton');
  checkButton.addEventListener('click',() =>{
    msg.innerText = text.value;
  });


}
