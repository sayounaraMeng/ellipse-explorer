import { LearningProgress } from '../types';

const STORAGE_KEY = 'ellipse_explorer_progress';

export class StorageService {
  // 保存学习进度
  static saveProgress(progress: LearningProgress): void {
    try {
      const data = JSON.stringify({
        ...progress,
        currentPath: {
          ...progress.currentPath,
          startTime: progress.currentPath.startTime.toISOString(),
          lastAccessTime: progress.currentPath.lastAccessTime.toISOString()
        },
        lastSyncTime: progress.lastSyncTime.toISOString()
      });
      localStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
      console.error('Failed to save progress:', error);
      throw new Error('Storage full or corrupted');
    }
  }

  // 加载学习进度
  static loadProgress(): LearningProgress | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;
      
      const parsed = JSON.parse(data);
      return {
        ...parsed,
        currentPath: {
          ...parsed.currentPath,
          startTime: new Date(parsed.currentPath.startTime),
          lastAccessTime: new Date(parsed.currentPath.lastAccessTime)
        },
        lastSyncTime: new Date(parsed.lastSyncTime)
      };
    } catch (error) {
      console.error('Failed to load progress:', error);
      return null;
    }
  }

  // 清除学习进度
  static clearProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  // 导出数据
  static exportData(): string {
    const data = localStorage.getItem(STORAGE_KEY);
    return data || '{}';
  }

  // 导入数据
  static importData(data: string): boolean {
    try {
      JSON.parse(data); // 验证 JSON 格式
      localStorage.setItem(STORAGE_KEY, data);
      return true;
    } catch {
      return false;
    }
  }
}
