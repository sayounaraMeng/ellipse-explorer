import { useAppStore } from '../stores/appStore';
import { Button } from './ui/Button';
import { LearningMode } from '../types';

export function ModeSelector() {
  const selectMode = useAppStore((state: { selectMode: (mode: LearningMode) => void }) => state.selectMode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">椭圆探索者</h1>
          <p className="text-lg text-gray-600">选择你的学习方式，开始探索椭圆的奥秘</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 探索模式 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">探索模式</h2>
            <p className="text-gray-600 mb-6">
              从生活场景出发，通过 3D 实验和 AI 对话，
              像数学家一样发现椭圆的本质。
            </p>
            <ul className="text-sm text-gray-500 mb-6 space-y-2">
              <li>✓ 5 个生活场景探索</li>
              <li>✓ 3D 圆锥切割实验</li>
              <li>✓ AI 苏格拉底式对话</li>
              <li>✓ 适合时间充裕（20-30分钟）</li>
            </ul>
            
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full"
              onClick={() => selectMode(LearningMode.EXPLORATION)}
            >
              开始探索
            </Button>
          </div>

          {/* 通关模式 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">通关模式</h2>
            <p className="text-gray-600 mb-6">
              快速诊断知识漏洞，通过智能练习高效掌握，
              用最短时间攻克椭圆标准方程。
            </p>
            <ul className="text-sm text-gray-500 mb-6 space-y-2">
              <li>✓ 3 分钟知识诊断</li>
              <li>✓ 微课精讲</li>
              <li>✓ 智能自适应练习</li>
              <li>✓ 适合时间紧张（10-15分钟）</li>
            </ul>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={() => selectMode(LearningMode.CHALLENGE)}
            >
              开始通关
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
