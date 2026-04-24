export interface MenuItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  description?: string;
  image: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    title: "ХОЛОДНЫЕ ЗАКУСКИ",
    items: [
      { id: "ca-1", name: "Пхали", weight: "150г", price: 450, description: "Измельченные овощи (шпинат, свекла или стручковая фасоль) с грецкими орехами, чесноком, кинзой и грузинскими специями", image: "https://eda.yandex/images/17751752/0482683a0e914ae0aa1fdf7d3d3969b0-400x400nocrop.jpeg" },
      { id: "ca-2", name: "Лобио с грецким орехом", weight: "150г", price: 450, description: "Отварная красная фасоль с обжаренным луком, измельченным грецким орехом, чесноком, зеленью и специями", image: "https://eda.yandex/images/18125102/0e75910146294f6280513f9009420389-400x400nocrop.jpeg" },
      { id: "ca-3", name: "Рулетики из баклажанов", weight: "150г", price: 490, description: "Слайсы обжаренного баклажана с начинкой из тертого грецкого ореха, чеснока, хмели-сунели и зерен граната", image: "https://eda.yandex/images/17635794/dd30485c04764e3dade9a1ec46adade8-400x400nocrop.jpeg" },
      { id: "ca-4", name: "Баклажаны (Ацицели)", weight: "180г", price: 520, description: "Печеные баклажаны, разобранные на волокна, с болгарским перцем, ореховой заправкой, чесноком и специями", image: "https://eda.yandex/images/18125102/14c08def3b224facb24bb9d71a549dc6-400x400nocrop.jpeg" },
      { id: "ca-5", name: "Ассорти пхали", weight: "300г", price: 950, description: "Набор из различных видов пхали: шпинат, свекла, фасоль, капуста с грецким орехом", image: "https://eda.yandex/images/19513998/5b77ed1265a94c5cac0b69566b0563b1-400x400nocrop.jpeg" },
      { id: "ca-6", name: "Аджапсандали", weight: "200г", price: 530, description: "Овощное рагу из баклажанов, болгарского перца, томатов, лука, чеснока и свежей зелени", image: "https://eda.yandex/images/18012291/6ea76b83267943e49b2fcc2d963c345c-400x400nocrop.jpeg" },
      { id: "ca-7", name: "Свежая зелень", weight: "100г", price: 400, description: "Ассорти из сезонной зелени: кинза, петрушка, укроп, тархун, зеленый лук, редис", image: "https://avatars.mds.yandex.net/i?id=c268362215996ee8c78e4fd46e81bc0de4977a44-4988204-images-thumbs&n=13&w=320&h=320" },
      { id: "ca-8", name: "Тарелка свежих овощей", weight: "350г", price: 750, description: "Свежие томаты, огурцы, болгарский перец, острый стручковый перец и пучок зелени", image: "https://avatars.mds.yandex.net/i?id=8abbe3fae650c4b29233500722828f8f_l-8210081-images-thumbs&n=13&w=560&h=320" },
      { id: "ca-9", name: "Овощная нарезка", weight: "250г", price: 500, description: "Нарезка из свежих огурцов, томатов и болгарского перца", image: "https://eda.yandex/images/19925171/3835335d68a54d32b68a269459fc8170-400x400nocrop.jpeg" },
      { id: "ca-10", name: "Соленья", weight: "200г", price: 450, description: "Домашние соленья: маринованный джонджоли, перец, чеснок, огурцы, помидоры, гурийская капуста", image: "https://eda.yandex/images/18012291/351c797fa8bc4352b7a26266904dd0eb-400x400nocrop.jpeg" },
      { id: "ca-11", name: "Капуста по-гурийски", weight: "150г", price: 250, description: "Капуста, маринованная со свеклой, чесноком, сельдереем и острым перцем", image: "https://eda.yandex/images/18531941/473e8a2f5115459e89db301d09fac8be-400x400nocrop.jpeg" },
      { id: "ca-12", name: "Сырное ассорти", weight: "250г", price: 670, description: "Ассортимент грузинских сыров: сулугуни, имеретинский, копченый сулугуни, чечил", image: "https://eda.yandex/images/18753459/ab9bc8132ce447df9cf5f52ea85adf57-400x400nocrop.jpeg" },
      { id: "ca-13", name: "Сыр Сулугуни", weight: "150г", price: 400, description: "Классический молодой рассольный сыр из коровьего молока", image: "https://eda.yandex/images/18174674/ec41ce36fcde441c923d6fd4b749694a-400x400nocrop.jpeg" },
      { id: "ca-14", name: "Копченый сулугуни", weight: "100г", price: 450, description: "Традиционный сулугуни, подкопченный на натуральных опилках", image: "https://eda.yandex/images/18174674/7cb52551136b43e79067db2dad2e01f0-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "САЛАТЫ",
    items: [
      { id: "s-p", name: "Салат пикантный", weight: "220г", price: 750, description: "Микс салата с обжаренной телятиной, болгарским перцем, черри и пикантной заправкой на основе соевого соуса и чили", image: "https://prazdnichniy40.ru/system/App/Models/Product/6864/cover/main/big/1-00059157.jpg" },
      { id: "s-r", name: "Русский салат", weight: "250г", price: 550, description: "Традиционный салат с картофелем, морковью, солеными огурцами, зеленым горошком, яйцом и домашним майонезом", image: "https://aif-s3.aif.ru/images/028/381/478e6a7cf7cb8433c7dce42b8d45d2ff.jpg" },
      { id: "s-1", name: "Грузинский овощной салат", weight: "200г", price: 500, description: "Свежие томаты, огурцы, красный лук, острый перец и много свежей кинзы и базилика", image: "https://eda.yandex/images/18012291/191f46cf9ea64a3285124347eb5757ee-400x400nocrop.jpeg" },
      { id: "s-2", name: "Грузинский овощной салат с орехами", weight: "220г", price: 550, description: "Свежие томаты, огурцы, красный лук с добавлением измельченного грецкого ореха и винного уксуса", image: "https://eda.yandex/images/18155812/aae22d6017ab45c2a5af5a7713e33b34-400x400nocrop.jpeg" },
      { id: "s-3", name: "Греческий салат", weight: "250г", price: 600, description: "Свежие овощи, сыр фета, маслины, красный лук, заправленные оливковым маслом и орегано", image: "https://eda.yandex/images/18125102/2a9df700ad744650932e9b7d8ab482b4-400x400nocrop.jpeg" },
      { id: "s-4", name: "Капрезе", weight: "300г", price: 650, description: "Слайсы нежной моцареллы и спелых томатов с соусом песто и капелькой бальзамика", image: "https://eda.yandex/images/17726510/33a65f8a2d6a425db681a9005fffce03-400x400nocrop.jpeg" },
      { id: "s-5", name: "Салат из хрустящих баклажанов", weight: "250г", price: 600, description: "Баклажаны во фритюре с томатами, творожным сыром, семенами кунжута и соусом сладкий чили", image: "https://eda.yandex/images/17751752/e5c5a84f323148b7b1aa20b2d9983922-400x400nocrop.jpeg" },
      { id: "s-6", name: "Цезарь с курицей", weight: "220г", price: 600, description: "Листья салата ромэн, обжаренное куриное филе, гренки, пармезан и фирменный соус цезарь", image: "https://eda.yandex/images/18644967/2a929db1f6d94c6fb454a091fc918f72-400x400nocrop.jpeg" },
      { id: "s-7", name: "Цезарь с креветками", weight: "220г", price: 700, description: "Тигровые креветки, салат ромэн, гренки, пармезан, черри и соус цезарь", image: "https://eda.yandex/images/17752687/a548345291b347e7ac2134c10ad45b70-400x400nocrop.jpeg" },
      { id: "s-9", name: "Руккола с креветками и авокадо", weight: "220г", price: 750, description: "Свежая руккола, тигровые креветки, спелый авокадо, черри, кедровые орешки и пармезан", image: "https://eda.yandex/images/17689586/c606d6e2b96e458cacea96b22e57d98b-400x400nocrop.jpeg" },
      { id: "s-10", name: "Оливье с говяжьим языком", weight: "220г", price: 630, description: "Авторская версия классики: нежный телячий язык, овощи, яйцо и домашний майонез", image: "https://eda.yandex/images/18125102/b962e043046e425a8f9b3fcbb50c70a2-400x400nocrop.jpeg" },
      { id: "s-11", name: "Салат Мангал", weight: "220г", price: 550, description: "Запеченные на углях баклажаны, болгарский перец и томаты, приправленные чесноком и зеленью", image: "https://eda.yandex/images/18125102/d4cc18a46aff4f078c1cccbea29230e7-400x400nocrop.jpeg" },
      { id: "s-12", name: "Сациви с курицей", weight: "250г", price: 550, description: "Кусочки нежного куриного мяса в густом пряном соусе из тертого грецкого ореха и грузинских специй", image: "https://eda.yandex/images/18531941/286558f68394431cbe22efe1da40fb2e-400x400nocrop.jpeg" },
      { id: "s-13", name: "Мясное ассорти", weight: "300г", price: 800, description: "Нарезка из буженины, куриного рулета и отварного говяжьего языка с горчицей и хреном", image: "https://eda.yandex/images/17726510/bb862857fc47488dbcf47b9a5b94b004-400x400nocrop.jpeg" },
      { id: "s-14", name: "Отварной язык с хреном", weight: "130г", price: 600, description: "Тонко нарезанный отварной говяжий язык с хреном и горчицей", image: "https://eda.yandex/images/18012291/3b8f49dc02a54994a07bf4666a5fd0c2-400x400nocrop.jpeg" },
      { id: "s-15", name: "Семга слабосоленая", weight: "130г", price: 900, description: "Филе семги собственного посола с лимоном и оливками", image: "https://eda.yandex/images/19925171/349352924ca04e2284b637014c107e53-400x400nocrop.jpeg" },
      { id: "s-16", name: "Сельдь с жареным картофелем", weight: "200г", price: 600, description: "Филе сельди с хрустящим жареным картофелем и маринованным луком", image: "https://eda.yandex/images/18012291/fc5692242eb04b6791038f327f397e15-400x400nocrop.jpeg" },
      { id: "s-17", name: "Оливки", weight: "120г", price: 350, description: "Консервированные оливки или маслины", image: "https://avatars.mds.yandex.net/i?id=78b601470dc03ad7f49282efac6b635e343856bb-12475132-images-thumbs&n=13" },
      { id: "s-18", name: "Лимон", weight: "50г", price: 150, description: "Свежий лимон, нарезанный дольками", image: "https://stary-dvor.ru/images/tild6333-6363-4962-b866-306637623239__limon.jpg" },
    ]
  },
  {
    title: "ГОРЯЧИЕ БЛЮДА",
    items: [
      { id: "hd-1", name: "Чашушули", weight: "250г", price: 650, description: "Томленая в собственном соку телятина с томатами, болгарским перцем, луком, чесноком и букетом грузинских трав", image: "https://eda.yandex/images/18012291/f38664447f7f47c2abb063a644dbe0f8-400x400nocrop.jpeg" },
      { id: "hd-2", name: "Чахохбили", weight: "250г", price: 600, description: "Рагу из курицы, тушеное в густом томатном соусе с луком, чесноком, зеленью и ароматными специями", image: "https://eda.yandex/images/18644967/8a704174c1054a6892018c3f88721595-400x400nocrop.jpeg" },
      { id: "hd-3", name: "Оджахури (свинина)", weight: "300г", price: 650, description: "Домашнее жаркое: обжаренные кусочки свиной шейки, золотистый картофель, лук, чеснок и специи", image: "https://eda.yandex/images/18012291/a5dbf1bda78947a188a6fec2d1410e36-400x400nocrop.jpeg" },
      { id: "hd-4", name: "Оджахури (баранина)", weight: "300г", price: 750, description: "Сытное блюдо из нежной баранины с картофелем, луком и традиционными грузинскими приправами", image: "https://eda.yandex/images/18012291/a5dbf1bda78947a188a6fec2d1410e36-400x400nocrop.jpeg" },
      { id: "hd-5", name: "Мясо по-тбилисски", weight: "300г", price: 700, description: "Запеченная говядина с грибами, овощами под нежной сырной корочкой в кеци", image: "https://eda.yandex/images/18772141/9395da9425854e18b84bcef3a58c284f-400x400nocrop.jpeg" },
      { id: "hd-6", name: "Оджахури с грибами", weight: "250г", price: 550, description: "Картофель, обжаренный с грибами вешенками, луком, чесноком и свежей зеленью", image: "https://eda.yandex/images/17752687/8b654bcd6bc3442f957ff4723b6ac588-400x400nocrop.jpeg" },
      { id: "hd-7", name: "Цыпленок табака", weight: "350г", price: 700, description: "Молодой цыпленок, зажаренный до хрустящей корочки под прессом, с чесночным соусом", image: "https://eda.yandex/images/20022421/17fb5492ad144b9c8f9511aab7320b59-400x400nocrop.jpeg" },
      { id: "hd-8", name: "Цыпленок чкмерули", weight: "450г", price: 750, description: "Обжаренный цыпленок в нежном сливочно-чесночном соусе со специями", image: "https://eda.yandex/images/19925171/0a1f9d2db82b4f8089527c678fee651b-400x400nocrop.jpeg" },
      { id: "hd-9", name: "Лобио по-имеретински", weight: "250г", price: 500, description: "Красная фасоль, томленая в глиняном горшочке с луком, сельдереем, чесноком и специями", image: "https://eda.yandex/images/18125102/85fc965dab404518b93d9d1701e6b4cb-400x400nocrop.jpeg" },
      { id: "hd-10", name: "Долма", weight: "180/30г", price: 600, description: "Фарш из говядины и свинины с рисом в маринованных виноградных листьях, подается с соусом мацони", image: "https://eda.yandex/images/18155812/6d02dd766fb3476b91ad59bb9945735d-400x400nocrop.jpeg" },
      { id: "hd-11", name: "Кучмачи", weight: "250г", price: 650, description: "Традиционное блюдо из куриных потрошков, обжаренных с луком, специями и зернами граната", image: "https://eda.yandex/images/17689586/3831cdc5e3fa437ab85d918a3f6529fe-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "СУПЫ",
    items: [
      { id: "so-1", name: "Харчо", weight: "350г", price: 550, description: "Острый и наваристый суп из говяжьей грудинки с рисом, ткемали, грецкими орехами и ароматной зеленью", image: "https://eda.yandex/images/17773786/90b6632ce0044202bcf24985fd07b2cf-400x400nocrop.jpeg" },
      { id: "so-2", name: "Борщ", weight: "350г", price: 550, description: "Сытный суп на говяжьем бульоне со свеклой, свежей капустой, картофелем и морковью, подается со сметаной", image: "https://eda.yandex/images/17726510/0860fd8a09154f3da5a6979ebed92f98-400x400nocrop.jpeg" },
      { id: "so-3", name: "Куриный суп-лапша", weight: "300г", price: 500, description: "Легкий суп на прозрачном курином бульоне с домашней лапшой, нежным куриным филе и зеленью", image: "https://eda.yandex/images/18753459/49d629686205499baf737cad211028b5-400x400nocrop.jpeg" },
      { id: "so-4", name: "Солянка", weight: "350г", price: 550, description: "Густой наваристый суп с несколькими видами мяса, маринованными огурчиками, маслинами и лимоном", image: "https://eda.yandex/images/20022421/79ffa5e6b700498d8295ae2eb883ecdd-400x400nocrop.jpeg" },
      { id: "so-5", name: "Тыквенный крем-суп", weight: "300г", price: 500, description: "Нежный суп из печеной тыквы со сливками, подается с тыквенными семечками", image: "https://eda.yandex/images/18531941/5c6f4ba8183a4811af2aaa6ae75be703-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "МАНГАЛ",
    items: [
      { id: "gr-1", name: "Шашлык из свинины", weight: "200г", price: 790, description: "Сочная свиная шея, маринованная по авторскому рецепту, подается с красным луком и соусом сацебели", image: "https://eda.yandex/images/17726510/d49b85399991416498b8d30e3a3e5f24-400x400nocrop.jpeg" },
      { id: "gr-2", name: "Шашлык из баранины", weight: "200г", price: 990, description: "Нежная мякоть барашка, приготовленная на углях, с добавлением ароматного кумина и кориандра", image: "https://eda.yandex/images/17751752/4b3047af6de643b69be060342b5a7dc4-400x400nocrop.jpeg" },
      { id: "gr-3", name: "Шашлык из курицы", weight: "200г", price: 600, description: "Куриное бедро без кости, маринованное в кефире со специями, обжаренное до золотистой корочки", image: "https://eda.yandex/images/19513998/18fb9f62d7e34c2f89cffbf14986434f-400x400nocrop.jpeg" },
      { id: "gr-4", name: "Люля-кебаб (микс)", weight: "200г", price: 750, description: "Сочный люля-кебаб из микса говядины и баранины с добавлением репчатого лука и кавказских трав", image: "https://eda.yandex/images/17751752/fa466e21cc8e412c83a3ad446bb0625e-400x400nocrop.jpeg" },
      { id: "gr-5", name: "Шашлык из семги", weight: "200г", price: 1500, description: "Стейк из нежной семги, приготовленный на углях, подается с долькой лимона", image: "https://eda.yandex/images/19925171/03694c36f8924220aa58749f4d2eb429-400x400nocrop.jpeg" },
      { id: "gr-6", name: "Дорадо", weight: "250г", price: 1000, description: "Целая рыбка дорадо, запеченная на мангале с прованскими травами и лимоном", image: "https://eda.yandex/images/18125102/387fbca67f6e4bf798c9b22086102f6b-400x400nocrop.jpeg" },
      { id: "gr-7", name: "Форель", weight: "200г", price: 900, description: "Речная форель, приготовленная на открытом огне, с тонким ароматом дымка", image: "https://eda.yandex/images/18012291/b9979582fcd5425097661ac2db9a2043-400x400nocrop.jpeg" },
      { id: "gr-8", name: "Овощи на гриле", weight: "250г", price: 650, description: "Ассорти из запеченных на углях болгарского перца, баклажанов, цукини, томатов и грибов", image: "https://eda.yandex/images/17773786/0b7d779c90b14c70a8f0bdfac77af72e-400x400nocrop.jpeg" },
      { id: "gr-9", name: "Грибы на мангале", weight: "170г", price: 350, description: "Крупные шампиньоны, маринованные в соевом соусе со специями, обжаренные на шампуре", image: "https://eda.yandex/images/19925171/e327fd5c95c545198409157c474f725a-400x400nocrop.jpeg" },
      { id: "gr-10", name: "Бэби-картофель", weight: "200г", price: 350, description: "Мини-картофель, запеченный на углях до хрустящей корочки с солью и специями", image: "https://eda.yandex/images/17635794/ada958cfceb24e96bc51686938e5b81f-400x400nocrop.jpeg" },
      { id: "gr-11", name: "Шашлык из свиных рёбер", weight: "200гр", price: 650, description: "Мясистые свиные ребрышки, томленные на углях в пикантном маринаде", image: "https://eda.yandex/images/3518584/84a459575bdfa78db921a0d7addf33c5-400x400nocrop.jpeg" },
      { id: "gr-12", name: "Корейка баранья", weight: "200гр", price: 1400, description: "Отборная баранья корейка на кости, приготовленная на открытом огне с кавказскими травами", image: "https://eda.yandex/images/3808326/83c2d2dc637762fbe521b3036e244b0c-400x400nocrop.jpeg" },
      { id: "gr-13", name: "Семечки баранины", weight: "200гр", price: 650, description: "Мелкие кусочки нежной баранины на косточке, обжаренные до хруста", image: "https://eda.yandex/images/2794391/610d8b929a86468993fa5f4bde6390be-400x400nocrop.jpeg" },
      { id: "gr-14", name: "Куриные крылышки на углях", weight: "200гр", price: 550, description: "Хрустящие куриные крылышки с ароматом дымка и легкой остротой", image: "https://eda.yandex/images/3595381/fe64f298a39236e6dc95d9df287357a3-400x400nocrop.jpeg" },
      { id: "gr-15", name: "Люля-кебаб свинина/говядина", weight: "200гр", price: 750, description: "Сочный люля-кебаб из нежной свинины и отборной говядины со специями", image: "https://eda.yandex/images/3472725/6fedf4e9a3d15bfcfbeeaa7d50248761-400x400nocrop.jpeg" },
      { id: "gr-16", name: "Люля-кебаб баранина", weight: "200гр", price: 800, description: "Традиционный люля-кебаб из рубленой баранины с курдюком и восточными пряностями", image: "https://eda.yandex/images/3472725/6fedf4e9a3d15bfcfbeeaa7d50248761-400x400nocrop.jpeg" },
      { id: "gr-17", name: "Люля-кебаб куриный", weight: "200гр", price: 650, description: "Легкий и сочный люля-кебаб из куриного филе с добавлением свежей зелени", image: "https://eda.yandex/images/2394388/c88dc8650348931cdd5bd7932fffbe71-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "ХИНКАЛИ",
    items: [
      { id: "kh-1", name: "Говядина/Свинина", weight: "80г", price: 110, description: "Мешочки из тонкого теста с сочным фаршем из говядины и свинины, ароматной кинзой и насыщенным бульоном", image: "https://eda.yandex/images/18753459/38d08154fae345f684999d89e495ff9f-400x400nocrop.jpeg" },
      { id: "kh-2", name: "Баранина", weight: "80г", price: 120, description: "Традиционные хинкали с фаршем из отборной баранины, приправленные кумином и свежей зеленью", image: "https://eda.yandex/images/18753459/38d08154fae345f684999d89e495ff9f-400x400nocrop.jpeg" },
      { id: "kh-3", name: "Говядина", weight: "80г", price: 120, description: "Классические хинкали с рубленной говядиной, черным перцем и кинзой", image: "https://eda.yandex/images/17689586/f517fa3d917e4864a6772656640fb2e7-400x400nocrop.jpeg" },
      { id: "kh-4", name: "Сыр", weight: "80г", price: 100, description: "Хинкали с нежной начинкой из смеси грузинских сыров сулугуни и имеретинского", image: "https://eda.yandex/images/17773786/a07d72168ed04ae48368593ae481e377-400x400nocrop.jpeg" },
      { id: "kh-5", name: "Поджарка хинкали", weight: "80гр", price: 10, description: "Обжаривание хинкали для получения золотистой хрустящей корочки", image: "https://avatars.mds.yandex.net/i?id=0b0259354d6d475f2cce110e0ba530cf_l-5297681-images-thumbs&n=13&w=560&h=320" },
    ]
  },
  {
    title: "ВЫПЕЧКА",
    items: [
      { id: "bk-1", name: "Хачапури по-мегрельски", weight: "450г", price: 650, description: "Грузинская лепешка с двойной порцией сыра сулугуни: внутри и хрустящая румяная корочка сверху", image: "https://eda.yandex/images/19513998/a30f12a790fb4a1a9e615fe7686c266f-400x400nocrop.jpeg" },
      { id: "bk-2", name: "Хачапури по-имеретински", weight: "400г", price: 600, description: "Традиционная закрытая лепешка с начинкой из молодого имеретинского сыра", image: "https://eda.yandex/images/18531941/f968cda41c424b9dab9ccf2fd1b12ff3-400x400nocrop.jpeg" },
      { id: "bk-3", name: "Хачапури по-аджарски", weight: "350г", price: 650, description: "Лодочка из воздушного теста с тягучим сыром, сливочным маслом и желтком в центре", image: "https://eda.yandex/images/17726510/acc18dbe76254e7983f2dff7deb19a8b-400x400nocrop.jpeg" },
      { id: "bk-6", name: "Аджарули капризуля", weight: "450гр", price: 750, description: "Особый вид аджарского хачапури с дополнительными ингредиентами по вкусу шеф-повара", image: "https://avatars.mds.yandex.net/i?id=fc3b59210e22299849641a3804749a07_l-7543369-images-thumbs&n=13&w=560&h=320" },
      { id: "bk-7", name: "Хачапури пеновани", weight: "350гр", price: 550, description: "Слоеный хачапури квадратной формы с нежной сырной начинкой в хрустящем тесте", image: "https://avatars.mds.yandex.net/i?id=714f1f1c76493d40cc8efaf75e1f56c2_l-5522895-images-thumbs&n=13&w=480&h=320" },
      { id: "bk-8", name: "Хачапури со шпинатом и сыром", weight: "400гр", price: 600, description: "Ароматная лепешка с сочной начинкой из свежего шпината и грузинского сыра", image: "https://avatars.mds.yandex.net/i?id=201ac67d70ea4077427ff746062e8192fdd3d798-13095363-images-thumbs&n=13&w=480&h=320" },
      { id: "bk-4", name: "Лобиани", weight: "450г", price: 550, description: "Лепешка с сытной начинкой из протертой красной фасоли, обжаренного лука и пряностей", image: "https://eda.yandex/images/3709189/04bc5a5e4dc75363dbdfe2d5befcca03-400x400nocrop.jpeg" },
      { id: "bk-9", name: "Блинчики с мясом", weight: "3шт", price: 350, description: "Тонкие домашние блинчики с сочным мясным фаршем и специями", image: "https://eda.yandex/images/3514991/7b8768434985474d99511edda87ac54f-400x400nocrop.jpeg" },
      { id: "bk-10", name: "Мчади", weight: "130гр", price: 200, description: "Традиционная пресная лепешка из кукурузной муки, жаренная до хрустящей корочки", image: "https://eda.yandex/images/3506707/df6f3a1e1c504400baa4f10403be6749-400x400nocrop.jpeg" },
      { id: "bk-11", name: "Чвиштари", weight: "140гр", price: 270, description: "Кукурузная лепешка с добавлением большого количества тягучего сыра внутри", image: "https://avatars.mds.yandex.net/i?id=70809680340401020d1e2ba1d09d814a_l-4322170-images-thumbs&n=13&w=560&h=320" },
      { id: "bk-5", name: "Лаваш", weight: "130г", price: 100, description: "Традиционный грузинский хлеб Шоти, испеченный в каменной печи Тонэ", image: "https://eda.yandex/images/18012291/dd3061a9ba584e2ea87b14167726ab74-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "СОУСЫ",
    items: [
      { id: "sc-1", name: "Сацебели", weight: "60мл", price: 130, description: "Традиционный грузинский томатный соус со свежей зеленью и ароматными специями", image: "https://eda.yandex/images/14667178/ca67cfecc0e27ffe1156160f564aae8a-400x400nocrop.jpeg" },
      { id: "sc-2", name: "Ткемали", weight: "60мл", price: 150, description: "Кисло-сладкий соус из дикой сливы (ткемали) с чесноком и грузинскими травами", image: "https://eda.yandex/images/13806227/60653739979ca021c8c35f6ce30574ab-400x400nocrop.jpeg" },
      { id: "sc-3", name: "Сметана", weight: "60мл", price: 130, description: "Густая натуральная сметана", image: "https://eda.yandex/images/13873613/e425e4f5264bfc3ffeb1c92677ac8a31-400x400nocrop.jpeg" },
      { id: "sc-4", name: "Соус чесночный", weight: "60мл", price: 140, description: "Пикантный соус на основе мацони или сметаны with добавлением свежего чеснока и укропа", image: "https://eda.yandex/images/14667178/e425e4f5264bfc3ffeb1c92677ac8a31-400x400nocrop.jpeg" },
      { id: "sc-5", name: "Наршараб", weight: "50мл", price: 150, description: "Густой соус из уваренного гранатного сока, отлично подходит к мясу и рыбе", image: "https://eda.yandex/images/12773219/3fc7557a9453dcb7cee84fec46dc3345-400x400nocrop.jpeg" },
      { id: "sc-6", name: "Кетчуп", weight: "60мл", price: 130, description: "Классический томатный кетчуп", image: "https://eda.yandex/images/14667178/4584ce8ba39ac655661b4ec27b7c5bab-400x400nocrop.jpeg" },
      { id: "sc-7", name: "Барбекю", weight: "60мл", price: 130, description: "Пряный соус с ароматом копчения", image: "https://eda.yandex/images/14667178/42164ed4abc10f390b39f0441f433f15-400x400nocrop.jpeg" },
      { id: "sc-8", name: "Аджика", weight: "30гр", price: 130, description: "Острая грузинская приправа из красного перца, чеснока и пряных трав", image: "https://eda.yandex/images/14667178/ba19ce639668ba2da6cbb26fd16914f6-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "ДЕСЕРТЫ",
    items: [
      { id: "ds-1", name: "Медовик", weight: "150г", price: 550, description: "Домашний торт из тонких медовых коржей, пропитанных нежным сметанным кремом", image: "https://eda.yandex/images/19513998/92a8a734ceb0449cae27ab3350132788-400x400nocrop.jpeg" },
      { id: "ds-2", name: "Наполеон", weight: "150г", price: 550, description: "Классический десерт из множества слоев хрустящего теста с заварным ванильным кремом", image: "https://eda.yandex/images/18531941/10e3a908a5c847779d33d19a7e74c7f0-400x400nocrop.jpeg" },
      { id: "ds-3", name: "Мороженое", weight: "220г", price: 550, description: "Три шарика мороженого (ванильное, шоколадное, клубничное) со свежими ягодами или сиропом", image: "https://avatars.mds.yandex.net/i?id=b9709fb42576397179a3404f0dcc19be_l-5495963-images-thumbs&n=13" },
      { id: "ds-4", name: "Пирожное “Шу”", weight: "150гр", price: 600, description: "Французское заварное пирожное с нежным кремом и хрустящим слоем кракелин", image: "https://avatars.mds.yandex.net/i?id=f03cf01ab8e051a51167a1fa67e25c8d_l-5886161-images-thumbs&n=13&w=560&h=320" },
      { id: "ds-5", name: "Варенье в ассортименте", weight: "100гр", price: 250, description: "Домашнее варенье: из белой черешни, грецкого ореха, инжира или кизила", image: "https://avatars.mds.yandex.net/i?id=678fe2f6b390318e5028ab7623f710de_l-12621680-images-thumbs&n=13&w=580&h=320" },
      { id: "ds-6", name: "Ореховая тарелка к чаю", weight: "180гр", price: 500, description: "Ассорти из фундука, миндаля, грецкого ореха и кешью", image: "https://avatars.mds.yandex.net/i?id=36cf593fa9de1c2778e9be604370ccf448d4b74a-5118451-images-thumbs&n=13" },
      { id: "ds-7", name: "Мёд", weight: "50гр", price: 200, description: "Натуральный горный цветочный мёд", image: "https://avatars.mds.yandex.net/i?id=2ca3cab39949a02ebf54eb38592b8f17_l-8129183-images-thumbs&n=13&w=320&h=320" },
      { id: "ds-8", name: "Мацони с медом", weight: "180гр", price: 300, description: "Традиционный густой грузинский кисломолочный напиток с добавлением натурального меда", image: "https://avatars.mds.yandex.net/i?id=1f221689113901d3f0cf69166a83ef4c_l-9103868-images-thumbs&n=13&w=420&h=320" },
    ]
  },
  {
    title: "НАПИТКИ",
    items: [
      { id: "dr-1", name: "Эспрессо", weight: "30мл", price: 200, description: "Классический крепкий кофе с плотной кофейной пенкой", image: "https://ir.ozone.ru/s3/multimedia-g/6313304092.jpg" },
      { id: "dr-2", name: "Капучино", weight: "200мл", price: 300, description: "Кофе на основе эспрессо с добавлением подогретого вспененного молока", image: "https://avatars.mds.yandex.net/i?id=b18a9dcd6697c0495014f87ce31efad83477f10e-4027955-images-thumbs&n=13" },
      { id: "dr-latte", name: "Латте", weight: "250мл", price: 350, description: "Кофейный напиток с большим количеством молока и тонким слоем молочной пены", image: "https://avatars.mds.yandex.net/i?id=fb5b16faa933da6bb31fb409bec703b1_l-5743478-images-thumbs&n=13&w=480&h=320" },
      { id: "dr-oriental", name: "Кофе по-восточному", weight: "70мл", price: 250, description: "Ароматный кофе, сваренный в джезве на раскаленном песке", image: "https://avatars.mds.yandex.net/i?id=8033dd7f9c54ef3d734c2ee0571a62c37125738b-5604246-images-thumbs&n=13&w=420&h=320" },
      { id: "dr-tea-black", name: "Чай чёрный в ассортименте", weight: "0,5л", price: 400, description: "Листовой черный чай на выбор: классический, с чабрецом, бергамотом или лесными ягодами", image: "https://avatars.mds.yandex.net/i?id=673bd5b8445e741ca511363886063d05_l-5185705-images-thumbs&n=13" },
      { id: "dr-tea-green", name: "Чай зелёный", weight: "0,5л", price: 400, description: "Высококачественный крупнолистовой зеленый чай с мягким вкусом", image: "https://avatars.mds.yandex.net/i?id=6162da5c90332b70b3339d1e43247bd1adee0dfc-5434646-images-thumbs&n=13&w=320&h=420" },
      { id: "dr-tea-oolong", name: "Чай зелёный молочный Улун", weight: "0,5л", price: 400, description: "Зеленый чай с уникальным сливочно-молочным ароматом и послевкусием", image: "https://avatars.mds.yandex.net/i?id=36ab483bd9566591e68e2bf079cc8e2d_l-5558053-images-thumbs&n=13&w=420&h=320" },
      { id: "dr-tea-buckthorn", name: "Чай облепиховый", weight: "0,5л", price: 550, description: "Витаминный напиток из ягод облепихи, апельсина и натурального меда", image: "https://avatars.mds.yandex.net/i?id=c421364d6fd448104c038678c0420ae78034d7e9-12391133-images-thumbs&n=13&w=480&h=320" },
      { id: "dr-tea-ginger", name: "Чай с мёдом и имбирём", weight: "0,5л", price: 550, description: "Согревающий чай со свежим корнем имбиря, лимоном и медом", image: "https://avatars.mds.yandex.net/i?id=98ad0ca523db552f3fe7babb852b5a55_l-7904189-images-thumbs&n=13&w=420&h=320" },
      { id: "dr-4", name: "Сок", weight: "200мл", price: 150, description: "Фруктовый сок в ассортименте (яблоко, апельсин, вишня, томат)", image: "https://eda.yandex/images/17751752/4c436bd83f6f44d4924b01af70fca6b2-400x400nocrop.jpeg" },
      { id: "dr-mors", name: "Морс", weight: "200мл", price: 150, description: "Освежающий напиток из натуральных лесных ягод (клюква или брусника)", image: "https://avatars.mds.yandex.net/i?id=57f4061f9523d967142cafe4e88f609d_l-9203684-images-thumbs&n=13&w=460&h=320" },
      { id: "dr-kompot", name: "Компот домашний в ассортименте", weight: "1л", price: 500, description: "Традиционный домашний компот из сезонных фруктов и ягод", image: "https://avatars.mds.yandex.net/i?id=b1350b385ee31ecf6eb32d19c88df406_l-5177029-images-thumbs&n=13&w=480&h=320" },
      { id: "dr-borjomi", name: "Боржоми", weight: "0,5л", price: 260, description: "Всемирно известная грузинская лечебная минеральная вода", image: "https://avatars.mds.yandex.net/i?id=c18a8d604acbe3c14c04c169ef6ca0a8_l-5241056-images-thumbs&n=13&w=320&h=320" },
      { id: "dr-sairme-gas", name: "Саирме с газом", weight: "0,5л", price: 250, description: "Природная минеральная вода из источников Саирме, газированная", image: "https://avatars.mds.yandex.net/i?id=8fbb6bc18ac687b3c710f078aa61520d_l-7732367-images-thumbs&n=13&w=320&h=320" },
      { id: "dr-sairme-no-gas", name: "Саирме без газа", weight: "0,5л", price: 250, description: "Природная минеральная вода Саирме, без газа", image: "https://avatars.mds.yandex.net/i?id=8fbb6bc18ac687b3c710f078aa61520d_l-7732367-images-thumbs&n=13&w=320&h=320" },
      { id: "dr-bonaqua", name: "Бонаква без газа", weight: "0,5л", price: 180, description: "Чистая питьевая вода без газа", image: "https://avatars.mds.yandex.net/i?id=0b9bdec0e92d464a7cb2636c0a4edbed_l-5160943-images-thumbs&n=13&w=320&h=320" },
      { id: "dr-5", name: "Лимонад", weight: "0,5л", price: 800, description: "Традиционный грузинский лимонад Натахтари в ассортименте", image: "https://eda.yandex/images/17773786/b5dde174561e47b69b20bae0bb7e1121-400x400nocrop.jpeg" },
      { id: "dr-6", name: "Кока-Кола", weight: "330мл", price: 250, description: "Классический газированный напиток", image: "https://eda.yandex/images/18174674/a86b8d712424423f91f46a6fba0d91a9-400x400nocrop.jpeg" },
      { id: "dr-cc-zero", name: "Coca-Cola Zero", weight: "330мл", price: 250, description: "Классический вкус Coca-Cola без сахара", image: "https://avatars.mds.yandex.net/i?id=ba1f4d11240eb9fe1e72e32571ebabdb7cfe92e4-10153545-images-thumbs&n=13&w=320&h=320" },
    ]
  }
];
