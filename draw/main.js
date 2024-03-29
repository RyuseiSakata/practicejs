window.addEventListener('load', () => {

  const canvas = document.querySelector('#draw-area');
  const context = canvas.getContext('2d');

  const canvasForWidthIndicator = document.querySelector("#line-width-indicator");
  const contextForWidthIndicator = canvasForWidthIndicator.getContext('2d');
  const lastPosition = {x: null,y:null};
  let isDrag = false;
  let currentColor = '#000000';

  let currentlinewidth = 1;

  function draw(x,y){
    if(!isDrag){
      return;
    }

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = currentLineWidth;
    context.strokeStyle = currentColor;

    if(lastPosition.x === null||lastPosition.y===null){
      context.moveTo(x,y);//クリックした地点
    }
    else{
      context.moveTo(lastPosition.x,lastPosition.y);
    }

    //ここ線と線を結ぶ
    context.lineTo(x,y);
    //ここで実際に線をひく
    context.stroke();

    lastPosition.x = x;
    lastPosition.y = y;

  }

  function showLineWidthIndicator(x,y){
    contextForWidthIndicator.lineCap = 'round';
    contextForWidthIndicator.lineJoin = 'round';
    contextForWidthIndicator.strokeStyle = currentColor;

    contextForWidthIndicator.lineWidth = 1;

//ここで前の処理を完全に消去
   contextForWidthIndicator.clearRect(0, 0, canvasForWidthIndicator.width, canvasForWidthIndicator.height);
   contextForWidthIndicator.beginPath();

   //円の描画３つ目の引数を書くことによって実際に描画する線と同じ太さになる
   contextForWidthIndicator.arc(x, y, currentLineWidth / 2, 0, 2 * Math.PI);
   //strokeを用いて描画
   contextForWidthIndicator.stroke();
  }



  function clear(){
    context.clearRect(0,0,canvas.width,canvas.height);
  }

  function dragStart(event){
    context.beginPath();
    isDrag = true;
  }

  function dragEnd(event){
    context.closePath();
    isDrag = false;

    lastPosition.x = null;
    lastPosition.y = null;
  }



  function initEventHndler(){
    const eraserButton = document.querySelector('#eraser-button');
    eraserButton.addEventListener('click', ()=> {
      currentColor = '#FFFFFF';
    });
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click',clear);

    const layeredCanvasArea = document.querySelector('#layerd-canvas-area');

    layeredCanvasArea.addEventListener('mousedown', dragStart);
    layeredCanvasArea.addEventListener('mouseup', dragEnd);
    layeredCanvasArea.addEventListener('mouseout', dragEnd);
    layeredCanvasArea.addEventListener('mousemove', event => {
      draw(event.layerX, event.layerY);
      showLineWidthIndicator(event.layerX, event.layerY);
    });
  }

  function initColor(){
    const joe = colorjoe.rgb('color-palette',currentColor);

    joe.on('done', color => {
      currentColor = color.hex();
    });
  }

  function initbig(){
    const textForCurrentSize = document.querySelector('#line-width');
    const rangeSelector = document.querySelector('#range-selector');
    currentLineWidth = rangeSelector.value;
    rangeSelector.addEventListener('input', event => {
      const width = event.target.value;

      // 線の太さを記憶している変数の値を更新する
      currentLineWidth = width;

      // 更新した線の太さ値(数値)を<input id="range-selector" type="range">の右側に表示する
      textForCurrentSize.innerText = width;
    });
  }
const btn = document.getElementById("changecolor");
const cp = document.getElementById("color-palette");
const pdf = document.getElementById("PDF");
let first = 1;
if(first == 1){
  cp.style.display = 'none';
  first =2;
}
btn.addEventListener('click',() => {

  if(cp.style.display == 'none' ){
  cp.style.display = 'block';
  console.log("こんばんは");
}
else{
  cp.style.display = 'none';
  console.log("こんにちは");

}
});

pdf.addEventListener("click",()=>{
  localStorage.setItem(localStorage.length.toString(), $("#layerd-canvas-area").val());
    $("#layerd-canvas-area").val("");
    showList();
})
function showList() {
  $("#list").html("");
  console.Log("adifa");
  for (let i = 0; i < localStorage.length; i++) {
    $("#list").append("<li class='list-group-item'><button class='btn btn-danger mr-2' onclick='deleteItem("+ localStorage.key(i) +")'><i class='fas fa-trash-alt'></i></button>" + localStorage.getItem(localStorage.key(i)) + "</li>");
  }
}

initEventHndler();
initColor();
initbig();
});
