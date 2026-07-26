export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "ทำความเข้าใจธุรกิจ ผู้ใช้ และเป้าหมาย",
  },
  {
    index: "02",
    title: "Define & Design",
    description: "วาง user flow, wireframe, prototype และ visual design",
  },
  {
    index: "03",
    title: "Build",
    description: "พัฒนาระบบที่มี performance, security และ scalability",
  },
  {
    index: "04",
    title: "Test",
    description: "ตรวจสอบคุณภาพ ประสิทธิภาพ และความปลอดภัย",
  },
  {
    index: "05",
    title: "Launch & Improve",
    description: "เปิดใช้งาน ดูแล และปรับปรุงต่อเนื่อง",
  },
];
