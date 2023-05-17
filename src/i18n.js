import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Home: "Home",
        Menu: "Menu",
        Drinks: "Drinks",
        Breakfast: "Breakfast",
        Coffee: 'Coffee',
        MilkTea: 'Milk tea',
        Sandwich: "Sandwich",
        Bagel: "Bagel",
        BasePrice: 'Base price',
        AddToCart: 'Add to cart',
        FastFood: 'Fastfood',
        FruitJuice: 'Fruit juice',
        Contact: 'Contact',
        SocialMedia: 'Social media',
        QuickLinks: 'Quick links',
        About: 'About'
      },
    },
    vn: {
      translation: {
        Home: "Trang chủ",
        Menu: "Thực đơn",
        Drinks: "Đồ uống",
        Breakfast: "Điểm tâm",
        Coffee: 'Cà phê',
        MilkTea: 'Trà sữa',
        Sandwich: "Bánh mì",
        Bagel: "Bánh mì vòng",
        BasePrice: 'Khởi điểm',
        AddToCart: 'Thêm vào giỏ',
        FastFood: 'Đồ ăn nhanh',
        FruitJuice: 'Nước trái cây',
        Contact: 'Liên hệ',
        SocialMedia: 'Mạng xã hội',
        QuickLinks: 'Truy cập nhanh',
        About: 'Giới thiệu'
      },
    },
  },
});

export default i18n;
