var mongo=require("./mogofz.js");
// mongo("add","usersurface",{uid:"001",username:'张三',pas:123456},function(value){
// })
// mongo("add","usersurface",{uid:"002",username:'李四',pas:456789},function(value){
// })
// mongo("add","usersurface",{uid:"003",username:'王五',pas:789101},function(value){
// })
// 头部分类
// var shopClassify = [
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_01.png',
//             classifyname:'时尚女装',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['上衣','长袖T恤','衬衫','针织衫','卫衣/绒衫','打底衫','短袖衬衫','马甲'],
//                     ['裙子','夏款连衣裙','高腰裙','蕾丝裙','连衣裙','半身裙','迷你裙','裙裤','职业套裙','套装'],
//                     ['外套','短外套/夹克','西装','风衣','皮衣','大衣','中长款外套','中老年服装','套装'],
//                     ['裤子','哈伦裤','打底裤','新款女裤','精品女裤','九/七分裤','牛仔裤','短裤/热裤','休闲裤','连衣裤','铅笔裤'],
//                     ['精致内衣','文胸','女内裤','睡衣/家居服套装','袜子','塑身衣','背心/吊带','保暖内衣','连体袜','丝袜','长袜','情趣内衣'],
//                     ['冬装','羽绒服/裤','棉衣']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_02.png',
//             classifyname:'品牌男装',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['春秋装','长袖T恤','西服','长袖衬衫','风衣','长袖POLO衫','针织衫','卫衣','夹克/外套','马甲'],
//                     ['夏装','短袖T恤','短袖POLO衫','短袖衬衫','背心'],
//                     ['裤子','牛仔裤','休闲裤','西裤','中裤/短裤','保暖裤'],
//                     ['内衣配饰','内裤','袜子','新款女裤','精品女裤','九/七分裤','牛仔裤','短裤/热裤','休闲裤','连衣裤','铅笔裤'],
//                     ['精致内衣','文胸','女内裤','睡衣/居家服'],
//                     ['冬装','皮衣','棉衣','毛衣','羽绒服/裤','马甲','大衣'],
//                     ['特色市场','工装制服','唐装/中山装/中式服饰']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_03.png',
//             classifyname:'家电数码',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['电脑','平板电脑','笔记本电脑','台式电脑','一体机','显示器','主机','声卡/扩展卡','U盘','键盘','鼠标/鼠标垫','主板','内存','硬盘','显卡','服务器/工作站','手写板/笔'],
//                     ['手机','直板','翻盖','智能','配件'],
//                     ['生活小家电','加湿器','挂烫机','吸尘器','干衣机','对讲机'],
//                     ['厨房小家电','电水壶','微波炉','电磁炉'],
//                     ['大家电','等离子电视','3D电视','油烟机','冷柜','消毒柜','电烤箱'],
//                     ['影音电器','MP3/录音笔','电子辞典'],
//                     ['特色市场','工装制服','唐装/中山装/中式服饰']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png','http://localhost:3000/images/fgge45h4j.png','http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_04.png',
//             classifyname:'鞋包配饰',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_05.png',
//             classifyname:'运动健康',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_06.png',
//             classifyname:'美容护肤',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_07.png',
//             classifyname:'家居日用',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_08.png',
//             classifyname:'家具家装',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_09.png',
//             classifyname:'美食保健',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_10.png',
//             classifyname:'文体汽配',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_11.png',
//             classifyname:'母婴用品',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_14.png',
//             classifyname:'珠宝，奢饰品',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
//         {   
//             biaoshi:'shopClassify',
//             icon:'http://localhost:3000/images/item_0.png',
//             classifyname:'成谋产品专区',
//             subclassify:{
//                 title:[
//                     ['热销品类','热销品类','热销品类','热销品类']
//                 ],
//                 titlist:[
//                     ['女鞋','单鞋/低帮鞋','凉鞋','长靴','拖鞋','雨鞋','板鞋','平底鞋','居家鞋','休闲鞋'],
//                     ['男鞋','正装皮鞋','板鞋','休闲皮鞋','户外鞋'],
//                     ['女包','手拎包','斜挎包','背包','化妆包','手拿包'],
//                     ['男包','单肩包','单肩包','单肩包'],
//                     ['功能箱包','旅行箱','旅行箱','旅行箱','运动包','运动包','运动包'],
//                     ['服饰配件','围巾','领带']
//                 ],
//                 pinpai:['http://localhost:3000/images/fgge45h4j.png']
//             }
//         },
// ]
 // 添加头部分类数据
// for(var i=0;i<shopClassify.length;i++){
//     mongo("add","shopClassify",shopClassify[i],function(value){})
// }

// 今日精选
var selected = {
    bitmap:'http://localhost:3000/images/h2_img01.png',
    selectedcon:'http://localhost:3000/images/zt088.jpg',
    imglist:[
        {"pid":"jx1001","srcimg":"images/photo01.jpg"},
        {"pid":"jx1002","srcimg":"images/zt13.jpg"},
        {"pid":"jx1003","srcimg":"images/zt15.jpg"},
        {"pid":"jx1004","srcimg":"images/zt17.jpg"},
        {"pid":"jx1005","srcimg":"images/zt29.jpg"},
        {"pid":"jx1005","srcimg":"images/zt31.jpg"},
        {"pid":"jx1006","srcimg":"images/zt33.jpg"},
        {"pid":"jx1006","srcimg":"images/zt35.jpg"}
    ]
}

// 各楼层数据
var floordata = {
    floorimg:[
        'http://localhost:3000/images/h2_img02.gif',
        'http://localhost:3000/images/h2_img03.gif',
        'http://localhost:3000/images/h2_img04.gif',
        'http://localhost:3000/images/h2_img06.gif',
        'http://localhost:3000/images/h2_img05.gif'
    ],
    classify:[
        ['生活小家电','手机','生活','厨房','大家电','影音','数码'],
        ['上衣','裙子','外套','裤子','内衣','冬装'],
        ['零食','茶叶','粮油','保健品','土特','餐饮','酒类'],
        ['护肤','彩妆','香水','精油','美发','美妆','男士'],
        ['女鞋','男鞋','女包','男包','功能','服饰配','珠宝箱']
    ]
}
// 相应类别内容
var listcon = [
    {
        biaoshi:'homeelectric',
        data:[
            {"pid":"hd1001","srcimg":"images/jd1.jpg","name":"西点Seeden 咖啡机SD-9031 1.2升 （包邮）","Price":159.00},
            {"pid":"hd1002","srcimg":"images/jd2.jpg","name":"康雅电热水壶+茶壶（套装） TM-196（包邮）","Price":399.00},
            {"pid":"hd1003","srcimg":"images/jd3.jpg","name":"韩国福库营养电饭煲CRP-AH1078FV（包邮）","Price":3888.00},
            {"pid":"hd1004","srcimg":"images/jd4.png","name":"星钻 豪华塔扇（木纹）FTA 包邮","Price":588.00},
            {"pid":"hd1005","srcimg":"images/jd5.jpg","name":"Electrolux/伊莱克斯 Z803 酒店工业卧室吸尘器家用桶式","Price":1239.00},
            {"pid":"hd1006","srcimg":"images/jd6.jpg","name":"福库加湿型空气净化机CAC-AH1210FW（包邮）","Price":2999.00},
            {"pid":"hd1007","srcimg":"images/jd7.jpg","name":"Electrolux伊莱克斯无线立式便携式超静音超强吸力吸尘器","Price":2680.00},
            {"pid":"hd1008","srcimg":"images/jd8.jpg","name":"七鑫旗蒸汽清洗机","Price":138.00},
            {"pid":"hd1009","srcimg":"images/jd9.jpg","name":"机灵 机灵空调扇系列风扇 N25FKY","Price":499.00},
            {"pid":"hd10010","srcimg":"images/jd10.jpg","name":"Electrolux/伊莱克斯ZLUX1821IW静音大功率吸尘器","Price":699.00}
        ]
    },
    {
        biaoshi:'mobilePhone',
        data:[
            {"pid":"sj1001","srcimg":"images/sj1.jpg","name":"（现金价）苹果 原装线控耳机","Price":179.00}
        ]
    },
    {
        biaoshi:'life',
        data:[
            {"pid":"sh1001","srcimg":"images/sh1.jpg","name":"（现金价）TCL 乐途车载负离","Price":318.00},
            {"pid":"sh1002","srcimg":"images/sh2.jpg","name":"（现金价）Electrolux","Price":1239.00},
            {"pid":"sh1003","srcimg":"images/sh3.jpg","name":"（现金价）新品飞科FC9602","Price":1299.00},
            {"pid":"sh1004","srcimg":"images/sh4.jpg","name":"（现金价）ipeson爱品生 ","Price":4950.00}
        ]
    },
    {
        biaoshi:'Kitchen',
        data:[
            {"pid":"cf1001","srcimg":"images/cf1.jpg","name":"（现金价）Electrolux","Price":999.00},
            {"pid":"cf1002","srcimg":"images/cf2.jpg","name":"（现金价）荣事达料理机 RZ-","Price":259.00},
            {"pid":"cf1003","srcimg":"images/cf3.jpg","name":"（现金价）荣事达电热锅 SK3","Price":189.00},
            {"pid":"cf1004","srcimg":"images/cf4.jpg","name":"（现金价）TCL 碧然净水壶 ","Price":312.00},
            {"pid":"cf1005","srcimg":"images/cf5.jpg","name":"（现金价）亚摩斯爆米花机 BM","Price":348.00},
            {"pid":"cf1006","srcimg":"images/cf6.jpg","name":"（现金价）TCL 活力苏打水机","Price":1399.00},
            {"pid":"cf1007","srcimg":"images/cf7.jpg","name":"（现金价）斑马鱼 二代超滤净水","Price":1680.00}
        ]
    },
]
