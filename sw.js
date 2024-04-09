/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","a85abaebf1bc63567bf7c0bd1265acbe"],["/2023/10/20/javase_字符串/index.html","593f4d4040e87398793489a6284b761a"],["/2023/10/20/javase_杂/index.html","d87788b16b739ee95835f7b2b6c79393"],["/2023/10/20/javase_集合基础/index.html","094e97a3e7d7fb3ae25d67093978395c"],["/2023/10/20/javase_面向对象基础/index.html","28d50b132292e1a5993fa55ab35d1f4c"],["/2023/10/21/javaweb_Servlet/index.html","7dd8d8d2fdb094896552a2d94c20bdb7"],["/2023/10/21/牛客小白月赛79/index.html","62bdfdf7e62ec1f4e88b48eeb3b769fb"],["/2023/10/24/javaweb_HTTP/index.html","d41a7be4d80214797f0f378731a89fe3"],["/2023/10/24/javaweb_Request/index.html","ac890f78aed8e4222bee76859fd1e57a"],["/2023/10/25/javaweb_Response对象/index.html","64ecc7544aa38b014fc3135152187f47"],["/2023/10/25/javaweb_案例——用户登录/index.html","c85b6b69e4c8ece1125243b8185732b3"],["/2023/10/27/javase_修饰符/index.html","37eba5e8dbd457eaabff380beb68255a"],["/2023/10/27/javase_内部类/index.html","aacc9be232791e2a18fbe2068989d0fc"],["/2023/10/27/javase_多态/index.html","256ffe8323f290a53e170b3bc64d9180"],["/2023/10/27/javase_抽象类/index.html","44688f7bb02fab4626f1729076a4c546"],["/2023/10/27/javase_接口/index.html","f44b721f0d738fdde7d0937c5b5fc23b"],["/2023/10/27/javase_继承/index.html","949449ea73df5b9e50dc63618c701128"],["/2023/10/27/javaweb_servletContext/index.html","89beb0845d27a9507dfcf1c6481a2f46"],["/2023/10/28/牛客小白月赛80/index.html","82db7a3710ee568ecca967577070d0f1"],["/2023/10/29/javase_常用API/index.html","8b0c1b75602dc76d55dd029c10b11f6e"],["/2023/10/29/javase_异常/index.html","ab98d8c2210504e7d38e3e8d849f2822"],["/2023/10/31/javase_集合进阶/index.html","e293a9cdead82bf1d429070c3b2592eb"],["/2023/10/31/javaweb_会话技术/index.html","0b68d3554a7b083acbfcf21965e54bae"],["/2023/11/03/javaweb_EL表达式/index.html","5b2f9222fc98b17c9fe702d6baa5e34c"],["/2023/11/03/javaweb_JSP/index.html","9223001c503c7afb1d6bc0d20fca602d"],["/2023/11/03/javaweb_MVC/index.html","815222a790b861fd89755663ea0bfcd0"],["/2023/11/04/pytorch入门/index.html","7fa9e679440bcead897900551a324788"],["/2023/11/05/javaweb_JSTL/index.html","9641010110383c89065c3a2eb23f32c1"],["/2023/11/05/javaweb_三层架构/index.html","c0225c3831148036582c3798738202fd"],["/2023/11/07/图的两种存储方式/index.html","1dcdefb63285978831c492761c5ff4b0"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","59933aa81cf52f26582e316bc4e681bc"],["/2023/11/15/计算几何/index.html","4b592a1638bff3849a4d78f08576aed9"],["/2023/11/16/javase_IO流/index.html","45c4c09cc8f7e0b0495844e8945d40bf"],["/2023/11/16/javase_多线程/index.html","206ba69ab94c63d8e78f70b889d3db89"],["/2023/11/17/友谊赛题解/index.html","0e39ce61e6f747ed5ec80cc69e458376"],["/2023/11/23/快读/index.html","a4dd2a2bbeae2c659cab23cf9ab0417a"],["/2023/11/24/javase_Lambda表达式/index.html","93a78716b53c04096c3e870c513ed989"],["/2023/11/24/javase_函数式接口/index.html","d903f0e5dc2cdac294c58d11bd3ee95c"],["/2023/11/24/javase_接口组成更新/index.html","65c037b817772e049c00415c7dcc4ffd"],["/2023/11/24/javase_方法引用/index.html","ccb763ca16d9105d6cacca61c8b14f2a"],["/2023/11/24/javase_网络编程/index.html","1b53069f535610e939c9bdd8d73c93b8"],["/2023/11/28/CF_909_Div.3/index.html","c8af6b2196db7db5938ca8be40395389"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","15ab4d7a2ba5979247f5172bba71e0d1"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","620765d2de706f0dfadd0d2f29ae6d5a"],["/2023/12/01/javase_Stream流/index.html","2906886fc07907266c44549da6e997a1"],["/2023/12/09/javase-Junit单元测试/index.html","6f71cd1df2442a70a5b4dfa03e86d0a6"],["/2023/12/09/javase_反射/index.html","8e00129d67212e3a56e5e7850ce48633"],["/2023/12/09/新生杯/index.html","546c74a90a995b8922eaedc6da65da4a"],["/2023/12/15/javase_反射2/index.html","401dc55911c8dd41c3329464f3189078"],["/2023/12/15/javase_注解/index.html","78c42b2913c9d2dda872eefb0c7fd2c5"],["/2024/03/02/等比数列求和/index.html","d1ed4ca85c749cc37ba93d22fe6d9f9e"],["/2024/03/04/求组合数/index.html","d5a55597fd2b3fa824a582f3f189f72e"],["/2024/03/05/ABC343/index.html","69c7255f16035b0c0882a69bf40c882b"],["/2024/03/06/大臣的旅费/index.html","e5d4c9849c2cc4b095ace95425994d7c"],["/2024/03/07/smart-robot/index.html","55f5544da5f495b2ced5d5ff844cbe97"],["/2024/03/07/牛客周赛-35/index.html","c83d5b595be6461e2462e91fb1c706a7"],["/2024/03/07/金牌厨师/index.html","c5cac7e2161098a39d776e1249b522b3"],["/2024/03/15/2024-3-15-cf/index.html","c29fd5ce926e76b906506d1785b450dc"],["/2024/03/16/edu-163/index.html","b10c602b0a9493b812e517ac078d309c"],["/2024/03/17/cf-934-div2/index.html","b6099156bdc3193e6b8a1b197db75386"],["/2024/04/09/bean-基础配置与实例化/index.html","fef7251bf4c5ff5137fd15363b38c8c1"],["/2024/04/09/bean-生命周期与管理/index.html","56b303945e699cb126a138c292aff339"],["/2024/04/09/spring-DI入门案例/index.html","2cc5b919145d0752dc2e842a69bff3b8"],["/2024/04/09/spring-IoC入门案例/index.html","bab97643260f570f350b655b85441399"],["/2024/04/09/spring-加载properties文件/index.html","7a2a1e3c72c5ac2000c1dd9b0119eeec"],["/2024/04/09/spring-容器/index.html","ed2b5baae47ea42866b0bd8aa5d47df0"],["/2024/04/09/spring-核心概念/index.html","03af165a54ee87bed565d9fbe667f4ca"],["/2024/04/09/spring-案例-数据源对象管理/index.html","64d53d7745e2e4a3fa8383b20f5acdd4"],["/2024/04/09/spring-注解开发/index.html","a7b15cf83b5c7d74668419c2994c95a6"],["/2024/04/09/spring-第三方bean管理和依赖注入/index.html","78cfd2984f4b659b1be470611d8f6289"],["/2024/04/09/spring-自动装配/index.html","18c2f497123107e785dc2ce32e52f330"],["/2024/04/09/spring依赖注入/index.html","48a48ebdeb8e2436d6988b93c7d359bc"],["/404/index.html","fd9758f7a5616524b62a5937e4554560"],["/about/index.html","883134e25b6a58001037a94c5b1f5b66"],["/archives/2023/10/index.html","4ba00bd4162cd0802deb8fc7f10a63c0"],["/archives/2023/10/page/2/index.html","eb3071a6294e94f3cd9306573af944f0"],["/archives/2023/10/page/3/index.html","a81750b96852613830457b71924a11d0"],["/archives/2023/11/index.html","77cd7538ca7def375aaa67bd57c15197"],["/archives/2023/11/page/2/index.html","1e1fd77f29393540f361321dad8bd0ec"],["/archives/2023/11/page/3/index.html","28190473b5384187bb58ccf0fc870de3"],["/archives/2023/12/index.html","822d708831d9cbe2dbdd9402d87343a8"],["/archives/2023/index.html","e7196aae76bb27626308c34caba0c4d4"],["/archives/2023/page/2/index.html","39c86ed992b1bc8ee12d27b727198939"],["/archives/2023/page/3/index.html","bc75a11cbe4b7220be2950dfffd788ac"],["/archives/2023/page/4/index.html","25b90c13839f1f5a24f08d3a550d791b"],["/archives/2023/page/5/index.html","d4f33744958c74d94b4b36261a735fc8"],["/archives/2024/03/index.html","caef2790370a065754323e0fb249c7ec"],["/archives/2024/04/index.html","40bfb2baa67db3ce9cf883fbb9bce46c"],["/archives/2024/04/page/2/index.html","8002293f8da31a6eae1adc479beba786"],["/archives/2024/index.html","19162492409a710fb28db8fc58256e9a"],["/archives/2024/page/2/index.html","497e995b1c4666d4366eb9d33d3de435"],["/archives/2024/page/3/index.html","5734f458d971ae026baaa19cfae6c9bf"],["/archives/index.html","1836b7e865b66c0c45b0a0f7e641dc1e"],["/archives/page/2/index.html","bcd5bb9f234862157f725244d40e2563"],["/archives/page/3/index.html","582450d51d78bf75c2c879be885cc898"],["/archives/page/4/index.html","dd3c28bfaefbd4a51fe939ac05b2b7fd"],["/archives/page/5/index.html","8d4fae88f0798d0da130be107877f180"],["/archives/page/6/index.html","1a958673ad76c8c4d03e525bc59c4fe7"],["/archives/page/7/index.html","89430e98e22a1701c21f693e8a28cccb"],["/archives/page/8/index.html","eac7a7478f4e5b5662845bd884d3caf5"],["/categories/index.html","a0d42e38af769b4066195fa33449aa02"],["/categories/javase/index.html","5e7be31b4a974b8bc1d9d46a0fe8d55e"],["/categories/javase/page/2/index.html","9aef711a3add6880ca9a736a7b08f0a5"],["/categories/javase/page/3/index.html","d54ebc2d2d5d04029237147e76346626"],["/categories/javaweb/index.html","ad356433602ba723d5f036e564fe7c1e"],["/categories/javaweb/page/2/index.html","a3746e285a25507c681c3b9cd088fb57"],["/categories/pytorch/index.html","c9ad113de596066b5057399e6b1c2e11"],["/categories/spring/index.html","f90fab93261e9964da9fbbe4e9079642"],["/categories/spring/page/2/index.html","933941bccfa760cc8b1ff65d5804b07d"],["/categories/板子/index.html","a4a8116d44ae50c823a44631ad765120"],["/categories/水/index.html","4e159d40e7b9506b30d2b407a03658b5"],["/categories/简单算法/index.html","5e66b5f124968737f84a79f9e4c9984f"],["/categories/题解/index.html","fca9467e8ec60235d3241460d09a18f7"],["/categories/题解/page/2/index.html","7313ff670be03fa64b1c2c52b99ca9ab"],["/contact/index.html","ff3917b7d4901cf3b10d4b13223a768b"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","f8c60cd06e36e21b845175acaff17ea4"],["/index.html","695faac684be25754f24ccbf4b75d925"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","9ec5704cad3bc38f46c90da76bdd429e"],["/page/3/index.html","e568ee1e8ca78fe44d65b7af309bda4a"],["/page/4/index.html","a223a0e93bdcfc6ac877f7e54baee8c6"],["/page/5/index.html","bd977376a2b93d58a5d7e77c5a38f9c4"],["/page/6/index.html","d5861875df8046fa466971025d862ef1"],["/page/7/index.html","4bf400736cdadcefbac572126ed31c52"],["/page/8/index.html","9992f36eb6c9b239261e1542a61651e7"],["/sw-register.js","342c0f7929d85365c831b49822a6e0cd"],["/tags/2023牛客寒假/index.html","893eca1fec8514da64038a84498dd230"],["/tags/ABC/index.html","a53cf45b0f164588177c12fde9e1e224"],["/tags/bean/index.html","91fe4de9deb0ecc4fd89034d1b720ea9"],["/tags/cf/index.html","e9e61431f026afbceb128143ce672adc"],["/tags/index.html","e80f9bf70f0c15a41052efb2f457a2e0"],["/tags/javase/index.html","ff04c8bb664b5bb6c59fa8a35fe71573"],["/tags/javase/page/2/index.html","670b2a2f97475246b21ff078f7332ea1"],["/tags/javase/page/3/index.html","7646db7d5206c4256c517abb8bfe3f8d"],["/tags/javaweb/index.html","49891361b840febceef0a74b5c93e1e1"],["/tags/javaweb/page/2/index.html","dbb2aa42b4b8047672cc7c4bfb8ef9d4"],["/tags/pytorch/index.html","1a9b86a3e754905df5a4a1cb8048b26b"],["/tags/spring/index.html","250a3967b0f37df83ce38e96d957a27d"],["/tags/spring/page/2/index.html","8c4fe38cf942f155ea4ff62f4763f58f"],["/tags/依赖注入/index.html","2520f618156787da0fd50ce64fe04a7d"],["/tags/容器/index.html","3502facbfba3f3ccebf4bade5455c1eb"],["/tags/新生杯/index.html","11a896f594ae313856e7024555c63549"],["/tags/板子/index.html","8607858bfe8e09aa0bb2b9c7e6e0c191"],["/tags/案例/index.html","201344758789a326ea90f88a2a73db1c"],["/tags/水/index.html","1459b5292d10d412d49c0d0dbdc3d7d7"],["/tags/牛客周赛/index.html","3e9b911a1ddfd96fbf86f59781ae5988"],["/tags/牛客小白月赛/index.html","42c4aa8198e3215a6b6baa86bbfb2d61"],["/tags/练习/index.html","2a068ce1cd1284df40063ddd4504a3c4"],["/tags/题解/index.html","ec0aedee21b79cc7c9dd92bf9e1227f6"],["/tags/题解/page/2/index.html","42d4358308750a9fecdee1630a967ff8"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
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
