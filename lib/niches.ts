export type Niche = {
  k: string;
  slug: string;
  name: string;
  line: string;
  bg: string;
  ink: string;
  acc: string;
  accInk: string;
  items: [string, string][];
};

export const niches: Niche[] = [
  {
    k: "Кафе",
    slug: "cafe",
    name: "Кофейня «Утро»",
    line: "Свежий кофе и выпечка каждый день",
    bg: "#3B2A20",
    ink: "#FFF3E6",
    acc: "#F2B84B",
    accInk: "#2B1B10",
    items: [["Капучино", "150 сом"], ["Круассан", "90 сом"], ["Завтрак", "290 сом"]],
  },
  {
    k: "Барбершоп",
    slug: "barbershop",
    name: "Барбершоп «Фейд»",
    line: "Стрижка и борода по записи",
    bg: "#161A22",
    ink: "#F1F3F7",
    acc: "#E8453C",
    accInk: "#FFFFFF",
    items: [["Стрижка", "400 сом"], ["Борода", "250 сом"], ["Комплекс", "600 сом"]],
  },
  {
    k: "Автомойка",
    slug: "carwash",
    name: "Автомойка «Блеск»",
    line: "Помоем быстро, без очереди",
    bg: "#0F3D5E",
    ink: "#EAF6FF",
    acc: "#5BD1FF",
    accInk: "#06283F",
    items: [["Кузов", "300 сом"], ["Комплекс", "600 сом"], ["Химчистка", "от 2 500 сом"]],
  },
  {
    k: "Салон",
    slug: "salon",
    name: "Салон «Лилия»",
    line: "Маникюр, ресницы, укладки",
    bg: "#F6E3EC",
    ink: "#4A1F36",
    acc: "#B83B7A",
    accInk: "#FFFFFF",
    items: [["Маникюр", "500 сом"], ["Ресницы", "900 сом"], ["Укладка", "600 сом"]],
  },
  {
    k: "Спортзал",
    slug: "gym",
    name: "Фитнес «Сила»",
    line: "Тренажёры и тренеры рядом с домом",
    bg: "#1D2B1F",
    ink: "#EFFBEF",
    acc: "#9BE564",
    accInk: "#13200F",
    items: [["Разовое", "300 сом"], ["Месяц", "2 500 сом"], ["Тренер", "800 сом"]],
  },
  {
    k: "Репетитор",
    slug: "tutor",
    name: "Английский с Айдаром",
    line: "Занятия онлайн и офлайн",
    bg: "#FFF6D6",
    ink: "#3A2F0B",
    acc: "#2F5BFF",
    accInk: "#FFFFFF",
    items: [["Пробный урок", "бесплатно"], ["Урок", "500 сом"], ["Месяц", "3 600 сом"]],
  },
];