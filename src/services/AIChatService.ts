import { AIMessage, LearningMode } from '../types';

const KIMI_API_URL = 'https://api.moonshot.cn/v1/chat/completions';
const API_KEY = import.meta.env.VITE_KIMI_API_KEY;

export class AIChatService {
  private messages: AIMessage[] = [];
  private socraticMode: boolean = true;

  // 初始化对话上下文
  async initialize(mode: LearningMode): Promise<void> {
    const systemPrompt = mode === LearningMode.EXPLORATION 
      ? '你是一位耐心的数学导师，使用苏格拉底式提问法引导学生发现椭圆的知识。不要直接给答案，而是通过提问让学生自己思考。每次回复控制在100字以内。'
      : '你是一位高效的数学教练，帮助学生快速掌握椭圆标准方程。直接给出清晰的解释和步骤，必要时提供解题技巧。每次回复控制在100字以内。';

    this.messages = [{
      id: 'system',
      role: 'system',
      content: systemPrompt,
      timestamp: new Date()
    }];
  }

  // 发送消息
  async sendMessage(content: string): Promise<AIMessage> {
    const userMessage: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    this.messages.push(userMessage);

    try {
      const response = await fetch(KIMI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'kimi-k2.5',
          messages: this.messages.map(m => ({
            role: m.role,
            content: m.content
          })),
          temperature: 0.7,
          max_tokens: 200
        })
      });

      if (!response.ok) {
        throw new Error('AI service error');
      }

      const data = await response.json();
      const assistantMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      this.messages.push(assistantMessage);
      return assistantMessage;
    } catch (error) {
      // 离线模式回退
      const fallbackMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: this.socraticMode 
          ? '这个问题很有意思！你能说说你的想法吗？试着观察一下椭圆的形状特点。'
          : '让我来帮你分析：椭圆的标准方程是 x²/a² + y²/b² = 1，其中 a 是长半轴，b 是短半轴。',
        timestamp: new Date()
      };
      this.messages.push(fallbackMessage);
      return fallbackMessage;
    }
  }

  // 获取对话历史
  getConversationHistory(): AIMessage[] {
    return this.messages.filter(m => m.role !== 'system');
  }

  // 清空历史
  clearHistory(): void {
    const systemMessage = this.messages.find(m => m.role === 'system');
    this.messages = systemMessage ? [systemMessage] : [];
  }

  // 设置苏格拉底模式
  setSocraticMode(enabled: boolean): void {
    this.socraticMode = enabled;
  }
}
