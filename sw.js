/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","a85abaebf1bc63567bf7c0bd1265acbe"],["/2023/10/20/javase_字符串/index.html","593f4d4040e87398793489a6284b761a"],["/2023/10/20/javase_杂/index.html","d87788b16b739ee95835f7b2b6c79393"],["/2023/10/20/javase_集合基础/index.html","e03dc8170d0d95521b855755933c61dd"],["/2023/10/20/javase_面向对象基础/index.html","28d50b132292e1a5993fa55ab35d1f4c"],["/2023/10/21/javaweb_Servlet/index.html","930abc9b9cef1dfe7ce74028e753efbe"],["/2023/10/21/牛客小白月赛79/index.html","93b14e0da48769af84e503d367ed08c7"],["/2023/10/24/javaweb_HTTP/index.html","d41a7be4d80214797f0f378731a89fe3"],["/2023/10/24/javaweb_Request/index.html","ac890f78aed8e4222bee76859fd1e57a"],["/2023/10/25/javaweb_Response对象/index.html","64ecc7544aa38b014fc3135152187f47"],["/2023/10/25/javaweb_案例——用户登录/index.html","c85b6b69e4c8ece1125243b8185732b3"],["/2023/10/27/javase_修饰符/index.html","37eba5e8dbd457eaabff380beb68255a"],["/2023/10/27/javase_内部类/index.html","aacc9be232791e2a18fbe2068989d0fc"],["/2023/10/27/javase_多态/index.html","256ffe8323f290a53e170b3bc64d9180"],["/2023/10/27/javase_抽象类/index.html","44688f7bb02fab4626f1729076a4c546"],["/2023/10/27/javase_接口/index.html","f44b721f0d738fdde7d0937c5b5fc23b"],["/2023/10/27/javase_继承/index.html","949449ea73df5b9e50dc63618c701128"],["/2023/10/27/javaweb_servletContext/index.html","f927c80c4fc5237b12b470c60f3906e7"],["/2023/10/28/牛客小白月赛80/index.html","b127669795fe4f84710ad661a22e09e3"],["/2023/10/29/javase_常用API/index.html","ecc64c42fa7b70ce663bce277945f43b"],["/2023/10/29/javase_异常/index.html","ab98d8c2210504e7d38e3e8d849f2822"],["/2023/10/31/javase_集合进阶/index.html","e293a9cdead82bf1d429070c3b2592eb"],["/2023/10/31/javaweb_会话技术/index.html","0b68d3554a7b083acbfcf21965e54bae"],["/2023/11/03/javaweb_EL表达式/index.html","5b2f9222fc98b17c9fe702d6baa5e34c"],["/2023/11/03/javaweb_JSP/index.html","9223001c503c7afb1d6bc0d20fca602d"],["/2023/11/03/javaweb_MVC/index.html","815222a790b861fd89755663ea0bfcd0"],["/2023/11/04/pytorch入门/index.html","7fa9e679440bcead897900551a324788"],["/2023/11/05/javaweb_JSTL/index.html","9641010110383c89065c3a2eb23f32c1"],["/2023/11/05/javaweb_三层架构/index.html","55ea52276c54268d4398be65ae739108"],["/2023/11/07/图的两种存储方式/index.html","58fa134c9dc933479b9730b5d0de434a"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","9643ce18ecbd5076ed89c16f66a31de7"],["/2023/11/15/计算几何/index.html","d4ab5dbbde04df069b3800724bfd2403"],["/2023/11/16/javase_IO流/index.html","ecc3080e4e91b9e390a9dd5a233c3f2b"],["/2023/11/16/javase_多线程/index.html","b4f28017f35c3cd7e78b46f2b780d8fe"],["/2023/11/17/友谊赛题解/index.html","b421b4507cb76ad8e635f4ce9a7ac246"],["/2023/11/23/快读/index.html","b5e0c884727dc470365cc501bc285a84"],["/2023/11/24/javase_Lambda表达式/index.html","93a78716b53c04096c3e870c513ed989"],["/2023/11/24/javase_函数式接口/index.html","bf440d9c540f963ff171fbefdfe33d52"],["/2023/11/24/javase_接口组成更新/index.html","65c037b817772e049c00415c7dcc4ffd"],["/2023/11/24/javase_方法引用/index.html","ccb763ca16d9105d6cacca61c8b14f2a"],["/2023/11/24/javase_网络编程/index.html","14b61e6a72044637ab41f605fc29953d"],["/2023/11/28/CF_909_Div.3/index.html","04aa32f6d9781d582b098e8f0985efd1"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","57e1c0bd9453054a685d8ad919f98855"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","5eedcad932ab18c0df54b34186f8eec1"],["/2023/12/01/javase_Stream流/index.html","92797c9f1c9b2e2e910cf89018a33c07"],["/2023/12/09/javase-Junit单元测试/index.html","5c993c5b98383912c9df1a3751baa5ab"],["/2023/12/09/javase_反射/index.html","8e00129d67212e3a56e5e7850ce48633"],["/2023/12/09/新生杯/index.html","4ad02aebc1e8cbabd12fa28d1b84885e"],["/2023/12/15/javase_反射2/index.html","3ac3d645041dd0f55d4967da0e6f3428"],["/2023/12/15/javase_注解/index.html","5f3c6b8095b6ccd1757ac0900892bddd"],["/2024/03/02/等比数列求和/index.html","75cb2e3bc82b5a35057de49cac1b63fb"],["/2024/03/04/求组合数/index.html","13a0b25480a369d1262298b77056a1b4"],["/2024/03/05/ABC343/index.html","db15c2bc5a0871ad88921086bde02d65"],["/2024/03/06/大臣的旅费/index.html","0b1e13669ca65a5cfe00b3a3662b3445"],["/2024/03/07/smart-robot/index.html","27f44981470d5072634cb92da620a3f3"],["/2024/03/07/牛客周赛-35/index.html","58fcd9b35775ae6dfa90a77c049314c8"],["/2024/03/07/金牌厨师/index.html","97f4285f17bb35163f21beaad0498c50"],["/404/index.html","fd9758f7a5616524b62a5937e4554560"],["/about/index.html","ebeff7e93a31359cbf6a4d72ea138c4d"],["/archives/2023/10/index.html","25ae6e3a0a6ef182d63610d7bff99138"],["/archives/2023/10/page/2/index.html","8ccf57c7f4eff55501b21678cca02458"],["/archives/2023/10/page/3/index.html","9b1b40688acf16113821754a5242462c"],["/archives/2023/11/index.html","de95673789f80656fb8824a72408026f"],["/archives/2023/11/page/2/index.html","d225bc38954d742614437a93dcb873e2"],["/archives/2023/11/page/3/index.html","0a2cd83df6b2c3958b855595350c0e81"],["/archives/2023/12/index.html","1745d5e1bb0269a20e129cdeb19c1591"],["/archives/2023/index.html","1e14d08d2a34fde8a9192ed64ff373d3"],["/archives/2023/page/2/index.html","da4214de4a1f400e675ce0e5d6657a20"],["/archives/2023/page/3/index.html","db09f62dd8b4b58e5c414b2dd3bd14a7"],["/archives/2023/page/4/index.html","746e1b6fddb379ddaf2151262611a214"],["/archives/2023/page/5/index.html","29e42a712bbb92bcf97e8c3ea6d828a4"],["/archives/2024/03/index.html","b1f34a0e7ab360ca86ba3bfa3dc61e0e"],["/archives/2024/index.html","b0d162d94fee48f74d56895748dfc9ff"],["/archives/index.html","37e6c00d77bb8cd1e7f698d21153680c"],["/archives/page/2/index.html","8fef0d15b22aa1cf00e374a366819b3e"],["/archives/page/3/index.html","b1a5d9549a4642a8e3d39861d625151b"],["/archives/page/4/index.html","e425c51d5100dd8ddfa81a4223e7705b"],["/archives/page/5/index.html","cc029f1993b05aad38ef5f30a6cb5700"],["/archives/page/6/index.html","c6e9f5731557f00ae54c1660f07ceaa6"],["/categories/index.html","2ea010b2e4be03d3e5db42a935514881"],["/categories/javase/index.html","c5afb96997c659680bce942138e7398d"],["/categories/javase/page/2/index.html","b8eeff833aceb18c80642aec77ea2247"],["/categories/javase/page/3/index.html","9d8981c82fde0ce69bd6035cfe752d1e"],["/categories/javaweb/index.html","dd2311e5bb2c27b9f294177db22bfcd6"],["/categories/javaweb/page/2/index.html","083dd57c02902a05d3196a1971eb2b2b"],["/categories/pytorch/index.html","29c1851a79e76eea775cf8678c7f15b3"],["/categories/板子/index.html","eebacd592f40773ca147d71d8f93c779"],["/categories/水/index.html","18fee2a860fbc758b1a4f48a1b38c13e"],["/categories/简单算法/index.html","09b93ba452212eb14dacd21a78cd43f6"],["/categories/题解/index.html","8b0b422eb867a7f3529c218690d332f1"],["/categories/题解/page/2/index.html","8de389fd49a001422d27a18b480a2ceb"],["/contact/index.html","63f25bad91416f5736bf7005412a5b77"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","8e6c8bdfc8616e375a5a45c3cc69975a"],["/index.html","ff3b1de79e18f9788747a907ffd78bef"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","6e7b68558a0dc15acf6059e01df009ae"],["/page/3/index.html","b530caaa06a8ccbce2abbe154891fe87"],["/page/4/index.html","1ba9d868ea7e4406c60fcc9381dcda81"],["/page/5/index.html","c70c05b1267564e4170f41a5038883cb"],["/page/6/index.html","f63a6e1fa2855bd93dc16117ee56575b"],["/sw-register.js","c4b15405e17853513981d7d2529c9dc9"],["/tags/ABC/index.html","f30d7df343894e63932c0813fccf0836"],["/tags/codeforces/index.html","4865a50a005f488919146b2a97462a94"],["/tags/index.html","d1756c2ca59bd192b914cfaf913407cd"],["/tags/javase/index.html","596e3a7ae60e0d357f208cd5c5197f8a"],["/tags/javase/page/2/index.html","65f120f4b1690e3775e73cd64c549d43"],["/tags/javase/page/3/index.html","cc9fa4903ef99fd1ac3fe230ea644b0b"],["/tags/javaweb/index.html","a1a93a393900ea8809e523f7ca2999c0"],["/tags/javaweb/page/2/index.html","bc79cb9f53ddb41b8fd3cdf5bfd8034a"],["/tags/pytorch/index.html","7235527d010111b1efe40bd765ccae31"],["/tags/友谊赛/index.html","824807501b9e6d3ac2151ed9ec419d54"],["/tags/大臣的旅费/index.html","73cf23944620bce2807824c2afb42e1e"],["/tags/小白月赛/index.html","8bfef0b81972dd690104210b2784f23f"],["/tags/快读/index.html","447e9c7611da850cfa179aaa7ca1d623"],["/tags/新生杯/index.html","259c5d158438e051b179df3ab0bcec12"],["/tags/水/index.html","deff363d693b9f5e1648bd3f5522972a"],["/tags/求组合数/index.html","3075d6d90671ab0820aeb018014290d9"],["/tags/牛客周赛/index.html","867bca2b8516c3e0cd74f6f700d15acf"],["/tags/牛客寒假/index.html","a2bb4c0ee07c3e40ca915ece8462f400"],["/tags/等比数列求和/index.html","20654885eacb405fb54ae9073d256ca6"],["/tags/简单算法/index.html","21d4f67fd589bc64072d72a94dc82343"],["/tags/计算几何/index.html","7d3d0d9fc903f12ea7820c7dda12e4f7"],["/tags/题解/index.html","0b1a0ec3efb40228a354326201e50110"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
