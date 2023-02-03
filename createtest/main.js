{
  console.log("hellow");
  const text = document.getElementById('Text');
  text.value = '文章';
  let msg = document.getElementById('msg');
  let btn = document.getElementById('checkButton');
  let cbtn = document.getElementById('clearButton');
  let kaigyou = document.getElementById('kaigyouButton');
  let rbtn = document.getElementById('replaceButton');
  let abtn = document.getElementById('ansplaceButton');
  var questoin = [];
  var num = 1;

  checkButton.addEventListener('click',() =>{
    msg.innerText = msg.innerText+text.value;
    text.value = "";
  });
  clearButton.addEventListener('click',() =>{
    msg.innerText = "";
    num = 1;
    questoin = [];
  })
  kaigyou.addEventListener('click',() =>{
    msg.innerText = msg.innerText + '\n';
  })
  rbtn.addEventListener('click',() =>{
    forshow = replacer(msg.innerText,text.value,"mark3");

    msg.innerText = forshow;
  })
  abtn.addEventListener('click',() =>{
    msg.innerText = baplacer(msg.innerText,"(問題"+num+")","mark3");
    num++;
    console.log(questoin.length);
  })


  function replacer(str ,word ,att) {
    var SearchString = '('+word+')';
    var RegularExp = new RegExp(SearchString,"g");
    var ReplaceString = '<span class="' + att + '">$1</span>';
    questoin.push(word);
    var ReString = str.replace(RegularExp,"(問題"+(questoin.length)+")"/*,ReplaceString*/);
    console.log(questoin);
    return ReString;
  }

  function baplacer(str ,word ,att) {
    var SearchString = '('+word+')';
    var RegularExp = new RegExp(SearchString,"g");
    var ReplaceString = '<span class="' + att + '">$1</span>';

    var ReString = str.replace(RegularExp,questoin[0]/*,ReplaceString*/);
    questoin.shift();

    return ReString;
  }

}
