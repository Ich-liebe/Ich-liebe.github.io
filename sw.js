/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","0b6f275ef02c6bc181d6dd7b0b44e373"],["/2023/10/20/javase_字符串/index.html","79b0b285916d971dd37a2beb087d9132"],["/2023/10/20/javase_杂/index.html","2f7825a9858fcc62bf3e59de5b550769"],["/2023/10/20/javase_集合基础/index.html","315e13957fe123b07393975d8e486827"],["/2023/10/20/javase_面向对象基础/index.html","9b6e5022e71a2238fbe315987a4f1177"],["/2023/10/21/javaweb_Servlet/index.html","db8719c27fb6460906f1f344b714bd59"],["/2023/10/21/牛客小白月赛79/index.html","1d368fd56fc039fe65ab16c9d57e73df"],["/2023/10/24/javaweb_HTTP/index.html","a15b5ec7faa2ea166a932dcce2916f81"],["/2023/10/24/javaweb_Request/index.html","bf9f07586c71d324bc61a94e35559d73"],["/2023/10/25/javaweb_Response对象/index.html","007d8eb32b3ebd048bc96baba8a33d9b"],["/2023/10/25/javaweb_案例——用户登录/index.html","516fbbe3bfc410205b2cf9abb2958905"],["/2023/10/27/javase_修饰符/index.html","f549a65dc5bd5196b156b63e902e2c11"],["/2023/10/27/javase_内部类/index.html","845110226e462a92b170a3abde1185b7"],["/2023/10/27/javase_多态/index.html","0460b71bc768277ab3c1e4b087273d39"],["/2023/10/27/javase_抽象类/index.html","78748a2433b348619510c30f1b4a89bb"],["/2023/10/27/javase_接口/index.html","e3d5083d8fcafa76db63e60dc2e71867"],["/2023/10/27/javase_继承/index.html","568e95c3976d10814a5b7ece7c2e4482"],["/2023/10/27/javaweb_servletContext/index.html","e06f870565569ae02e156446e7e92fa3"],["/2023/10/28/牛客小白月赛80/index.html","f69d2f40d2cab423f10ed8f2c849116a"],["/2023/10/29/javase_常用API/index.html","d7a351593dccd24babeafa67a11e3b91"],["/2023/10/29/javase_异常/index.html","a6794e7255b65d6ce6435917ddcf8a4c"],["/2023/10/31/javase_集合进阶/index.html","c1079f57bf80b5ecce551cef291ecba4"],["/2023/10/31/javaweb_会话技术/index.html","a38bde805d5efbc6645cd57db9b59102"],["/2023/11/03/javaweb_EL表达式/index.html","c01d45e97ddf2935281fe29f9cdad053"],["/2023/11/03/javaweb_JSP/index.html","083abcc12ab37927041ae0e8c9448a0b"],["/2023/11/03/javaweb_MVC/index.html","2005afb46faaf7f6ce0550da371f596d"],["/2023/11/04/pytorch入门/index.html","b43bd09e700edb5f1d57ec4e052d59d0"],["/2023/11/05/javaweb_JSTL/index.html","62892bad465db33208fd4ab2f580837d"],["/2023/11/05/javaweb_三层架构/index.html","7121814906e631abc7a049c0fd31a275"],["/2023/11/07/图的两种存储方式/index.html","761d51d4fd9f649a19b233df746e799a"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","14b9b6dd49d28e436c62bdecb7142c5e"],["/2023/11/15/计算几何/index.html","3b61eabccb70ba1cf2782e085726350d"],["/2023/11/16/javase_IO流/index.html","4cd5742270515d239486dde98e736f7a"],["/2023/11/16/javase_多线程/index.html","12ac2d28ae72cbb057c5d6d14df1aac2"],["/2023/11/17/友谊赛题解/index.html","5ac03b3720124324a469142baf27dca6"],["/2023/11/23/快读/index.html","2b74d6edb30112928d8efad3dac83464"],["/2023/11/24/javase_Lambda表达式/index.html","8a446790e935209c434b5eb7d5a90896"],["/2023/11/24/javase_函数式接口/index.html","ccbc15253005b30e3ced7e305eb85e3a"],["/2023/11/24/javase_接口组成更新/index.html","cf534f269c09e1dad101229d1fb01de4"],["/2023/11/24/javase_方法引用/index.html","a72761c9914cd9d05d9029524c060497"],["/2023/11/24/javase_网络编程/index.html","ae2b65423b6edd229ad2d0bfe2420d02"],["/2023/11/28/CF_909_Div.3/index.html","ad1f668a06fc2df151f108da0985c614"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","aff99cc919cf9cc593f59a3812c23255"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","aba6ac07486943dbf95247118212619f"],["/2023/12/01/javase_Stream流/index.html","b91fa380c83b8e05d28c39a8fb7117d7"],["/2023/12/09/javase-Junit单元测试/index.html","4df1381f43fea8b9edbc9c994ff43dde"],["/2023/12/09/javase_反射/index.html","2afce3e5f2371f4d1b500adf97175590"],["/2023/12/09/新生杯/index.html","2872fe78706b4ce8daf23f1fd26d4bb0"],["/2023/12/15/javase_反射2/index.html","274c8672747fbada416886ed552d4234"],["/2023/12/15/javase_注解/index.html","8f23374420674956555286be10695fc1"],["/2024/03/02/等比数列求和/index.html","16b9b1782a18b3db333c6dd71845f68e"],["/2024/03/04/求组合数/index.html","88817f84a92a8751c55add3f9705a4e0"],["/2024/03/05/ABC343/index.html","7c434871aa8e270ac0e682b9ddf5b3bd"],["/2024/03/06/大臣的旅费/index.html","e3a5241e8804e39e6d135ae17a8c69ba"],["/2024/03/07/smart-robot/index.html","be0d66f59394fa5b3a2fe4b440d53f68"],["/2024/03/07/牛客周赛-35/index.html","297aa69c33b3cc1cb3400d8d7544c611"],["/2024/03/07/金牌厨师/index.html","d16ce8ed59f8eb4e0c07be1af3b5589f"],["/2024/03/15/2024-3-15-cf/index.html","3ae98c578563b5dd5f038ec6202fa3b8"],["/2024/03/16/edu-163/index.html","526bf857ddf9e55cc0f581d0f9ed890e"],["/2024/03/17/cf-934-div2/index.html","79430fb65cb07e8d828debdd8956be1a"],["/2024/04/09/bean-基础配置与实例化/index.html","851e21a4237fb7309dcf108b5add042a"],["/2024/04/09/bean-生命周期与管理/index.html","4e3aee37289c73f66fd8000d949c2ac4"],["/2024/04/09/spring-DI入门案例/index.html","c17521b32261e96db1ad596670e6fd6c"],["/2024/04/09/spring-IoC入门案例/index.html","17e1d3c83b266e9e56d77d1f3949ec63"],["/2024/04/09/spring-加载properties文件/index.html","d5accb5c1ed8be52e9d3a4d4173d08e2"],["/2024/04/09/spring-容器/index.html","7b8628ec2654eaea34b27b5d7f11549b"],["/2024/04/09/spring-核心概念/index.html","cc45690bd4868901c0edca2e8727210c"],["/2024/04/09/spring-案例-数据源对象管理/index.html","c0c53b1322e57661ee7c1ae7ec2f8d27"],["/2024/04/09/spring-注解开发/index.html","52058034462c99adddec8a5d5d40043f"],["/2024/04/09/spring-第三方bean管理和依赖注入/index.html","e8011849dca359c5fb4d338d01acf1c3"],["/2024/04/09/spring-自动装配/index.html","c01e46cde4f92f1a2222a25c03a88e89"],["/2024/04/09/spring依赖注入/index.html","40313c611ad26e4193f3e8246648671d"],["/2025/11/22/新/index.html","549212603bc756afe5b39763f693ae95"],["/404/index.html","a5678eb1abf274832a297958b108ebb9"],["/about/index.html","056b55ad7c49341904f7a4d91d87bb60"],["/archives/2023/10/index.html","581a77d979a382f92e497ab7edadbec5"],["/archives/2023/10/page/2/index.html","8893c35135f4eefcb82775850f618c6b"],["/archives/2023/10/page/3/index.html","dcfb99e6e68c4d1117d02602f5eae308"],["/archives/2023/11/index.html","f21fdc5b5a2451e67f8d7f8c35d72e88"],["/archives/2023/11/page/2/index.html","38b3e10022f9b4d3cc0bac3aa546719d"],["/archives/2023/11/page/3/index.html","3dea09b7b8c729bea7a598d2adaa0a4b"],["/archives/2023/12/index.html","9a2e818ab6b224e41527dc46d9f1c9ce"],["/archives/2023/index.html","47d1c46e0d7c6ab0f000eb37c62ffab5"],["/archives/2023/page/2/index.html","559fb29a95b25494cdf4232ef7b5490f"],["/archives/2023/page/3/index.html","5c25a2f297a20ffc4ab9b3d741f2f1ce"],["/archives/2023/page/4/index.html","34fdf80bdfca8efba562a88dc80ffd2c"],["/archives/2023/page/5/index.html","eb19a4afefbc822cf4ff3214ff236bea"],["/archives/2024/03/index.html","aad9f6e63f6b249b0e1d8af8ae9bb958"],["/archives/2024/04/index.html","f73317ad771c393fb80588f791a346b3"],["/archives/2024/04/page/2/index.html","1c1c4bec1080095c737d5113e282f0c9"],["/archives/2024/index.html","0a1b97f0aac378f1eaff9d3be47c0d33"],["/archives/2024/page/2/index.html","c6f5034e1d90fe6e29ee50243ceb9082"],["/archives/2024/page/3/index.html","253a3fbd762c08c9920c709ae7578a2d"],["/archives/2025/11/index.html","4e7cd76d6bfc96bd82e37a1fb0bae30d"],["/archives/2025/index.html","f3cb2dfbfe36de2190cbb4c6f969b439"],["/archives/index.html","88b58f05e6612dece82be0fabce88891"],["/archives/page/2/index.html","32eb0fcf2e370a21f6cf064579b85b5d"],["/archives/page/3/index.html","bcf572082e6fa5949369b6539891886e"],["/archives/page/4/index.html","2bdcdd1ef46f671b6a9f75a9635857c6"],["/archives/page/5/index.html","747e347830782709e211d334e73161fe"],["/archives/page/6/index.html","46897a9678aebdfc5d8872681e65feb6"],["/archives/page/7/index.html","f3848d154a9ccc914bb6fe129414be60"],["/archives/page/8/index.html","60b683cccdd43b47b9c5e07ce35792de"],["/categories/index.html","5e10a223a9db7d8ecc9398c3fdc4f0e6"],["/categories/javase/index.html","c1360bd17e34206eeac4707fd85bf65b"],["/categories/javase/page/2/index.html","bffe5e0cd5309698c36aac85b7e8796b"],["/categories/javase/page/3/index.html","d72af98093b2c300207165dbc97e0648"],["/categories/javaweb/index.html","3565c9601d268848da3e065571627ff1"],["/categories/javaweb/page/2/index.html","ec497ce3587c03bfe79e3c0e7168f37d"],["/categories/pytorch/index.html","11f73b77eff5c5a8fcbcf88a1ac88ffb"],["/categories/spring/index.html","41e8305d3e4f41d83c341a7f09d70189"],["/categories/spring/page/2/index.html","530885fe44035b91b2a1244b3acb7fdd"],["/categories/板子/index.html","e7737a8d68c8c4858a657fdd641a11d3"],["/categories/水/index.html","97364e2173fc8c27f0072bd916bc1d7c"],["/categories/简单算法/index.html","4893ea5591f37f4f2b25964c50dde375"],["/categories/题解/index.html","ad66c242b111e5468ba69d6d12e2076d"],["/categories/题解/page/2/index.html","d7a2d50a3c704f2877f755159504a212"],["/contact/index.html","da4f2d6ccb5e87f822d535a17a6b755b"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","acb5dcd58944757cb97ff794bece24aa"],["/index.html","886aedbdeb9eb0988d67778a09f2aeca"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","2f501b041e60a9744e4018b1b155c92a"],["/page/3/index.html","131ab496f26dbbc679bbc02163b102e4"],["/page/4/index.html","867d3141d4f98b29dc5e52c8bbb9d601"],["/page/5/index.html","fcef07b4b9c67aa515f236a2017d56ae"],["/page/6/index.html","c56d40a3ff416d1369251a5be9bf6af6"],["/page/7/index.html","31b7b880bb6f42c100f1a0b1e760b255"],["/page/8/index.html","3da2df7be4d1c6b58858f791c520b30b"],["/sw-register.js","a1473de4e6d673aeb4dbde45bafaf028"],["/tags/2023牛客寒假/index.html","6d30d4b448b5ca8214412cde3a5fa4c8"],["/tags/ABC/index.html","5631522d153a022230de1fb66b9d9e4d"],["/tags/bean/index.html","c55b331a6b0f9ee1925028bc7ab059d9"],["/tags/cf/index.html","a1633239181804c04b6c6fd252f4a1a9"],["/tags/index.html","932ac845c4f551bde95645db302c7551"],["/tags/javase/index.html","320bd0658624de23bd92a63ff65f396a"],["/tags/javase/page/2/index.html","a5b7a487b04178d616a533e509339c18"],["/tags/javase/page/3/index.html","da6667280891d411bf9e3ce9f37d05eb"],["/tags/javaweb/index.html","d7db2f16d4ea2584fd71d72b9866e7e4"],["/tags/javaweb/page/2/index.html","fcb76eab827dc163305445fc8cbfdc09"],["/tags/pytorch/index.html","36e29b0c0261ed79a95060c2f5cad9b6"],["/tags/spring/index.html","815e9a6c64351b1301bde143ab50fad1"],["/tags/spring/page/2/index.html","9a8d3d4875d94f393a4163335a9f3a9f"],["/tags/依赖注入/index.html","8acb99ee59499416a3709374d6dfc24b"],["/tags/容器/index.html","e9a3632d3c2c85ebb8647d7a56170e92"],["/tags/新生杯/index.html","e651f7513be9b5afa7a91d1a4f6ca673"],["/tags/板子/index.html","9dbbdc0aed6d6fe2105695d069635121"],["/tags/案例/index.html","b94cc961e65d655fb802f0efb6a5bb21"],["/tags/水/index.html","ca2615a3ad64786506644d4c5b105460"],["/tags/牛客周赛/index.html","9f0b1eebf2cdaf3eb678ad9b9cad0a43"],["/tags/牛客小白月赛/index.html","3f4d64db0de1ed3da7d5e3987aa67618"],["/tags/练习/index.html","abe214fa54cc784567923ddfc96ea2fd"],["/tags/题解/index.html","eb0b5b4d7e0e864e9da02976c846d4a4"],["/tags/题解/page/2/index.html","a7edb0a02802efa12717b03e214a2a80"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
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
