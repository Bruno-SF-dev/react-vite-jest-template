import { Welcome } from './components/welcome';

export function App() {
  return (
    <div className="w-full min-h-screen flex-1 flex justify-center items-center relative">
      <div className="bg-gradient-to-r from-indigo-950 to-indigo-900 absolute inset-0 z-[-1]" />

      <Welcome />
    </div>
  );
}
