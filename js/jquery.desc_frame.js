;(function($){
  $.fn.discriptsions = function(options){

    var elements = this;
    var datapara = [];//data属性から得る値の配列
    elements.each(function(i){
      var px = [];//this毎に小分けする配列を生成
      datapara.push(px);//this毎に小分けする配列を大元の配列にプッシュ

        //data属性から値を取得し、パラメータの配列を生成
      $(this).find('.desc_circle').each(function(l,d){
        //.desc_circleクラスの値 data属性から得た値を代入
        var rp = {
          //.desc_circle
          top:$(this).data('top'),//縦位置
          left:$(this).data('left'),//横位置
          width:$(this).data('width'),//幅
          height:$(this).data('height'),//高さ
          border_radius:$(this).data('border_radius'),//ボーダーの角
          border_width:$(this).data('border_width'),//ボーダーの太さ
          border_color:$(this).data('border_color'),//ボーダーの色
          border_style:$(this).data('border_style'),//ボーダーのスタイル
          //.desc_number
          num_top:$(this).next().data('num_top'),//ナンバーの縦位置
          num_left:$(this).next().data('num_left'),//ナンバーの横位置
          font_size:$(this).next().data('font_size'),//フォントのサイズ
          font_color:$(this).next().data('font_color'),//フォントの色
          background:$(this).next().data('background'),//バックグラウントの色
          num_radius:$(this).next().data('num_radius')//角
        };

        //データ初期値
        var df = {
          //.desc_circle
          top:1,//縦位置
          left:1,//横位置
          width:'auto',//幅
          height:10,//高さ
          border_radius:10,//ボーダーの角
          border_width:2,//ボーダーの太さ
          border_color:'#666',//ボーダーの色
          border_style:'solid',//ボーダーのスタイル
          //.desc_number
          num_top:3,
          num_left:0.5,
          font_size:10,//フォントのサイズ
          font_color:'#FFF',//フォントの色
          background:'#666',//バックグラウントの色
          num_radius:50//角
        }//$.fn.discriptsions_data_defaults = {

        var rx =$.extend({},df,rp);
        //this毎の小分けの配列にオブジェクトを追加
        //px[l]=rp;
        px[l]=rx;

      });//$(this).find('.desc_circle').each(function(l){

      //パラメータセット
      var dataparam = datapara;//データ
      var genparam= $.extend({},$.fn.discriptsions_general_defaults,options);//全体設定

      //親要素のポジションを相対に設定
      $(this).css({
        'position':'relative',
      });
      //イメージ要素のサイズやレスポンシブを設定
      $(this).find('img').css({
        'width':$(this).find('img').data('width'),
        'height':$(this).find('img').data('height')
      });


      for(var n=0; n<dataparam[i].length; n++){
          //サークル部分のパラメータを設定
          $(this).find('.desc_circle').eq(n).css({
            'position':'absolute',//絶対位置
            'top':dataparam[i][n].top+'%',
            'left':dataparam[i][n].left+'%',
            'width':dataparam[i][n].width+'%',
            'height':dataparam[i][n].height+'%',
            'border-radius':dataparam[i][n].border_radius+'px',
            'border-width':dataparam[i][n].border_width+'px',
            'border-color':dataparam[i][n].border_color,
            'border-style':dataparam[i][n].border_style
        });//$(this).find('.desc_circle').eq(n).css({
        //ナンバー部分のパラメータを設定
          var nt = dataparam[i][n].top-dataparam[i][n].num_top;
          var nl = dataparam[i][n].left-dataparam[i][n].num_left;
          //var nt = dataparam[i][n].num_top;
          //var nl = dataparam[i][n].num_left;
            $(this).find('.desc_number').eq(n).css({
            'position':'absolute',//絶対位置
            'text-align':'center',//テキスト位置
            'padding':'3px 7px',//余白
            'top':nt+'%',
            'left':nl+'%',
            //'line-height':dataparam[i][n].top+'px',
            'font-size':dataparam[i][n].font_size+'px',
            'color':dataparam[i][n].font_color,
            'border-radius':dataparam[i][n].num_radius+'%',
            'background':dataparam[i][n].background
          });

      }//for(var n=0; n<para[i].length; n++){

        //アクションを有効にした場合、一時的に透明、表示の設定
        function action_set(n){
          $(elements).find('.desc_circle').css('opacity',n);
          $(elements).find('.desc_number').css('opacity',n);
        }

        //ホバーさせた場合の設定
        if(genparam.action=='on'){
          action_set('0');

          $(elements).find('.desc_circle').mouseover(function(){
            $(this).css({
              'opacity':'1',
              'transition':genparam.transition+'s'
            });
            $(this).next().css({
              'opacity':'1',
              'transition':genparam.transition+'s'
            });
          });//$('.desc_circle').hover(function(){

        }else if(genparam.action=='toggle'){
          action_set('0');

          $(elements).find('.desc_circle').mouseover(function(){
            $(this).css({
              'opacity':'1',
              'transition':genparam.transition+'s'
            });
            $(this).next().css({
              'opacity':'1',
              'transition':genparam.transition+'s'
            });
          });//$('.desc_circle').hover(function(){
            $(elements).find('.desc_circle').mouseleave(function(){
              $(this).css({
                'opacity':'0',
                'transition':genparam.transition+'s'
              });
              $(this).next().css({
                'opacity':'0',
                'transition':genparam.transition+'s'
              });
            });//$('.desc_circle').hover(function(){
        }else{
          action_set('1');
        }

    });//function discriptsions(){

        return this;
  }//$.fn.discriptsions = function(){


  //全体初期値
  $.fn.discriptsions_general_defaults = {
    action:'off',
    transition:'0.5'
  }//$.fn.discriptsions_general_defaults = {

})(jQuery);
