/* JavaScript for timgod.com */

/* output birds canvas html text */
function birdsCanvas() {
  var htmlText = ' \
<div class=\"bg\"> \
  <div id=\"birds-canvas-holder\"></div> \
</div> \
<script type=\"text/javascript\" src=\"http://src.timgod.com/js/three.min.js\"></script> \
<script type=\"text/javascript\" src=\"http://src.timgod.com/js/CanvasRenderer.js\"></script> \
<script type=\"text/javascript\" src=\"http://src.timgod.com/js/Projector.js\"></script> \
<script type=\"text/javascript\" src=\"http://src.timgod.com/js/TweenMax.min.js\"></script> \
<script type=\"text/javascript\" src=\"http://src.timgod.com/js/main-birds.min.js\"></script> \
';
  var sys = getBrowserInfo();
  if (!isMobile()) {
    // 暂时在使用chrome和Safari内核的浏览器上"飞鸟"的显示效果比较好
    if (sys.browser == 'chrome' || sys.browser == 'safari') {
      document.write(htmlText);
    }
  }
};

/* js for background music control */
var music_playing = !1;
function music_control() {
  if (music_playing) {
    music_pause();
  } else {
    music_play();
  }
}
function music_play() {
  document.getElementById("media").play();
  music_playing = !0;
  $("#audio_btn").addClass("rotate");
}
function music_pause() {
  document.getElementById("media").pause();
  music_playing = !1;
  $("#audio_btn").removeClass("rotate");
}
function getMusicUrl() {
  var musicList = [
    'AlisonKrauss-ItWouldntHaveMadeaDifference.mp3',
    'DanielPowter-Cupid.mp3',
    'dream-it-possible.mp3',
    'Maroon5-IfINeverSeeYourFaceAgain.mp3',
    'TannerTownsend-LoveStoryMeetsVivalaVida.mp3',
    '夢灯籠(《你的名字。》动画电影片头曲).mp3',
    '林俊杰-女儿情(Live).mp3',
    '林俊杰-爱要怎么说出口(Live).mp3',
    '汪晨蕊-你还要我怎样(Live).mp3',
    '没什么大不了(《你的名字。》动画电影片尾曲).mp3',
    '火花(《你的名字。》动画电影插曲).mp3',
    '网络歌手-火影疾风.mp3',
    '薛之谦-我好像在哪见过你.mp3',
    '陈冰-一个人(Live).mp3',
    '黄雅莉-丑八怪(Live).mp3'
  ];
  var songNum = musicList.length;
  var idx = 0;
  var musicUrl = 'http://src.timgod.com/www/media/background/';

  idx = Math.round((Math.random()*1000))%songNum;
  musicUrl += musicList[idx];

  $("#media").attr("src", musicUrl);
}
function music_start() {
  getMusicUrl();
  if (isMobile()) {
    // doing nothing
  } else {
    music_play();
  }
}

/* js for word animate */
$(document).ready(function () {
  var delay = 1;
  var DELAY_STEP = 200;
  var animationOptions = { opacity: 1, top: 0};

  $('h1').animate(animationOptions).promise()
    .pipe(animateMain)
    .pipe(animateLocationIcon);

  function animateMain() {
    var dfd = $.Deferred();
    var els = $('.animate-init');
    var size = els.size();

    els.each(function (index, el) {
      delay++;
      $(el).delay(index * DELAY_STEP)
        .animate(animationOptions);
      (size - 1 === index) && dfd.resolve();
    });
    return dfd.promise();
  }

  function animateLocationIcon() {
    $('.location-icon').delay(delay * DELAY_STEP).animate({
      opacity: 1,
      top: 0
    }).promise().done(animationQuote);
  }

  function animationQuote() {}
});

/* js for Baidu Analytics */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e154f9e9c8bd3dcfb952ab9af82b75bf";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

/* js for Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73230823-1', 'auto');
ga('send', 'pageview');

/* js for utility */
function isMobile() {
    var a = !1;
    return function (b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), a
}

function isWeixin() {
    var a = navigator.userAgent.toLowerCase();
    return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}

function getBrowserInfo(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re =/(chrome|msie|version|firefox|opera).*?([\d.]+)/;
    var m = ua.match(re);
    if (m == null) {
        m = ['others/unknown', 'others', 'unknown'];
    }
    Sys.browser = m[1].replace(/version/, "safari");  // 浏览器名称
    Sys.ver = m[2];  // 浏览器版本
    return Sys;
}
