/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/18/关于算法竞赛/index.html","5bb7ae1f0b5833a0ab5c74b2329c9c33"],["/2023/10/20/javase_字符串/index.html","423df5e84c1f49b9fb082911c9dbd424"],["/2023/10/20/javase_杂/index.html","2ac08cff79ae81e04eed39e8d687eab1"],["/2023/10/20/javase_集合基础/index.html","0ac8e260834a2a8a974d4315758f8abd"],["/2023/10/20/javase_面向对象基础/index.html","d7393b6c715a554051f7985374052c2d"],["/2023/10/21/javaweb_Servlet/index.html","2e4a6655b25ad9bceb466224a70b9206"],["/2023/10/21/牛客小白月赛79/index.html","50fa3716e04b628f7b22d7384a6e281c"],["/2023/10/24/javaweb_HTTP/index.html","41d2676e66ca30d38a9ecbae9317a341"],["/2023/10/24/javaweb_Request/index.html","47fa2f31a63ce69f5b97b5c4a5d3c275"],["/2023/10/25/javaweb_Response对象/index.html","2074a4b8ea95dff6e52cd30b7c635ef6"],["/2023/10/25/javaweb_案例——用户登录/index.html","a4fca50adb16ebca82d41ebd3d3cd379"],["/2023/10/27/javase_修饰符/index.html","46988106de04ae5e6825310ff6c04cae"],["/2023/10/27/javase_内部类/index.html","6d14c961fc17cbbf061c055b9406c32c"],["/2023/10/27/javase_多态/index.html","35906b9402eadab260786e350a89d12c"],["/2023/10/27/javase_抽象类/index.html","e1827ac8414c7e395b85a955ecfd82e3"],["/2023/10/27/javase_接口/index.html","b2f7e9788aa07c46602457f59f9bfd42"],["/2023/10/27/javase_继承/index.html","1ad4b39649909a510eef57f4ed72ea7e"],["/2023/10/27/javaweb_servletContext/index.html","bc74274d5079184327ec8902a6cd8cab"],["/2023/10/28/牛客小白月赛80/index.html","78b2311dc79a37b011de9acfc20e5f9b"],["/2023/10/29/javase_常用API/index.html","fa636f6a50e997b94b1b92de995a1b4a"],["/2023/10/29/javase_异常/index.html","1588149554dde9b369132dfe034cc062"],["/2023/10/31/javase_集合进阶/index.html","f25d93a2fdd20450b5e65e406ffa79e9"],["/2023/10/31/javaweb_会话技术/index.html","a778989aac435fd7e68f5d3160d5be5b"],["/2023/11/03/javaweb_EL表达式/index.html","719ed477047000806a2c08eb88df457b"],["/2023/11/03/javaweb_JSP/index.html","03b7a7b50134aa21d3040623a2250eff"],["/2023/11/03/javaweb_MVC/index.html","3229f4454e472fef13098c6de94f8dfe"],["/2023/11/04/pytorch入门/index.html","ab9a22b1af037d1124e2402fca90eac2"],["/2023/11/05/javaweb_JSTL/index.html","be73ff3f0b5fd2423af2a1054c23eebd"],["/2023/11/05/javaweb_三层架构/index.html","e2e742a25b0eabf367f623f50eb0a0a1"],["/2023/11/07/图的两种存储方式/index.html","097205d5d1bcbbce877c4cc7d5177cf4"],["/2023/11/08/2023牛客寒假基础集训营1/index.html","6ec02c995860a3881d26e558ec24b885"],["/2023/11/15/计算几何/index.html","270bb70148f0f7597cf26b328892a53c"],["/2023/11/16/javase_IO流/index.html","77c67ba21851a5193546cf8f0f763989"],["/2023/11/16/javase_多线程/index.html","baecf7e2bf7411f21d53648e261a7d64"],["/2023/11/17/友谊赛题解/index.html","38e1d25459643de64f6cb90c7e732315"],["/2023/11/23/快读/index.html","a4494bc5003dae33de62ee16b1107ca5"],["/2023/11/24/javase_Lambda表达式/index.html","f563bdee0e74cfda8940d80f93d1f01b"],["/2023/11/24/javase_函数式接口/index.html","495fbb414deb25632f2e2f9eddc0f9a7"],["/2023/11/24/javase_接口组成更新/index.html","a725ea5d92f538201c9ab8c3a88cb24e"],["/2023/11/24/javase_方法引用/index.html","a3d3edc845a44958fc3f97144795c56d"],["/2023/11/24/javase_网络编程/index.html","e49ca03ed0afdd51826ba4448866fa73"],["/2023/11/28/CF_909_Div.3/index.html","64b3e4f184c91227985496fb9bcf5b86"],["/2023/11/29/2023牛客寒假基础集训营2/index.html","f3ced88566f90a8d4fa113698acfb933"],["/2023/11/30/CF_CodeTON_Round_7_Div1+Div2/index.html","e88579ef35bdefe4de5c7acd9a0ad35b"],["/2023/12/01/javase_Stream流/index.html","a762e351838937b86290f463a7f07cbc"],["/2023/12/09/javase-Junit单元测试/index.html","7070c7458270dc85f86bbc19eee4eaad"],["/2023/12/09/javase_反射/index.html","2b32fe20d1dce3ae337a0036b55e7749"],["/2023/12/09/新生杯/index.html","b2a25e182bd3fb2671770e4cfe7b5f3e"],["/2023/12/15/javase_反射2/index.html","9201eb6e98878c8f5c5ffe80f4946286"],["/2023/12/15/javase_注解/index.html","af58afd31beeb31655a4ef067a0ed61b"],["/2024/03/02/等比数列求和/index.html","ede9c5bb3315737c5d24352b412b53c7"],["/2024/03/04/求组合数/index.html","b2dc19887446cf8ea4b8e01821d973c7"],["/2024/03/05/ABC343/index.html","7abffea8715245f2d27016ec2253fb51"],["/2024/03/06/大臣的旅费/index.html","f2e637d87094db39f707c15825afd5b6"],["/2024/03/07/smart-robot/index.html","65c2a825d24865a048d93e15e3749b36"],["/2024/03/07/牛客周赛-35/index.html","282df39af7bd1e43907a2c5c2fd695d1"],["/2024/03/07/金牌厨师/index.html","12d386cd95aad2ea70bc55c57e5ceff5"],["/2024/03/15/2024-3-15-cf/index.html","47d52ac0d9269726221ad8907d8e3c94"],["/2024/03/16/edu-163/index.html","a22016fd5b185344727925936399b3a9"],["/2024/03/17/cf-934-div2/index.html","cee9fcbd8ba36ca4f8eb1cea44b6073f"],["/2024/04/09/bean-基础配置与实例化/index.html","b5caf420e79a74891866ddb4e9fd59f4"],["/2024/04/09/bean-生命周期与管理/index.html","d13037367c725d620acae8afc56167ed"],["/2024/04/09/spring-DI入门案例/index.html","7f0b79f3de0724b560337d00a1d62b0b"],["/2024/04/09/spring-IoC入门案例/index.html","df7900d5651b4223df5b3f6044a5cede"],["/2024/04/09/spring-加载properties文件/index.html","b56bdbf60d54e9aed4670cfe0090c8db"],["/2024/04/09/spring-容器/index.html","b4555581fe9baa7a024952ef63d7c098"],["/2024/04/09/spring-核心概念/index.html","d9dbf36a49005bf1e9521ca54937d84c"],["/2024/04/09/spring-案例-数据源对象管理/index.html","f7b896ab8f8419f1d2b3175865aae90c"],["/2024/04/09/spring-注解开发/index.html","43a512c58d0c63a94e20db0a34053665"],["/2024/04/09/spring-第三方bean管理和依赖注入/index.html","6abb3933986e338ce015c297bff64ebc"],["/2024/04/09/spring-自动装配/index.html","f85516233402d23032e3117c54283458"],["/2024/04/09/spring依赖注入/index.html","0a7081a2fd14ce329e49792c4ec0e3f4"],["/404/index.html","6b25d18ef32ac71a4155412eb6387630"],["/about/index.html","080e14ad3d8b4535ddbcc1ecd8fed29d"],["/archives/2023/10/index.html","f560ed7f8b266c3e4c521bb2f26c4c29"],["/archives/2023/10/page/2/index.html","79d260104ca2fa177afdbac83e06333e"],["/archives/2023/10/page/3/index.html","381e22979227a633f7fd303734b9bc64"],["/archives/2023/11/index.html","b0af598ba1380a37ae9dc427d65463ed"],["/archives/2023/11/page/2/index.html","08a2ab878b50f0bf4aeb0b4e43757bad"],["/archives/2023/11/page/3/index.html","041dcc62749bc3878714725c1aadeb77"],["/archives/2023/12/index.html","fede2cd2a06374bfcc510a5224489d56"],["/archives/2023/index.html","37359d3e1aed3b7d887fd1da03ef84dc"],["/archives/2023/page/2/index.html","450e6d614058c88a5632a8927328562e"],["/archives/2023/page/3/index.html","1b0de97a89d707edfb00171acdbaa93e"],["/archives/2023/page/4/index.html","51d645992fbea5ff807fb57d915cc37d"],["/archives/2023/page/5/index.html","a6e2b7b113f77b213bd559633d6ad3ba"],["/archives/2024/03/index.html","1dabf782abc632039590d0aff9265117"],["/archives/2024/04/index.html","c89a9764b37ff524fbc73f4033b948e4"],["/archives/2024/04/page/2/index.html","77025d49b90d1d27c0faefc6ca8b4a59"],["/archives/2024/index.html","fe31fb36c614b7a17440f65f87947a4e"],["/archives/2024/page/2/index.html","ba750d5adecef9e73f18748f85ada8a4"],["/archives/2024/page/3/index.html","87c7169333e6ccc6e51443e9e4b8c754"],["/archives/index.html","dcd2894652153a9a56a0659c04d50e79"],["/archives/page/2/index.html","edf7322617faf726a415661a79749c66"],["/archives/page/3/index.html","98a8c066f50dc2064afd0fd5be151daa"],["/archives/page/4/index.html","232c73a444e42340d0ab088db95f3adc"],["/archives/page/5/index.html","8a00bd6d43e090586bf215d65b3ab52a"],["/archives/page/6/index.html","67d554ed80723d19b643f7fbcee0101d"],["/archives/page/7/index.html","d0752de25496040062de6fd8d94ffd0b"],["/archives/page/8/index.html","d90b532b399b4206abb37fd910298884"],["/categories/index.html","b725f544d4dad0630552721270efd64b"],["/categories/javase/index.html","261443c5886042388fcb8765fa901dbd"],["/categories/javase/page/2/index.html","872dfe734932009a721287d7cf69625e"],["/categories/javase/page/3/index.html","ab0ce7714ece2e8adccfce2844cd53f2"],["/categories/javaweb/index.html","59e104f61b2468737c4c08d9ec17e904"],["/categories/javaweb/page/2/index.html","0a8da6f25807a0bd2416692c50eb265a"],["/categories/pytorch/index.html","4c51e9a8238f032bca60df5a51668d6d"],["/categories/spring/index.html","d4fc3d7a3f88c8b4e4364ee4f651d55d"],["/categories/spring/page/2/index.html","940b01e714d2cbd4509d34e63049e890"],["/categories/板子/index.html","11892e7cc53638929476b1137f47eb17"],["/categories/水/index.html","331b0476b5f08f1894a5c1e5e2b460fe"],["/categories/简单算法/index.html","110eab05d4766572267f116ffa54f624"],["/categories/题解/index.html","92f5539cce3c2d69660d95f7824fdb20"],["/categories/题解/page/2/index.html","771ee1593edcaeebafc0b42e81d8a2d3"],["/contact/index.html","cbd0085b17cfa0e6aeda8d5fea60ea5a"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","fa94e3961b7b3c3adec97d8e7558f33c"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","56ef28cea24faa1991bf9f599e24187c"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","829e48a273a1ab4ed7db500a4d187122"],["/index.html","e9ec76ba9f618baf5914244c2725af1c"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/medias/banner/0.jpg","72f067a8b884f0e2f92c91328c9ed10e"],["/medias/banner/1.jpg","01170bea5d26ea1c34e86922fbee6162"],["/medias/banner/10.jpg","efe49ac1ff013491b6654c64b64137ae"],["/medias/banner/2.jpg","9459d4ec730f8e273c841e70a4c79001"],["/medias/banner/3.jpg","2e9ee3e0b803b3aa7dfc5518ff67f165"],["/medias/banner/4.jpg","d8c959e2a11c52aaa47e5c63e5520ee8"],["/medias/banner/5.jpg","83ec16804f76e3113256c34a4d0d9edd"],["/medias/banner/6.jpg","64c59c83e7141bee1d83496952e786fe"],["/medias/banner/7.jpg","0e5dd5103b72562dad67380a970c62b4"],["/medias/banner/8.jpg","d66ccd278b387a6e294f5db7171128bc"],["/medias/banner/9.jpg","78e7bd5918d23290cc9c1cb9a479b749"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/微信图片_202309151602551x.jpg","2edb1b9d3a8e5da8a895ab774413d536"],["/medias/微信图片_20230915160701.jpg","e7fb4de47c3c46a80ed40535c036fdee"],["/medias/微信图片_202309151612042.jpg","44afb4fb98e71e1c9a67a394f1a09365"],["/medias/微信图片_20230915161205_fu.jpg","b2cde6e303c84c99c076fb72823e02c0"],["/medias/微信图片_20230915162355.jpg","55a469f7dbd664239c2a2cadfe46b87f"],["/medias/微信图片_202309151623552.jpg","b0d7db7b61ea2f000ea8fb7579579420"],["/page/2/index.html","34206dbb86deccb1b787292b910c47e0"],["/page/3/index.html","346906f7217ddc55d242acfe316befb2"],["/page/4/index.html","5bd91746352491ab7c6f7bcd65863db2"],["/page/5/index.html","76397594be89a20d1e62b881783a343c"],["/page/6/index.html","0c3f51c3823169d7448b69226298f466"],["/page/7/index.html","57fd52325bc8cc8efa0b73c9e8f40b99"],["/page/8/index.html","ab3b989e0615b00a11bbc32cdda1cfd0"],["/sw-register.js","032562a7e2c209588428d7a91b7dea93"],["/tags/2023牛客寒假/index.html","1823502c65d5093e835573a5ecece56d"],["/tags/ABC/index.html","0924ae9f3b121c7a0958a914f4c3bd06"],["/tags/bean/index.html","7a05d5e9474fddc7fa33b3345fa3b215"],["/tags/cf/index.html","5c092389d500c522f0bcb4a45cea1a42"],["/tags/index.html","1d80152487240bdad4aed67cc6f09adf"],["/tags/javase/index.html","95c74a8087ee955e18dafdcdbbf3b2f1"],["/tags/javase/page/2/index.html","876f3e9fbd2d53336d20ebe3af660d18"],["/tags/javase/page/3/index.html","9deb37c18d2e9296c707955cade998b3"],["/tags/javaweb/index.html","a137ed1119e5662304fe2f71f2558213"],["/tags/javaweb/page/2/index.html","d0f2c480bfaadde7af85bc0a667da0ba"],["/tags/pytorch/index.html","d1c21349ddfd83db382f02bfc0346a2e"],["/tags/spring/index.html","1b2a142479ea86a487cb9a8f92cd50e2"],["/tags/spring/page/2/index.html","adb23e4ad9ab7f110fef4f6edef9abdc"],["/tags/依赖注入/index.html","99a95c211ef7489bbab628c182b673e5"],["/tags/容器/index.html","75e2c110e8b325391fb98cf8d2f4841f"],["/tags/新生杯/index.html","841181649df492bfc2fb5f33750e86dc"],["/tags/板子/index.html","8879742ee495efb51370039a2cb8a75b"],["/tags/案例/index.html","91736c93a6916bf63520612a5e204520"],["/tags/水/index.html","17887be1cdd595b768e7555a68030fb0"],["/tags/牛客周赛/index.html","5a23e7e0a92cf52c8aca8163ed5c3c58"],["/tags/牛客小白月赛/index.html","dd812144f5b93d254234bd6abe5cc281"],["/tags/练习/index.html","9cdf529d522d61a14851c38e40ce3b1c"],["/tags/题解/index.html","1e003e04597eb181fb3189af7273f998"],["/tags/题解/page/2/index.html","902f4dac726265ba8df733b0065fba1e"],["/微信图片_20230915160303.jpg","76bdf89f7a16c27ad049efe6d6688306"]];
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
