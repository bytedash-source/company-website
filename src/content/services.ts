export type Service = {
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Mobile Application Development",
    description:
      "แอป iOS และ Android ที่รวดเร็ว เสถียร และออกแบบให้ตอบโจทย์ธุรกิจ",
  },
  {
    index: "02",
    title: "Web Application Development",
    description: "เว็บแอปที่ปลอดภัย responsive และพร้อมรองรับการเติบโต",
  },
  {
    index: "03",
    title: "UX/UI Design",
    description:
      "ประสบการณ์ที่ชัดเจน ใช้งานง่าย และสอดคล้องกับเป้าหมายของผู้ใช้",
  },
  {
    index: "04",
    title: "Prototyping & Wireframing",
    description:
      "เปลี่ยนไอเดียให้เห็นภาพ ทดสอบได้ และตัดสินใจได้ก่อนเริ่มพัฒนา",
  },
  {
    index: "05",
    title: "Technology Consulting",
    description:
      "ช่วยวางทิศทาง digital product ปรับปรุงระบบเดิม และเลือกเทคโนโลยีที่เหมาะสม",
  },
];
