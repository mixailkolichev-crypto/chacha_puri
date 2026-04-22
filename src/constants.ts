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
      { id: "ca-1", name: "Пхали", weight: "150г", price: 450, description: "шпинат, свекла, стручковая фасоль, грецкие орехи", image: "https://eda.yandex/images/17751752/0482683a0e914ae0aa1fdf7d3d3969b0-400x400nocrop.jpeg" },
      { id: "ca-2", name: "Лобио с грецким орехом", weight: "150г", price: 450, image: "https://eda.yandex/images/18125102/0e75910146294f6280513f9009420389-400x400nocrop.jpeg" },
      { id: "ca-3", name: "Рулетики из баклажанов", weight: "150г", price: 490, description: "с ореховой начинкой", image: "https://eda.yandex/images/17635794/dd30485c04764e3dade9a1ec46adade8-400x400nocrop.jpeg" },
      { id: "ca-4", name: "Баклажаны (Ацицели)", weight: "180г", price: 520, image: "https://eda.yandex/images/18125102/14c08def3b224facb24bb9d71a549dc6-400x400nocrop.jpeg" },
      { id: "ca-5", name: "Ассорти пхали", weight: "300г", price: 950, image: "https://eda.yandex/images/19513998/5b77ed1265a94c5cac0b69566b0563b1-400x400nocrop.jpeg" },
      { id: "ca-6", name: "Аджапсандали", weight: "200г", price: 530, image: "https://eda.yandex/images/18012291/6ea76b83267943e49b2fcc2d963c345c-400x400nocrop.jpeg" },
      { id: "ca-7", name: "Свежая зелень", weight: "100г", price: 400, image: "https://eda.yandex/images/17752687/6b684508e81e4fb39ac038ffca0eca81-400x400nocrop.jpeg" },
      { id: "ca-8", name: "Тарелка свежих овощей", weight: "350г", price: 750, image: "https://eda.yandex/images/19925171/3835335d68a54d32b68a269459fc8170-400x400nocrop.jpeg" },
      { id: "ca-9", name: "Овощная нарезка", weight: "250г", price: 500, image: "https://eda.yandex/images/19925171/3835335d68a54d32b68a269459fc8170-400x400nocrop.jpeg" },
      { id: "ca-10", name: "Соленья", weight: "200г", price: 450, image: "https://eda.yandex/images/18012291/351c797fa8bc4352b7a26266904dd0eb-400x400nocrop.jpeg" },
      { id: "ca-11", name: "Капуста по-гурийски", weight: "150г", price: 250, image: "https://eda.yandex/images/18531941/473e8a2f5115459e89db301d09fac8be-400x400nocrop.jpeg" },
      { id: "ca-12", name: "Сырное ассорти", weight: "250г", price: 670, image: "https://eda.yandex/images/18753459/ab9bc8132ce447df9cf5f52ea85adf57-400x400nocrop.jpeg" },
      { id: "ca-13", name: "Сыр Сулугуни", weight: "150г", price: 400, image: "https://eda.yandex/images/18174674/ec41ce36fcde441c923d6fd4b749694a-400x400nocrop.jpeg" },
      { id: "ca-14", name: "Копченый сулугуни", weight: "100г", price: 450, image: "https://eda.yandex/images/18174674/7cb52551136b43e79067db2dad2e01f0-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "САЛАТЫ",
    items: [
      { id: "s-p", name: "Салат пикантный", weight: "220г", price: 750, image: "https://prazdnichniy40.ru/system/App/Models/Product/6864/cover/main/big/1-00059157.jpg" },
      { id: "s-r", name: "Русский салат", weight: "250г", price: 550, image: "https://aif-s3.aif.ru/images/028/381/478e6a7cf7cb8433c7dce42b8d45d2ff.jpg" },
      { id: "s-1", name: "Грузинский овощной салат", weight: "200г", price: 500, image: "https://eda.yandex/images/18012291/191f46cf9ea64a3285124347eb5757ee-400x400nocrop.jpeg" },
      { id: "s-2", name: "Грузинский овощной салат с орехами", weight: "220г", price: 550, image: "https://eda.yandex/images/18155812/aae22d6017ab45c2a5af5a7713e33b34-400x400nocrop.jpeg" },
      { id: "s-3", name: "Греческий салат", weight: "250г", price: 600, image: "https://eda.yandex/images/18125102/2a9df700ad744650932e9b7d8ab482b4-400x400nocrop.jpeg" },
      { id: "s-4", name: "Капрезе", weight: "300г", price: 650, image: "https://eda.yandex/images/17726510/33a65f8a2d6a425db681a9005fffce03-400x400nocrop.jpeg" },
      { id: "s-5", name: "Салат из хрустящих баклажанов", weight: "250г", price: 600, image: "https://eda.yandex/images/17751752/e5c5a84f323148b7b1aa20b2d9983922-400x400nocrop.jpeg" },
      { id: "s-6", name: "Цезарь с курицей", weight: "220г", price: 600, image: "https://eda.yandex/images/18644967/2a929db1f6d94c6fb454a091fc918f72-400x400nocrop.jpeg" },
      { id: "s-7", name: "Цезарь с креветками", weight: "220г", price: 700, image: "https://eda.yandex/images/17752687/a548345291b347e7ac2134c10ad45b70-400x400nocrop.jpeg" },
      { id: "s-8", name: "Салат Амбассадор", weight: "220г", price: 700, image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-15/363/394/031/023/214/100029462540b0.jpg" },
      { id: "s-9", name: "Руккола с креветками и авокадо", weight: "220г", price: 750, image: "https://eda.yandex/images/17689586/c606d6e2b96e458cacea96b22e57d98b-400x400nocrop.jpeg" },
      { id: "s-10", name: "Оливье с говяжьим языком", weight: "220г", price: 630, image: "https://eda.yandex/images/18125102/b962e043046e425a8f9b3fcbb50c70a2-400x400nocrop.jpeg" },
      { id: "s-11", name: "Салат Мангал", weight: "220г", price: 550, image: "https://eda.yandex/images/18125102/d4cc18a46aff4f078c1cccbea29230e7-400x400nocrop.jpeg" },
      { id: "s-12", name: "Сациви с курицей", weight: "250г", price: 550, image: "https://eda.yandex/images/18531941/286558f68394431cbe22efe1da40fb2e-400x400nocrop.jpeg" },
      { id: "s-13", name: "Мясное ассорти", weight: "300г", price: 800, image: "https://eda.yandex/images/17726510/bb862857fc47488dbcf47b9a5b94b004-400x400nocrop.jpeg" },
      { id: "s-14", name: "Отварной язык с хреном", weight: "130г", price: 600, image: "https://eda.yandex/images/18012291/3b8f49dc02a54994a07bf4666a5fd0c2-400x400nocrop.jpeg" },
      { id: "s-15", name: "Семга слабосоленая", weight: "130г", price: 900, image: "https://eda.yandex/images/19925171/349352924ca04e2284b637014c107e53-400x400nocrop.jpeg" },
      { id: "s-16", name: "Сельдь с жареным картофелем", weight: "200г", price: 600, image: "https://eda.yandex/images/18012291/fc5692242eb04b6791038f327f397e15-400x400nocrop.jpeg" },
      { id: "s-17", name: "Оливки", weight: "120г", price: 350, image: "https://avatars.mds.yandex.net/i?id=78b601470dc03ad7f49282efac6b635e343856bb-12475132-images-thumbs&n=13" },
      { id: "s-18", name: "Лимон", weight: "50г", price: 150, image: "https://stary-dvor.ru/images/tild6333-6363-4962-b866-306637623239__limon.jpg" },
    ]
  },
  {
    title: "ГОРЯЧИЕ БЛЮДА",
    items: [
      { id: "hd-1", name: "Чашушули", weight: "250г", price: 650, image: "https://eda.yandex/images/18012291/f38664447f7f47c2abb063a644dbe0f8-400x400nocrop.jpeg" },
      { id: "hd-2", name: "Чахохбили", weight: "250г", price: 600, image: "https://eda.yandex/images/18644967/8a704174c1054a6892018c3f88721595-400x400nocrop.jpeg" },
      { id: "hd-3", name: "Оджахури (свинина)", weight: "300г", price: 650, image: "https://eda.yandex/images/18012291/a5dbf1bda78947a188a6fec2d1410e36-400x400nocrop.jpeg" },
      { id: "hd-4", name: "Оджахури (баранина)", weight: "300г", price: 750, image: "https://eda.yandex/images/18012291/a5dbf1bda78947a188a6fec2d1410e36-400x400nocrop.jpeg" },
      { id: "hd-5", name: "Мясо по-тбилисски", weight: "300г", price: 700, image: "https://eda.yandex/images/18772141/9395da9425854e18b84bcef3a58c284f-400x400nocrop.jpeg" },
      { id: "hd-6", name: "Оджахури с грибами", weight: "250г", price: 550, image: "https://eda.yandex/images/17752687/8b654bcd6bc3442f957ff4723b6ac588-400x400nocrop.jpeg" },
      { id: "hd-7", name: "Цыпленок табака", weight: "350г", price: 700, image: "https://eda.yandex/images/20022421/17fb5492ad144b9c8f9511aab7320b59-400x400nocrop.jpeg" },
      { id: "hd-8", name: "Цыпленок чкмерули", weight: "450г", price: 750, image: "https://eda.yandex/images/19925171/0a1f9d2db82b4f8089527c678fee651b-400x400nocrop.jpeg" },
      { id: "hd-9", name: "Лобио по-имеретински", weight: "250г", price: 500, image: "https://eda.yandex/images/18125102/85fc965dab404518b93d9d1701e6b4cb-400x400nocrop.jpeg" },
      { id: "hd-10", name: "Долма", weight: "180/30г", price: 600, image: "https://eda.yandex/images/18155812/6d02dd766fb3476b91ad59bb9945735d-400x400nocrop.jpeg" },
      { id: "hd-11", name: "Кучмачи", weight: "250г", price: 650, image: "https://eda.yandex/images/17689586/3831cdc5e3fa437ab85d918a3f6529fe-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "СУПЫ",
    items: [
      { id: "so-1", name: "Харчо", weight: "350г", price: 550, image: "https://eda.yandex/images/17773786/90b6632ce0044202bcf24985fd07b2cf-400x400nocrop.jpeg" },
      { id: "so-2", name: "Борщ", weight: "350г", price: 550, image: "https://eda.yandex/images/17726510/0860fd8a09154f3da5a6979ebed92f98-400x400nocrop.jpeg" },
      { id: "so-3", name: "Куриный суп-лапша", weight: "300г", price: 500, image: "https://eda.yandex/images/18753459/49d629686205499baf737cad211028b5-400x400nocrop.jpeg" },
      { id: "so-4", name: "Солянка", weight: "350г", price: 550, image: "https://eda.yandex/images/20022421/79ffa5e6b700498d8295ae2eb883ecdd-400x400nocrop.jpeg" },
      { id: "so-5", name: "Тыквенный крем-суп", weight: "300г", price: 500, image: "https://eda.yandex/images/18531941/5c6f4ba8183a4811af2aaa6ae75be703-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "МАНГАЛ",
    items: [
      { id: "gr-1", name: "Шашлык из свинины", weight: "200г", price: 790, image: "https://eda.yandex/images/17726510/d49b85399991416498b8d30e3a3e5f24-400x400nocrop.jpeg" },
      { id: "gr-2", name: "Шашлык из баранины", weight: "200г", price: 990, image: "https://eda.yandex/images/17751752/4b3047af6de643b69be060342b5a7dc4-400x400nocrop.jpeg" },
      { id: "gr-3", name: "Шашлык из курицы", weight: "200г", price: 600, image: "https://eda.yandex/images/19513998/18fb9f62d7e34c2f89cffbf14986434f-400x400nocrop.jpeg" },
      { id: "gr-4", name: "Люля-кебаб (микс)", weight: "200г", price: 750, image: "https://eda.yandex/images/17751752/fa466e21cc8e412c83a3ad446bb0625e-400x400nocrop.jpeg" },
      { id: "gr-5", name: "Шашлык из семги", weight: "200г", price: 1500, image: "https://eda.yandex/images/19925171/03694c36f8924220aa58749f4d2eb429-400x400nocrop.jpeg" },
      { id: "gr-6", name: "Дорадо", weight: "250г", price: 1000, image: "https://eda.yandex/images/18125102/387fbca67f6e4bf798c9b22086102f6b-400x400nocrop.jpeg" },
      { id: "gr-7", name: "Форель", weight: "200г", price: 900, image: "https://eda.yandex/images/18012291/b9979582fcd5425097661ac2db9a2043-400x400nocrop.jpeg" },
      { id: "gr-8", name: "Овощи на гриле", weight: "250г", price: 650, image: "https://eda.yandex/images/17773786/0b7d779c90b14c70a8f0bdfac77af72e-400x400nocrop.jpeg" },
      { id: "gr-9", name: "Грибы на мангале", weight: "170г", price: 350, image: "https://eda.yandex/images/19925171/e327fd5c95c545198409157c474f725a-400x400nocrop.jpeg" },
      { id: "gr-10", name: "Бэби-картофель", weight: "200г", price: 350, image: "https://eda.yandex/images/17635794/ada958cfceb24e96bc51686938e5b81f-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "ХИНКАЛИ",
    items: [
      { id: "kh-1", name: "Говядина/Свинина", weight: "80г", price: 110, image: "https://eda.yandex/images/18753459/38d08154fae345f684999d89e495ff9f-400x400nocrop.jpeg" },
      { id: "kh-2", name: "Баранина", weight: "80г", price: 120, image: "https://eda.yandex/images/18753459/38d08154fae345f684999d89e495ff9f-400x400nocrop.jpeg" },
      { id: "kh-3", name: "Говядина", weight: "80г", price: 120, image: "https://eda.yandex/images/17689586/f517fa3d917e4864a6772656640fb2e7-400x400nocrop.jpeg" },
      { id: "kh-4", name: "Сыр", weight: "80г", price: 100, image: "https://eda.yandex/images/17773786/a07d72168ed04ae48368593ae481e377-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "ВЫПЕЧКА",
    items: [
      { id: "bk-1", name: "Хачапури по-мегрельски", weight: "450г", price: 650, image: "https://eda.yandex/images/19513998/a30f12a790fb4a1a9e615fe7686c266f-400x400nocrop.jpeg" },
      { id: "bk-2", name: "Хачапури по-имеретински", weight: "400г", price: 600, image: "https://eda.yandex/images/18531941/f968cda41c424b9dab9ccf2fd1b12ff3-400x400nocrop.jpeg" },
      { id: "bk-3", name: "Хачапури по-аджарски", weight: "350г", price: 650, image: "https://eda.yandex/images/17726510/acc18dbe76254e7983f2dff7deb19a8b-400x400nocrop.jpeg" },
      { id: "bk-4", name: "Лобиани", weight: "450г", price: 550, image: "https://eda.yandex/images/17751752/ef2c683d42194e888e561e7fa3f3103d-400x400nocrop.jpeg" },
      { id: "bk-5", name: "Лаваш", weight: "130г", price: 100, image: "https://eda.yandex/images/18012291/dd3061a9ba584e2ea87b14167726ab74-400x400nocrop.jpeg" },
    ]
  },
  {
    title: "ДЕСЕРТЫ",
    items: [
      { id: "ds-1", name: "Медовик", weight: "150г", price: 550, image: "https://eda.yandex/images/19513998/92a8a734ceb0449cae27ab3350132788-400x400nocrop.jpeg" },
      { id: "ds-2", name: "Наполеон", weight: "150г", price: 550, image: "https://eda.yandex/images/18531941/10e3a908a5c847779d33d19a7e74c7f0-400x400nocrop.jpeg" },
      { id: "ds-3", name: "Мороженое", weight: "220г", price: 550, image: "https://avatars.mds.yandex.net/i?id=b9709fb42576397179a3404f0dcc19be_l-5495963-images-thumbs&n=13" },
    ]
  },
  {
    title: "НАПИТКИ",
    items: [
      { id: "dr-1", name: "Эспрессо", weight: "", price: 200, image: "https://ir.ozone.ru/s3/multimedia-g/6313304092.jpg" },
      { id: "dr-2", name: "Капучино", weight: "", price: 300, image: "https://avatars.mds.yandex.net/i?id=b18a9dcd6697c0495014f87ce31efad83477f10e-4027955-images-thumbs&n=13" },
      { id: "dr-3", name: "Чай", weight: "", price: 400, image: "https://avatars.mds.yandex.net/i?id=673bd5b8445e741ca511363886063d05_l-5185705-images-thumbs&n=13" },
      { id: "dr-4", name: "Сок", weight: "", price: 150, image: "https://eda.yandex/images/17751752/4c436bd83f6f44d4924b01af70fca6b2-400x400nocrop.jpeg" },
      { id: "dr-5", name: "Лимонад", weight: "", price: 800, image: "https://eda.yandex/images/17773786/b5dde174561e47b69b20bae0bb7e1121-400x400nocrop.jpeg" },
      { id: "dr-6", name: "Кока-Кола", weight: "", price: 250, image: "https://eda.yandex/images/18174674/a86b8d712424423f91f46a6fba0d91a9-400x400nocrop.jpeg" },
    ]
  }
];
