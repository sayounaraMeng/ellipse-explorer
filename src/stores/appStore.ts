import { create } from 'zustand';
import { 
  AppState, 
  LearningMode, 
  LearningPath, 
  LearningNode, 
  NodeType, 
  AIMessage,
  LearningProgress
} from '../types';
import { StorageService } from '../services/StorageService';
import { LIFE_SCENES } from '../data/scenes';

interface AppActions {
  selectMode: (mode: LearningMode) => void;
  completeScene: (sceneId: string) => void;
  unlockNextNode: () => void;
  addMessage: (message: AIMessage) => void;
  clearMessages: () => void;
  saveProgress: () => void;
  loadProgress: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

type AppStore = AppState & AppActions;

const createExplorationPath = (): LearningPath => ({
  mode: LearningMode.EXPLORATION,
  nodes: LIFE_SCENES.map((scene: typeof LIFE_SCENES[0], index: number) => ({
    id: scene.id,
    type: NodeType.SCENE,
    title: scene.title,
    completed: false,
    unlocked: index === 0
  })),
  currentNodeId: LIFE_SCENES[0].id,
  startTime: new Date(),
  lastAccessTime: new Date()
});

export const useAppStore = create<AppStore>((set, get) => ({
  // 初始状态
  learningMode: null,
  currentPath: null,
  messages: [],
  diagnosticResult: null,
  progress: null,
  isLoading: false,
  error: null,

  // 选择模式
  selectMode: (mode: LearningMode) => {
    const path = mode === LearningMode.EXPLORATION 
      ? createExplorationPath()
      : null;
    
    set({ 
      learningMode: mode, 
      currentPath: path,
      messages: []
    });
  },

  // 完成场景
  completeScene: (sceneId: string) => {
    const state = get();
    const currentPath = state.currentPath;
    if (!currentPath) return;

    const updatedNodes: LearningNode[] = currentPath.nodes.map((node: LearningNode) => 
      node.id === sceneId ? { ...node, completed: true } : node
    );

    set({
      currentPath: {
        ...currentPath,
        nodes: updatedNodes,
        lastAccessTime: new Date()
      }
    });
  },

  // 解锁下一个节点
  unlockNextNode: () => {
    const state = get();
    const currentPath = state.currentPath;
    if (!currentPath) return;

    const currentIndex = currentPath.nodes.findIndex((n: LearningNode) => n.id === currentPath.currentNodeId);
    const nextNode = currentPath.nodes[currentIndex + 1];
    
    if (nextNode) {
      const updatedNodes: LearningNode[] = currentPath.nodes.map((node: LearningNode) => 
        node.id === nextNode.id ? { ...node, unlocked: true } : node
      );

      set({
        currentPath: {
          ...currentPath,
          nodes: updatedNodes,
          currentNodeId: nextNode.id,
          lastAccessTime: new Date()
        }
      });
    }
  },

  // 添加消息
  addMessage: (message: AIMessage) => {
    set((state: AppState) => ({
      messages: [...state.messages, message]
    }));
  },

  // 清空消息
  clearMessages: () => {
    set({ messages: [] });
  },

  // 保存进度
  saveProgress: () => {
    const state = get();
    const learningMode = state.learningMode;
    const currentPath = state.currentPath;
    
    if (!learningMode || !currentPath) return;

    const progress: LearningProgress = {
      userId: 'anonymous',
      currentMode: learningMode,
      currentPath,
      completedNodes: currentPath.nodes.filter((n: LearningNode) => n.completed).map((n: LearningNode) => n.id),
      achievements: [],
      totalStudyTime: 0,
      lastSyncTime: new Date()
    };

    StorageService.saveProgress(progress);
  },

  // 加载进度
  loadProgress: () => {
    const progress = StorageService.loadProgress();
    if (progress) {
      set({
        learningMode: progress.currentMode,
        currentPath: progress.currentPath,
        progress
      });
    }
  },

  // 设置加载状态
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  // 设置错误
  setError: (error: string | null) => set({ error })
}));
