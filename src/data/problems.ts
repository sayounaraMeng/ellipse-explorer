import { PracticeProblem } from '../types';

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  // 概念理解题 - 难度 1
  {
    id: 'p1',
    type: 'concept',
    difficulty: 1,
    question: '椭圆的标准方程中，a 和 b 分别代表什么？',
    options: [
      'a 是短半轴，b 是长半轴',
      'a 是长半轴，b 是短半轴',
      'a 和 b 都是长半轴',
      'a 和 b 都是焦距'
    ],
    correctAnswer: 1,
    explanation: '在椭圆标准方程 x²/a² + y²/b² = 1 中，a 是长半轴（半长轴），b 是短半轴（半短轴），且 a > b。',
    relatedKnowledge: ['标准方程', '长半轴', '短半轴']
  },
  {
    id: 'p2',
    type: 'concept',
    difficulty: 1,
    question: '椭圆的焦点位于什么位置？',
    options: [
      '椭圆的中心',
      '椭圆的长轴上，关于中心对称',
      '椭圆的短轴上',
      '椭圆的任意位置'
    ],
    correctAnswer: 1,
    explanation: '椭圆的两个焦点位于长轴上，关于椭圆中心对称，坐标为 (±c, 0) 或 (0, ±c)。',
    relatedKnowledge: ['焦点', '长轴', '中心对称']
  },
  // 计算题 - 难度 2
  {
    id: 'p3',
    type: 'calculation',
    difficulty: 2,
    question: '已知椭圆方程为 x²/25 + y²/9 = 1，求 a、b、c 的值。',
    options: ['a=5, b=3, c=4', 'a=25, b=9, c=16', 'a=5, b=9, c=4', 'a=25, b=3, c=16'],
    correctAnswer: 0,
    explanation: '由方程可知 a²=25，b²=9，所以 a=5，b=3。根据 c²=a²-b²=25-9=16，得 c=4。',
    relatedKnowledge: ['标准方程', 'a,b,c关系', '计算']
  },
  {
    id: 'p4',
    type: 'calculation',
    difficulty: 2,
    question: '椭圆的长轴长为 10，短轴长为 6，求椭圆的标准方程。',
    options: [
      'x²/100 + y²/36 = 1',
      'x²/25 + y²/9 = 1',
      'x²/10 + y²/6 = 1',
      'x²/5 + y²/3 = 1'
    ],
    correctAnswer: 1,
    explanation: '长轴长 2a=10，所以 a=5，a²=25；短轴长 2b=6，所以 b=3，b²=9。标准方程为 x²/25 + y²/9 = 1。',
    relatedKnowledge: ['标准方程', '长轴', '短轴']
  },
  // 应用题 - 难度 3
  {
    id: 'p5',
    type: 'application',
    difficulty: 3,
    question: '地球绕太阳运行的轨道是椭圆，太阳位于一个焦点。已知轨道半长轴 a≈1.5×10⁸ km，半短轴 b≈1.4998×10⁸ km，求地球到太阳的最远距离。',
    options: [
      '1.5×10⁸ km',
      '1.4998×10⁸ km',
      '约 1.5002×10⁸ km',
      '约 1.52×10⁸ km'
    ],
    correctAnswer: 2,
    explanation: 'c²=a²-b²，c≈√(2.25×10¹⁶-2.2494×10¹⁶)≈√(0.0006×10¹⁶)≈2.45×10⁶ km。最远距离=a+c≈1.52×10⁸ km。',
    relatedKnowledge: ['实际应用', 'a,b,c关系', '最远距离']
  }
];
