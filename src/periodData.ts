import { PeriodEnum } from "./philosophersData";

export interface PeriodDataType {
  img: string;
  title: string;
  desc: string;
  era: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  dates: string;
  period: PeriodEnum;
  period_id: number;
}

export const periodData: PeriodDataType[] = [
  {
    img:
      "https://voegelinview.com/wp-content/uploads/2019/05/319520_66d4_2-e1557060293660.jpg",
    title: "Pre-Socratic",
    desc: "Greek philosophers active before Socrates",
    era: "Ancient",
    text1:
      "The Pre-Socratic period of the Ancient era of philosophy refers to Greek philosophers active before Socrates, or contemporaries of Socrates who expounded on earlier knowledge.",
    text2:
      "Generally speaking, all that remains of their works are a few textual fragments and the quotations of later philosophers and historians.",
    text3:
      "The Pre-Socratic philosophers rejected traditional mythological explanations for the phenomena they saw around them in favor of more rational explanations. They started to ask questions like where did everything come from, and why is there such variety, and how can nature be described mathematically? They tended to look for universal principles to explain the whole of Nature. Although they are arguably more important for the questions they asked than the answers they arrived at, the problems and paradoxes they identified became the basis for later mathematical, scientific and philosophic study.",
    text4:
      "Important movements of the period include the Milesian School, the Eleatic School, the Ephesian School, Pluralism, Pythagoreanism, Sophism and Atomism.",
    period: PeriodEnum.PRESOCRATIC,
    dates: "7th - 5th Century B.C.",
    period_id: 1,
  },
  {
    img: "https://www.papermasters.com/images/greek-philosophers.jpg",
    title: "Socratic",
    desc: "Greek contemporaries and near contemporaries of Socrates",
    era: "Ancient",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.SOCRATIC,
    dates: "5th - 4th Century B.C.",
    period_id: 2,
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg",
    title: "Hellenistic",
    desc:
      "Post-Aristotelian schools of thought developed in the Hellenistic world",
    era: "Ancient",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.HELLENISTIC,
    dates: "3rd Century B.C. - 3th Century A.D.",
    period_id: 3,
  },
  {
    img: "https://www.crystalinks.com/RomanHallofPhilosophers2.jpg",
    title: "Roman",
    desc: "Roman period continues the classical Greek tradition",
    era: "Ancient",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.ROMAN,
    dates: "1st Century B.C. - 5th Century A.D.",
    period_id: 4,
  },
  {
    img:
      "https://www.ferrum.edu/wp-content/uploads/sites/26/2017/02/Faith-and-Reason.jpg",
    title: "Medieval",
    desc:
      "Western philosophical thought after the intellectual drought of the Dark Ages",
    era: "Medieval",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.MEDIEVAL,
    dates: "6th - 14th Century",
    period_id: 5,
  },
  {
    img: "https://miro.medium.com/proxy/1*lYnicUb7jCKutSK9_baLaA.jpeg",
    title: "Renaissance",
    desc:
      "Bridge between Medieval philosophy and the start of Modern philosophy",
    era: "Medieval",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.RENAISANCE,
    dates: "15th - 16th Century",
    period_id: 6,
  },
  {
    img:
      "https://claudt-at-rhhs.weebly.com/uploads/2/3/1/0/23100646/6764727_orig.jpg",
    title: "Age of Reason",
    desc: "The start of modern philosophy",
    era: "Modern",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.REASON,
    dates: "17th Century",
    period_id: 7,
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Salon_de_Madame_Geoffrin.jpg/385px-Salon_de_Madame_Geoffrin.jpg",
    title: "Age of Enlightenment",
    desc:
      "A continuation of, but also a reaction against the process of rationalization",
    era: "Modern",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.ENLIGHTENMENT,
    dates: "18th Century",
    period_id: 8,
  },
  {
    img:
      "https://voegelinview.com/wp-content/uploads/2019/05/319520_66d4_2-e1557060293660.jpg",
    title: "Modern",
    desc: "",
    era: "Modern",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    period: PeriodEnum.MODERN,
    dates: "19th - 20th Century",
    period_id: 9,
  },
];
