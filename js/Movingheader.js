function Movingheader() {
<!--
  /***** init set S *****/
  // 定数定義
  const posImgChangePx   = 400;  // 吹き出しの画像を変えるpx位置
  const posDaimajinDefPx = -80;  // movingheaderの基本のTopのpx位置
  const posDaimajinMaxPx = 0;   // movingheaderが降臨できる限界のTopのpx位置
  var   documentElement  = null;  // スクロールを測定する要素
  var   flgImgChange     = false; // 画像切替確認用フラグ

  // 要素取得
  var getElmImgCampus   = document.getElementById('img-campus');
  var getElmFukidashi   = document.getElementById('fukidashi-box');
  var getElmScrollCount = document.getElementById('scroll-count');
  var getElmSubText     = document.getElementById('subtext');
  var getElmDaimajin    = document.getElementById('Movingheader');
  
    var ele = document.getElementById('kc01'); 
    if(ele.className=="kc01")
    {}
    else
    {
                return false;
    }

  
  // スクロール位置を測定する要素を設定
  if (navigator.userAgent.toLowerCase().match(/webkit|msie 5/)) {
    // Webkit系（Safari, Chrome, iOS）判定
    if(navigator.userAgent.indexOf('Chrome') != -1){
      // Chromeはhtml要素
      documentElement = document.documentElement;
    } else {
      // Chrome以外はbody要素
      documentElement = document.body;
    }
  } else {
    // IE（6以上）、Firefox、Operaはhtml要素
    documentElement = document.documentElement;
  }
  /***** init set E *****/
  
  /***** event func set S *****/
  // ウィンドウのスクロール量取得
  window.onscroll = function() {
    // スクロール位置を入力
    getElmScrollCount.innerHTML = Math.floor( documentElement.scrollTop );
    
    // 画像切替判定
    if( documentElement.scrollTop > posImgChangePx ){
      // 画像切替
      //getElmImgCampus.style.backgroundImage = 'url(https://incloop.com/wp-content/uploads/2017/03/爆発吹き出し.png)';
      // フラグ切替
      flgImgChange = true;
      // 文言追加
      getElmSubText.innerHTML = '<br><font color="red">追加文章<br></font>';
      // 文言の位置調整
      getElmFukidashi.style.top = '20px';
      // movingheaderの位置を調整
      var tempPos = posDaimajinDefPx + ( Math.floor( documentElement.scrollTop ) - posImgChangePx );
      // movingheaderの降臨位置が最大の値以上？
      if( tempPos >= posDaimajinMaxPx ) {
        // movingheaderの位置を変更
        getElmDaimajin.style.top = posDaimajinMaxPx + 'px';
      } else {
        getElmDaimajin.style.top = tempPos  + 'px';
      }
    } else if( ( documentElement.scrollTop <= posImgChangePx ) && ( flgImgChange == true ) ) {
      // 画像切替
      //getElmImgCampus.style.backgroundImage = 'url(https://incloop.com/wp-content/uploads/2017/04/02_雲みたいな吹き出し.png)';
      // フラグ切替
      flgImgChange = false;
      // 文言削除
      getElmSubText.innerHTML = '';
      // 文言の位置調整
      getElmFukidashi.style.top = '60px';
    }
    if( documentElement.scrollTop < 100 )
    {
    	getElmDaimajin.style.top =  '-80px';
    }
  };
  /***** event func set E *****/
  
  /***** func set S *****/
  function DaimajinDown(){
    getElmDaimajin.style.display= 'none';
  }
  /***** func set E *****/
// -->

}

Movingheader();