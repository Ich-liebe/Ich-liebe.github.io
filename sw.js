/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","9ed7316375741c343f5933a0628139dc"],["/2023/10/20/javase_字符串/index.html","ec6571c13c0f303e2c661bf64bbd00ff"],["/2023/10/20/javase_杂/index.html","a2bf47dc6fb62313904954c508a24806"],["/2023/10/20/javase_集合基础/index.html","64016b1bec6c6244add55119ec1945eb"],["/2023/10/20/javase_面向对象基础/index.html","e40f9e0c252fbd121d914f1c3ea6fba4"],["/2023/10/21/javaweb_Servlet/index.html","ae5a9f29effb8c347b2be663013cb809"],["/2023/10/21/牛客小白月赛79/index.html","9f8c3a3b581fb08f08acb41ed8dae0e5"],["/2023/10/24/javaweb_HTTP/index.html","66772a352633a13e348fb5f848607707"],["/2023/10/24/javaweb_Request/index.html","5ea878087cd0d4dfc576cd2c0639c420"],["/2023/10/25/javaweb_Response对象/index.html","9fd7e199fdbe47e5326aabc274a73bd7"],["/2023/10/25/javaweb_案例——用户登录/index.html","bb02a6ac9e5a4b4938462e9ab3d60219"],["/2023/10/27/javase_修饰符/index.html","a3fdebad645491b61b639dedf212a08e"],["/2023/10/27/javase_内部类/index.html","afaa2a4639cf558c339a96ca533d0a82"],["/2023/10/27/javase_多态/index.html","6d9d2111e4c99d8afcc9e001e96b3a20"],["/2023/10/27/javase_抽象类/index.html","142e3ba256048b7984e75f199a4b7e26"],["/2023/10/27/javase_接口/index.html","70bde0b2d8ec5911da5b9fc0fa525318"],["/2023/10/27/javase_继承/index.html","94589927a765eb1384858d2dbca1404f"],["/2023/10/27/javaweb_servletContext/index.html","fa6e59b5c8e9bb7232bacbc4256db0ee"],["/2023/10/28/牛客小白月赛80/index.html","b9e4ef1a6121d0ddeb7768968763bc1b"],["/2023/10/29/javase_常用API/index.html","37360bc081a752881af925d94cdf7381"],["/2023/10/29/javase_异常/index.html","885e29f13581ec990054ed4f39a2397b"],["/2023/10/31/javase_集合进阶/index.html","6f84a3a5c8d7a7b9949ad65c5bc91dfd"],["/2023/10/31/javaweb_会话技术/index.html","78bcb2cdd3ac5ff74849f768e0f0b2c3"],["/2023/11/03/javaweb_EL表达式/index.html","ff4b9bb9d60f5b5d24be670f1fef11c1"],["/2023/11/03/javaweb_JSP/index.html","e865a77aaa3a7cd87e462dba113c3ec4"],["/2023/11/03/javaweb_MVC/index.html","8fa552e388a7f5fe09ffab06d9d31ff7"],["/2023/11/04/pytorch入门/index.html","e29187c7279ae932d0fb6643fc6f34a7"],["/2023/11/05/javaweb_JSTL/index.html","d23a3ed8de7296fbf947036111c37533"],["/2023/11/05/javaweb_三层架构/index.html","e41656cd661b56f2b716f75698c3fed8"],["/2023/11/07/图的两种存储方式/index.html","1cfdd246c8c5a2a2334539adc26eb849"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","598667d8e9d6d34edff7ce2f73df767c"],["/2023/11/15/计算几何/index.html","4985e4faebd7a950913373b42e8c089f"],["/2023/11/16/javase_IO流/index.html","f4f1ea2164dc05a3d902e10b898359d4"],["/2023/11/16/javase_多线程/index.html","79c96637508c90c188da7496f4193a22"],["/2023/11/17/友谊赛题解/index.html","bcb72df76ff0db392e2c1129d84e5b0d"],["/2023/11/23/快读/index.html","fe07c858a84f58599209ea321d32d4df"],["/2023/11/24/javase_Lambda表达式/index.html","0774ea2bc8a2e8439163dd587ae3b6d6"],["/2023/11/24/javase_函数式接口/index.html","d9a921f1e0e97043669a66f5bc0d4bff"],["/2023/11/24/javase_接口组成更新/index.html","c9083297534676a6669b8fc0b3dea11f"],["/2023/11/24/javase_方法引用/index.html","97c7ce203c881c2b22fbdbe69dab6579"],["/2023/11/24/javase_网络编程/index.html","45a70144d66b61037e520863245b6fe8"],["/2023/11/28/CF_909_Div.3/index.html","7143ee334338e52933acc422499a65ba"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","4408ae60603cbf9bbe9a7fd68d529b39"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","6a0cd0503a594bbc5e9860fbc10fba41"],["/2023/12/01/javase_Stream流/index.html","847b687a125a5e02a87454bf9199de7a"],["/2023/12/09/javase-Junit单元测试/index.html","fbb88a1b3ebee631e5f2d49b1a398d11"],["/2023/12/09/javase_反射/index.html","5e27e936700a756f013c78f00248ab61"],["/2023/12/09/新生杯/index.html","8557b55b9a350d09a2d1e1c0ff182680"],["/2023/12/15/javase_反射2/index.html","7fadb28f0cfe2d4ab1ecc4b52a3300fa"],["/2023/12/15/javase_注解/index.html","28eff2f3e52525fb39e9b83ab22bf152"],["/2024/03/02/等比数列求和/index.html","1055e3dbada34cc280b9c5adfef0d6e7"],["/2024/03/04/求组合数/index.html","bc25eaeda66f9d2311632c5515bf80fa"],["/2024/03/05/ABC343/index.html","789a1d3da3c8a96ca9e342598b326457"],["/2024/03/06/大臣的旅费/index.html","a7cb6863109bc246ede11993d391fe69"],["/2024/03/07/smart-robot/index.html","c62648e7cb90e7ebcbbe5a9fa35532f1"],["/2024/03/07/牛客周赛-35/index.html","a6a347773b0a54de6328ba4423e6004a"],["/2024/03/07/金牌厨师/index.html","3dfaf0b7ff2167b54de538664feb619a"],["/2024/03/15/2024-3-15-cf/index.html","3051440bbd0c4cd994af7060ebd112c8"],["/2024/03/16/edu-163/index.html","b7a37e8173efb67fa351054edcf7e713"],["/2024/03/17/cf-934-div2/index.html","0d20220c636db779b1beed544486bad2"],["/2024/04/09/bean-基础配置与实例化/index.html","6263197cf348694feb1a2d90038389dc"],["/2024/04/09/bean-生命周期与管理/index.html","31282e6e74227d7de62304deeb9c3fe1"],["/2024/04/09/spring-DI入门案例/index.html","362311afa46665f30a091102484cc24d"],["/2024/04/09/spring-IoC入门案例/index.html","3834c15be025ae69ffaf4dc83daf777d"],["/2024/04/09/spring-加载properties文件/index.html","8ab039eeb16097ed7aff9f47728ac21a"],["/2024/04/09/spring-容器/index.html","9362094298edced837f46649b60add1e"],["/2024/04/09/spring-核心概念/index.html","16c4c45eed99f0cbdfa49647dcd9254c"],["/2024/04/09/spring-案例-数据源对象管理/index.html","a45eae3723e20cc472226b2d145eeb3b"],["/2024/04/09/spring-注解开发/index.html","e3d6380f9bab2fb0947454ec28278d01"],["/2024/04/09/spring-第三方bean管理和依赖注入/index.html","05f7f364f7c361dcdd4c0d1cbb9d5c31"],["/2024/04/09/spring-自动装配/index.html","1f8eade4db8517199239e13215fc0eb2"],["/2024/04/09/spring依赖注入/index.html","9960849d1c9810f2818c6e32fdd40cba"],["/404/index.html","5601111f223efd5a59e3598b49469d7c"],["/about/index.html","cc8e6eebbc1e3fdc85f2c666be54e0c1"],["/archives/2023/10/index.html","26152fc4004de82b9a9673f024f73006"],["/archives/2023/10/page/2/index.html","dcd4bdaff40d057511884cf5d47cb937"],["/archives/2023/10/page/3/index.html","3fa54633a635bb63474e2ccfecd7236c"],["/archives/2023/11/index.html","80bbb803825259585165e88337fb8bfe"],["/archives/2023/11/page/2/index.html","ab64b70f840e91ab355702ce04907534"],["/archives/2023/11/page/3/index.html","4e84be9e951737ec9ae00b97413833b5"],["/archives/2023/12/index.html","653dae9715275f7c36ef6430495ea3a5"],["/archives/2023/index.html","c71d8d5614ec1f2c7d0c1686c7a912d9"],["/archives/2023/page/2/index.html","04441e45a7a3868d7f0b2e0219b53b61"],["/archives/2023/page/3/index.html","98696ed7c21e19a025ab3724a8353c97"],["/archives/2023/page/4/index.html","b36a0a496508e16d90ff5b7984303e11"],["/archives/2023/page/5/index.html","4763b5b0200ed209a038aa25b748a732"],["/archives/2024/03/index.html","68e6cda4f68b2858e9d71e8bcd342e08"],["/archives/2024/04/index.html","b34dcc39d2273376cd5f469b8bca9354"],["/archives/2024/04/page/2/index.html","221b3fe9e5a632dc35e6d274a7258ca2"],["/archives/2024/index.html","10076b671bc31003771bc84e5e74d1ad"],["/archives/2024/page/2/index.html","54beceaf15f25853a546e472c936f9fc"],["/archives/2024/page/3/index.html","2c28935d4a04955ed0610a1a0cd476bc"],["/archives/index.html","c98fcde813da0237a225068d18edbb8f"],["/archives/page/2/index.html","b1a4e6148cc717be490a12f8465fc1dc"],["/archives/page/3/index.html","0c4d06ad513b9a2365b1d43ea9a5eac3"],["/archives/page/4/index.html","8cc7b4cfa8a7df1072da31071e834d62"],["/archives/page/5/index.html","54515d0b5e9fa305be3f24dc85ab86c5"],["/archives/page/6/index.html","579acab2d0ba17773a50b8bc91de2a02"],["/archives/page/7/index.html","04bbe5b350fd113d4d2f8cfc00211eb2"],["/archives/page/8/index.html","bf5f23cc5e588678af542b7553cc163d"],["/categories/index.html","7c5ee717e03d222d72d96d2777d770f4"],["/categories/javase/index.html","9ba0d5aa9af2ff6fd943c612fe94d633"],["/categories/javase/page/2/index.html","0d609b087cb42a7669aad9a785cb7e78"],["/categories/javase/page/3/index.html","b071419776b376d699ba7edb574ad4b9"],["/categories/javaweb/index.html","22bc432ac9ced6fd70db571feb323f64"],["/categories/javaweb/page/2/index.html","b818aa1924998060d162fdf02b035541"],["/categories/pytorch/index.html","d5f1914ea064395dc98824d9313c5974"],["/categories/spring/index.html","1a30bc2545f9f8609fc1b8bf5632a757"],["/categories/spring/page/2/index.html","1589fc66796e44a68171dd31339fe6cf"],["/categories/板子/index.html","3aeb0c04852c2591cdea814a01b57774"],["/categories/水/index.html","aa765a0acc499b3b3e4089ed2387dc0e"],["/categories/简单算法/index.html","d139d8fb7ca7af447bb046d86df93350"],["/categories/题解/index.html","97f095f3169918dc042608673ec3d02d"],["/categories/题解/page/2/index.html","d73ff1cbaa1ac6702dfd78ba59f373e1"],["/contact/index.html","cea66ee26a4b5eab497269a38afa3dcc"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","3ca806015c5bf7d161f3d4af9d35e892"],["/index.html","c7ba188fbbe6c8d24103b0eb1da9fff4"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","d60a992671e0dad8c5c3309acf4bf992"],["/page/3/index.html","840e522f310dd68fd546e19124206c51"],["/page/4/index.html","23eeac9ba8015f28c8776e4aee7d45aa"],["/page/5/index.html","8a2ee31b9109584100eda5eaf45dca75"],["/page/6/index.html","9c367b7c464c63b34338967d9d2a0926"],["/page/7/index.html","133cbb038567d51c9c399037696c3719"],["/page/8/index.html","0466fc05ebfaf22085e6f13dcd2da287"],["/sw-register.js","224d80aa19eb7eb62cb85c3d4aad1fba"],["/tags/ABC/index.html","49e315a6b966ad959a447fbf2682fc8a"],["/tags/bean/index.html","5d26114b5763634fb429e96ee39dbe83"],["/tags/cf/index.html","c62fa1283850af50d5e1e850b4137fdf"],["/tags/codeforces/index.html","de0e29ba6ea06cfd89471f74f36fc041"],["/tags/index.html","c8a2e4d4a2dc85fef7373faaf4fba7d2"],["/tags/javase/index.html","0aabe78443f0e4ba492e1beba1f636c5"],["/tags/javase/page/2/index.html","dcc939b2d566923726676feae3efda17"],["/tags/javase/page/3/index.html","af4d8a4e78ee5c4c1feeba20eab93edd"],["/tags/javaweb/index.html","5a6af0f3fea254617da481983765fa5e"],["/tags/javaweb/page/2/index.html","f5826dd540fd8bfa0b39721541d1c2fd"],["/tags/pytorch/index.html","793a0e140996ed94c4649c87bd5abd8e"],["/tags/spring/index.html","bdbb51ccb2042a6f5676995048ac29b5"],["/tags/spring/page/2/index.html","8c0c000408eb3689c8ae0a3b138948c0"],["/tags/依赖注入/index.html","62f94d1b36e0cfc1231c9173a16cbb23"],["/tags/友谊赛/index.html","b5ae81aefe33aefd2457e566c1afa60d"],["/tags/大臣的旅费/index.html","33ab4866c5549c0d33f45b39f4f5e5c0"],["/tags/容器/index.html","2ebcf0f52061621bb1b4941127578fff"],["/tags/小白月赛/index.html","8a58800d6285b2103baaa578b6444e07"],["/tags/快读/index.html","2773ec33682d151cc5282a94fd7e2b42"],["/tags/新生杯/index.html","92d4cb5748ff1084dcf0e3f0138e7338"],["/tags/案例/index.html","47860639fb98a4a9d2c8a024239cf656"],["/tags/水/index.html","932ecc3f72642a70ae669a112b322bcb"],["/tags/求组合数/index.html","fc70f6a31bf76412ef3bbf31c1d298e6"],["/tags/牛客周赛/index.html","db2610736c2caa87f2fdab2b708271bf"],["/tags/牛客寒假/index.html","18da4a531a139967a6c71cd7a3693207"],["/tags/等比数列求和/index.html","d10e161b668ae7c32354a54383f76bc6"],["/tags/简单算法/index.html","52e4616a20ffbd6fc75380c132f32ee3"],["/tags/练习/index.html","7a5dfadd0efff4bb7df2d4278a3d3746"],["/tags/计算几何/index.html","8e542dcdfd94a73170cb1cbe1becb224"],["/tags/题解/index.html","705f9f40fa04a76f7ccc2f78cd01bdf0"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
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
