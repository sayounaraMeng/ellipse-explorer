// 学习模式
export enum LearningMode {
  EXPLORATION = 'exploration',
  CHALLENGE = 'challenge'
}

// 学习节点类型
export enum NodeType {
  SCENE = 'scene',
  EXPERIMENT = 'experiment',
  DIALOG = 'dialog',
  QUIZ = 'quiz',
  PRACTICE = 'practice'
}

// 学习节点
export interface LearningNode {
  id: string;
  type: NodeType;
  title: string;
  completed: boolean;
  unlocked: boolean;
  data?: Record<string, any>;
}

// 学习路径
export interface LearningPath {
  mode: LearningMode;
  nodes: LearningNode[];
  currentNodeId: string;
  startTime: Date;
  lastAccessTime: Date;
}

// 生活场景
export interface LifeScene {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
}

// AI 消息
export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    type?: 'hint' | 'explanation' | 'encouragement';
    relatedNodeId?: string;
  };
}

// 诊断结果
export interface DiagnosticResult {
  overallScore: number;
  knowledgePoints: Array<{
    name: string;
    score: number;
    weak: boolean;
  }>;
  recommendedPath: string[];
  generatedAt: Date;
}

// 练习题
export interface PracticeProblem {
  id: string;
  type: 'concept' | 'calculation' | 'application';
  difficulty: 1 | 2 | 3;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  relatedKnowledge: string[];
}

// 学习进度
export interface LearningProgress {
  userId: string;
  currentMode: LearningMode;
  currentPath: LearningPath;
  completedNodes: string[];
  achievements: string[];
  totalStudyTime: number;
  lastSyncTime: Date;
}

// 应用状态
export interface AppState {
  learningMode: LearningMode | null;
  currentPath: LearningPath | null;
  messages: AIMessage[];
  diagnosticResult: DiagnosticResult | null;
  progress: LearningProgress | null;
  isLoading: boolean;
  error: string | null;
}

// 应用错误
export enum AppError {
  NETWORK_ERROR = 'NETWORK_ERROR',
  AI_SERVICE_ERROR = 'AI_SERVICE_ERROR',
  STORAGE_FULL = 'STORAGE_FULL',
  STORAGE_CORRUPTED = 'STORAGE_CORRUPTED',
  WEBGL_NOT_SUPPORTED = 'WEBGL_NOT_SUPPORTED',
  RENDER_ERROR = 'RENDER_ERROR',
  INVALID_MODE_SWITCH = 'INVALID_MODE_SWITCH',
  NODE_NOT_FOUND = 'NODE_NOT_FOUND',
  QUIZ_INCOMPLETE = 'QUIZ_INCOMPLETE'
}
