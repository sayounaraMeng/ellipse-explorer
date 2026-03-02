import { useAppStore } from './stores/appStore';
import { ModeSelector } from './components/ModeSelector';

function App() {
  const learningMode = useAppStore((state: { learningMode: string | null }) => state.learningMode);

  return (
    <div className="min-h-screen">
      {!learningMode ? (
        <ModeSelector />
      ) : (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">模式已选择: {learningMode}</h1>
          <p className="text-gray-600">开发中... 后续页面即将完成</p>
        </div>
      )}
    </div>
  );
}

export default App;
