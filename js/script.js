jQuery(function ($) {


  // $(function () {
  //   $("#audio_player").jPlayer({
  //     /* イベントハンドラ */
  //     ready: function () {
  //       /* 再生するメディアの定義 */
  //       $(this).jPlayer("setMedia", {
  //         mp3: "test.mp3",    /* mp3 */
  //       }).jPlayer("play"); /* 自動再生 */
  //     },
  //     /* プレロード（デフォルトは'metadata'、プレロードする場合は'auto'） */
  //     preload: "auto",
  //     /* 音量（デフォルトは0.8、指定可能な値の範囲は0～1） */
  //     volume: 0.5,
  //     /* ミュートの有無（デフォルトはfalse）*/
  //     muted: false,
  //     /* 背景色*/
  //     backgroundColor: "#ff6699",
  //     /* エラーアラート表示の有無（デフォルトはfalse） */
  //     errorAlerts: false,
  //     /* 警告アラート表示の有無（デフォルトはfalse） */
  //     warningAlerts: false,
  //     /* 最後まで再生された時 */
  //     ended: function (event) {
  //       /* また再生する */
  //       //$(this).jPlayer("play");
  //     },
  //     /* Jplayer.swfのパス */
  //     swfPath: "/play/jquery.jplayer.swf",
  //     /* ソリューションの優先度（デフォルトは\"html, flash\") */
  //     solution: 'html, flash',
  //     /* フォーマット（デフォルトはmp3、カンマ区切りで複数指定可、優先度は左が高）*/
  //     /* 指定可能なフォーマットは、mp3, m4a, m4v, oga, ogv, wav, webma, webmv */
  //     /* 音声ならmp3 or m4a、動画ならm4v */
  //     supplied: "mp3, m4a, oga",
  //     wmode: "window"
  //   })
  //     .bind($.jPlayer.event.play, function () {
  //       $(this).jPlayer("pauseOthers");
  //     });
  // });

  // $(function () {
  //   $('#jquery_jplayer_1').jPlayer({
  //     ready: function () {
  //       $(this).jPlayer('setMedia', {
  //         mp3: 'test.mp3' // MP3 オーディオ・ファイルへのパス
  //       });
  //     },
  //     ended: function (event) {
  //       $(this).jPlayer('play');
  //     },
  //     swfPath: "/play/jquery.jplayer.swf",
  //     supplied: 'mp3',
  //   });
  //   $('#jplayer_inspector').jPlayerInspector({ jPlayer: $('#jquery_jplayer_1') });
  // });

  $('#player').jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: 'test.mp3' //再生するMP3のパスを指定します
      });
    },
    loop: false, // ループ再生をするかどうかの設定
    volume: 0.5, // ボリュームの設定 0~1で指定します
    swfPath: "/play/jquery.jplayer.swf",
    ssupplied: 'mp3', //再生するメディアの設定
    play: function () { // 再生時の処理
      $('.btn').addClass('play').text('停止');
    },
    ended: function () { // 終了時の処理
      $('.btn').removeClass('play').text('再生');
    }
  });
  $('.btn').on('click', function () {
    if ($(this).hasClass('play')) { // 停止ボタンを押した時の処理
      $('.btn').removeClass('play').text('再生');
      $('#player').jPlayer('stop');
    } else { // 再生ボタンを押した時の処理
      $(this).text('停止');
      $('#player').jPlayer('play');
    }
  });
});