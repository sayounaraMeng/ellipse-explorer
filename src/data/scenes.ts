import { LifeScene } from '../types';

export const LIFE_SCENES: LifeScene[] = [
  {
    id: 'egg',
    title: '鸡蛋的秘密',
    description: '为什么鸡蛋是椭圆形的？这种形状有什么好处？',
    imageUrl: '/scenes/egg.jpg',
    question: '鸡蛋的椭圆形状主要有什么好处？',
    options: [
      '更容易滚动',
      '能承受更大压力，不易碎',
      '看起来更美观',
      '方便母鸡孵化'
    ],
    correctAnswer: 1,
    hint: '想想鸡蛋需要承受什么力？如果太圆会怎样？'
  },
  {
    id: 'planet',
    title: '行星轨道',
    description: '地球绕太阳转的轨道是什么形状？',
    imageUrl: '/scenes/planet.jpg',
    question: '根据开普勒第一定律，行星绕太阳运动的轨道是什么形状？',
    options: ['圆形', '椭圆形', '抛物线', '双曲线'],
    correctAnswer: 1,
    hint: '太阳位于轨道的什么位置？'
  },
  {
    id: 'whisper',
    title: '回音壁的秘密',
    description: '北京天坛的回音壁为什么能产生奇妙的声音效果？',
    imageUrl: '/scenes/whisper.jpg',
    question: '回音壁利用了椭圆的什么性质？',
    options: [
      '椭圆周长最长',
      '椭圆面积最大',
      '从一个焦点发出的声音会汇聚到另一个焦点',
      '椭圆最对称'
    ],
    correctAnswer: 2,
    hint: '站在回音壁的两个特定位置，一个人小声说话，另一个人能听到。'
  },
  {
    id: 'stadium',
    title: '体育场设计',
    description: '为什么很多体育场设计成椭圆形？',
    imageUrl: '/scenes/stadium.jpg',
    question: '椭圆形体育场的主要优势是什么？',
    options: [
      '节省建筑材料',
      '容纳更多观众',
      '让每位观众都有良好的视野',
      '方便运动员跑步'
    ],
    correctAnswer: 2,
    hint: '想象你坐在椭圆的不同位置看球赛...'
  },
  {
    id: 'medical',
    title: '医学成像',
    description: 'CT扫描和核磁共振中的椭圆',
    imageUrl: '/scenes/medical.jpg',
    question: '医学成像中，椭圆方程有什么应用？',
    options: [
      '计算药物剂量',
      '重建人体断层图像',
      '测量体温',
      '检测心率'
    ],
    correctAnswer: 1,
    hint: '从多个角度扫描，用数学方法重建内部结构。'
  }
];
