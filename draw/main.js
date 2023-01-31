window.addEventListener('load', () => {
  const canvas = document.querySelector('#draw-area');
  const context = canvas.getContext('2d');
  const lastPosition = {x: null,y:null};//canvas上のマウスのxy座標これは構造体の宣言っぽい

  let isDrag = false;

  function draw(x,y){
    if(!isDrag){
      return;
    }

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 5;
    context.strokeStyle = 'black';

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
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click',clear);

    canvas.addEventListener('mousedown',dragStart);
    canvas.addEventListener('mouseup',dragEnd);
    canvas.addEventListener('mouseout',drawEnd);
    canvas.addEventListener('mousemove',(event) => {
      draw(event.layerX, event.layerY);
    });
  }
initEventHndler();
});
