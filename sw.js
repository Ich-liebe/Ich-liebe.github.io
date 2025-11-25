/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","3b7b6721749139f80d2ffa2dbf6d20c4"],["/2023/10/20/javase_字符串/index.html","d2d56639597db183940318efbd1749dd"],["/2023/10/20/javase_杂/index.html","5cae3ac4b0d2002327dde815dea5eed5"],["/2023/10/20/javase_集合基础/index.html","f9707b88cd9a7aa56746c38bdfb83f65"],["/2023/10/20/javase_面向对象基础/index.html","7b7d069532151eb3d1a321dff73322ee"],["/2023/10/21/javaweb_Servlet/index.html","04d84793dcf5b890031c86494984b4a5"],["/2023/10/21/牛客小白月赛79/index.html","612fb848dedcb80ff3dc5a37b1fd0c14"],["/2023/10/24/javaweb_HTTP/index.html","d97db4f7b46fb9231dceff622c984d2a"],["/2023/10/24/javaweb_Request/index.html","31543d8fc4b1150ce413a6a95ffa42d1"],["/2023/10/25/javaweb_Response对象/index.html","dab8022980e7af4d44b3d085390b0391"],["/2023/10/25/javaweb_案例——用户登录/index.html","5f3ad5206934abe98ad5a01257cd0a91"],["/2023/10/27/javase_修饰符/index.html","bfff928e61e548f5546a0953712eeadd"],["/2023/10/27/javase_内部类/index.html","e28f31baa27e49ee3e7a404787ef4594"],["/2023/10/27/javase_多态/index.html","8b667a9a761fcd69a68d680ae07c8c05"],["/2023/10/27/javase_抽象类/index.html","fddedb588d08429afdca90092d1e4ec3"],["/2023/10/27/javase_接口/index.html","68e79b107e3ebd5fa41e8f8af2170d7e"],["/2023/10/27/javase_继承/index.html","a1a8317cdc551726d208fb0e24bd8ce3"],["/2023/10/27/javaweb_servletContext/index.html","fab3b83e5b38b9eb6224ae8ad2547bb7"],["/2023/10/28/牛客小白月赛80/index.html","0ca6498c05490f70ed95a731c98d2e3f"],["/2023/10/29/javase_常用API/index.html","138ff54be6032b04450b7697f8e2e5a6"],["/2023/10/29/javase_异常/index.html","495e3383494157b9050ab5ccb43c55a7"],["/2023/10/31/javase_集合进阶/index.html","35506d7cdbe1b5db1f18dd0815f7d92a"],["/2023/10/31/javaweb_会话技术/index.html","ca524d733bb8a2e23cb39098d1d7a601"],["/2023/11/03/javaweb_EL表达式/index.html","3c9a359460653d3dfef349bd9425fdf9"],["/2023/11/03/javaweb_JSP/index.html","db68483aa36e6950937c91fa2c5b4e6b"],["/2023/11/03/javaweb_MVC/index.html","c267f03713ce70aa554a381c68d7da90"],["/2023/11/04/pytorch入门/index.html","575d5a5c25e81258286c20be87f4767c"],["/2023/11/05/javaweb_JSTL/index.html","39bfa292e44f76e7874537423fa2dd77"],["/2023/11/05/javaweb_三层架构/index.html","0f88bb82a3dacef0f9e228e170f78c64"],["/2023/11/07/图的两种存储方式/index.html","7ea240833dc4a3f8d9163498edea930e"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","c6156e80a11fc7d316b35db92e7c1ba1"],["/2023/11/15/计算几何/index.html","14852b9cc8d3489d8d19cc3c3b3f57ae"],["/2023/11/16/javase_IO流/index.html","9071ad06833b288135b771057c8350ff"],["/2023/11/16/javase_多线程/index.html","bd354c8295bfbdd7168d46013f577207"],["/2023/11/17/友谊赛题解/index.html","2bbcefaf1edc02a239a404486143d9e5"],["/2023/11/23/快读/index.html","7ae9679f0b367c2707bba1523358e151"],["/2023/11/24/javase_Lambda表达式/index.html","1981373453df375e703801f426bb182b"],["/2023/11/24/javase_函数式接口/index.html","6b89e2523df4f2d6a6ce32ef8d5564a4"],["/2023/11/24/javase_接口组成更新/index.html","272f2e272480f04c247d4eae4906c943"],["/2023/11/24/javase_方法引用/index.html","07bda056c675d495d997cd12c8d237e4"],["/2023/11/24/javase_网络编程/index.html","7036c240639266edbfe536011f79b885"],["/2023/11/28/CF_909_Div.3/index.html","16a1b819f20049a50a9bff95f7657b5a"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","117c19bc8b9e6f1fcc27b415e38c06a5"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","52404ed9a8e523eea26cbd5ee30b8856"],["/2023/12/01/javase_Stream流/index.html","8a83713f3baa436764db698072abe374"],["/2023/12/09/javase-Junit单元测试/index.html","35bb68e7b8900b397e40da107531e34b"],["/2023/12/09/javase_反射/index.html","032b0a58edee7c078b6b0543d7379b6c"],["/2023/12/09/新生杯/index.html","ad0976875a267fb74808badcfe0c0c8f"],["/2023/12/15/javase_反射2/index.html","3fbf9d0025f5c5b64eecd96997eb991c"],["/2023/12/15/javase_注解/index.html","59a5ad866f6a6f2e4429675198d4af9b"],["/2024/03/02/等比数列求和/index.html","07917f91478195b79cca7132453fa60c"],["/2024/03/04/求组合数/index.html","ed9860a9cc40acc52b77d93e9464910b"],["/2024/03/05/ABC343/index.html","701a567030338362d8086775f456558a"],["/2024/03/06/大臣的旅费/index.html","c34936ed3684c4bf87b4e65f1001303d"],["/2024/03/07/smart-robot/index.html","93ee6da3482ffef39e60015c78aa865c"],["/2024/03/07/牛客周赛-35/index.html","652fe503cfebee2068525574798170c6"],["/2024/03/07/金牌厨师/index.html","28832f99d99310897c5ed1de4655ccf0"],["/2024/03/15/2024-3-15-cf/index.html","e1669aaaba2a8a541381a9b015291dfc"],["/2024/03/16/edu-163/index.html","b81a578c8426df9b9dec81e8d154b3de"],["/2024/03/17/cf-934-div2/index.html","80ece54a523682ba8e877a1f152edd8d"],["/2024/04/09/bean-基础配置与实例化/index.html","568f146878e1d17bddc006ec699fb12f"],["/2024/04/09/bean-生命周期与管理/index.html","b483f0b2b17e9de8927edea533354b59"],["/2024/04/09/spring-DI入门案例/index.html","32af43b5eec0278bbac079ad95033d23"],["/2024/04/09/spring-IoC入门案例/index.html","c9ffa73bf2c7d25331b48df1b3643990"],["/2024/04/09/spring-加载properties文件/index.html","0211c55b05667fe3c014c28390c344e3"],["/2024/04/09/spring-容器/index.html","91eab8a093ee1d2c3872d777dd1fe8f5"],["/2024/04/09/spring-核心概念/index.html","bd6e0bc77ea382f5fd0e0ea17895e32a"],["/2024/04/09/spring-案例-数据源对象管理/index.html","5efd94324cb377718c714a27b9af982a"],["/2024/04/09/spring-注解开发/index.html","71424a11b56691e7dfe19ef6d5729180"],["/2024/04/09/spring-第三方bean管理和依赖注入/index.html","7146ed686584eac78549436e3fd54e3c"],["/2024/04/09/spring-自动装配/index.html","bdea1140efee04bd2c97925d22ff98a5"],["/2024/04/09/spring依赖注入/index.html","9b6f7fe00a28b0596dc2d6301c2598ea"],["/2025/11/22/2025-11-24/index.html","8bd244e53907fea6941a4ab572037925"],["/2025/11/22/2025.11.23/index.html","17a17a597d73d82db3550c8754fa12d9"],["/404/index.html","a5678eb1abf274832a297958b108ebb9"],["/about/index.html","8f68fd6be3e9f7a100bfa957a950ccb0"],["/archives/2023/10/index.html","4d537110c1256dbe490ad9103bf8c28a"],["/archives/2023/10/page/2/index.html","2aa76eec8b65c5f51dba490a477c7e1b"],["/archives/2023/10/page/3/index.html","b645fa7101d756028ff6f491a588eb8e"],["/archives/2023/11/index.html","ad57b190c1e92cb968c4c957462ef335"],["/archives/2023/11/page/2/index.html","e91386b72b6b1e10d81cb1348df3c7da"],["/archives/2023/11/page/3/index.html","115ffa7924ae2cc9de23733f5a033e79"],["/archives/2023/12/index.html","6bcbb1519c5cef28a985ef23980a0c31"],["/archives/2023/index.html","879d4a4f7c3cd8cff1885705ce6f8a63"],["/archives/2023/page/2/index.html","c6f08f4f19ab056a813ce8949404a73b"],["/archives/2023/page/3/index.html","9cac72bec71032400b5736d27b29cc90"],["/archives/2023/page/4/index.html","051fe378b4d545d6eb19dcd894a807cb"],["/archives/2023/page/5/index.html","e49c24003b39849f03f78b35130f4646"],["/archives/2024/03/index.html","b0b61e8a72a6b6e1f4846d0fe4996351"],["/archives/2024/04/index.html","63e7f2356aa0935f3fa0e5fb6f9e3006"],["/archives/2024/04/page/2/index.html","c67d330d578e4ef34848fc889f147162"],["/archives/2024/index.html","9169a5dfb5d96076744c03a2e3555e18"],["/archives/2024/page/2/index.html","d207eb6d691f946d722caa33e7d9aefc"],["/archives/2024/page/3/index.html","cabdc63315653a988868191eecc4a21d"],["/archives/2025/11/index.html","27c744d4f088a2100d696c3b217799c6"],["/archives/2025/index.html","66f9b7f8b42e61eae81505f38b37ca2b"],["/archives/index.html","4e3c145007d07bdb92e2d4c48d8fd5fb"],["/archives/page/2/index.html","36c333528b14f842c5b72759091a81a6"],["/archives/page/3/index.html","da1afe446bd850fc91b8cb42c29b445a"],["/archives/page/4/index.html","bf3d8879d1627732a2815ec7d30b7083"],["/archives/page/5/index.html","852f5b478f19d52a527cdad99a2db028"],["/archives/page/6/index.html","81c7f7b50129e9b8d4cef0896092eb8f"],["/archives/page/7/index.html","4e27b4de61072e0a08429913ae5acdbf"],["/archives/page/8/index.html","3d274f62786f0b91beb9cb702a4c599f"],["/categories/index.html","cb815b8d9cda114f63b96b8ec65a0533"],["/categories/javase/index.html","935c2ad589b704f4d53e94fdd82347da"],["/categories/javase/page/2/index.html","a603666ff1c299c199ed8e80906e8f70"],["/categories/javase/page/3/index.html","eba6395d468f3983363d8856daa0297a"],["/categories/javaweb/index.html","28132088d421c3ed34c3b8b3a0611e24"],["/categories/javaweb/page/2/index.html","8c5de2c1f64b72510b02f13b715429d5"],["/categories/pytorch/index.html","117437b962cba0cd234063f6c31b1fe7"],["/categories/spring/index.html","48fe365af471f1ea2c49ace7e3187e87"],["/categories/spring/page/2/index.html","20b53b3ad58ce8ef3053c21abb94c080"],["/categories/板子/index.html","4e3229644e5b8cc3ae2136cf94181c71"],["/categories/每日总结/index.html","4db6fc5ad8078315586ebd214eb35241"],["/categories/水/index.html","5936e9da7c9a2e255639369e2697fe72"],["/categories/简单算法/index.html","a6f0c364c7644539649486cd0f5d407b"],["/categories/题解/index.html","06f0897199e4c7c516f1648f915eb7ae"],["/categories/题解/page/2/index.html","1174ee5bdf1352ef7196b979c0879cb6"],["/contact/index.html","da4f2d6ccb5e87f822d535a17a6b755b"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","acb5dcd58944757cb97ff794bece24aa"],["/index.html","218b58f3c36379f979d886c3156802d4"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","0d51c3d2c2a0b6deb1a2a76c1332fb66"],["/page/3/index.html","79710685ffdb433d6f33ec90b0a2363a"],["/page/4/index.html","de47a93073ecd4d4a32422b89e49d59d"],["/page/5/index.html","4f5da74189de9417898dc33f961c487e"],["/page/6/index.html","dfe5aadb1fae22730bfdf574191ca694"],["/page/7/index.html","aac3aea83f8e067b9fd20e8575efd5f1"],["/page/8/index.html","1d0acf3427faf249597160b4427e894e"],["/sw-register.js","58f0556817da8e27a08577b0cb6aecd6"],["/tags/2023牛客寒假/index.html","72a6a68e48257cce5395d63ccc21535d"],["/tags/ABC/index.html","767cc7e28afa33e80fb9a28c249a0702"],["/tags/bean/index.html","b8a5688ae4e4db6c899ca38a398fe803"],["/tags/cf/index.html","97fd863f50dd46888122dead6d498ec1"],["/tags/index.html","6f0ff465358cd7d8a7ab902dc8d00900"],["/tags/javase/index.html","c6e0e8b7893263686827a928b8c9eda7"],["/tags/javase/page/2/index.html","a2131e3538d1b6b768861dff443fa541"],["/tags/javase/page/3/index.html","31bcbe6d3880c0fb74ed87d7ca74ce28"],["/tags/javaweb/index.html","45293557f204495840f8235febc1a26e"],["/tags/javaweb/page/2/index.html","b24069fd6c7e38f76c04c311b8559c65"],["/tags/pytorch/index.html","5a9ed313b29246c350a1a0ee426cf461"],["/tags/spring/index.html","dcedf7d37831b2a318fe023385c1e709"],["/tags/spring/page/2/index.html","3647b320bfcb6d057a083d26150e5736"],["/tags/依赖注入/index.html","246378a9611f1d44499d5e4087405f2c"],["/tags/容器/index.html","5ab5030ba6c2f15e5086aa22a22f0235"],["/tags/总结/index.html","baf55d00f46e05420f99567ed4040d23"],["/tags/新生杯/index.html","e86cb473e6bffdc62ef0b49e2f09c848"],["/tags/板子/index.html","dccfe5cef1368ed49b940d2df0f54c0c"],["/tags/案例/index.html","34c4f5ca03602b601940aa75e9fd7c64"],["/tags/水/index.html","76494cc9c442bfcb164d451823e31e1f"],["/tags/牛客周赛/index.html","c24c4087c25a7597a0d867e638b4e52c"],["/tags/牛客小白月赛/index.html","6359d35dab4e79fcd0b5e4a325b85ad5"],["/tags/练习/index.html","bf815303b62f7efc1cda4731f933223a"],["/tags/题解/index.html","df053a5e62fdba738bedc41345d3fa97"],["/tags/题解/page/2/index.html","ce9d9bbe9f3fe12afa7fb2e8009b0050"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
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
