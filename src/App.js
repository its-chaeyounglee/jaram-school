import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import EducationPhilosophy from './components/EducationPhilosophy';
import Structure from './components/Structure';
import Impact from './components/Impact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-green-800">
        {/* ✅ 상단 네비게이션 */}
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-green-700">🌱 자람학교</div>
            <nav className="space-x-4 text-sm">
              <Link to="/" className="hover:text-green-600">홈</Link>
              <Link to="/why" className="hover:text-green-600">왜 자람학교인가</Link>
              <Link to="/vision" className="hover:text-green-600">교육 철학</Link>
              <Link to="/structure" className="hover:text-green-600">운영 구조</Link>
              <Link to="/impact" className="hover:text-green-600">기대효과</Link>
            </nav>
          </div>
        </header>

        <main className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why" element={<WhyJaram />} />
            <Route path="/vision" element={<EducationPhilosophy />} />
            <Route path="/structure" element={<Structure />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="flex h-screen">
      {/* 왼쪽 이미지 영역 */}
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
        alt="자연 배경"
        className="w-1/2 h-full object-cover"
      />

      {/* 오른쪽 텍스트 영역 */}
      <div className="w-1/2 bg-green-900 bg-opacity-90 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-lime-200 drop-shadow-lg">
          🌱 자람학교
        </h1>
        <p className="text-xl md:text-2xl font-semibold drop-shadow">
          자기다움을 키워가는 삶의 설계 공동체
        </p>
        <p className="mt-4 text-md max-w-md text-lime-100 leading-relaxed">
          자람학교는 학생들이 자신의 관심, 삶의 방향을 탐색하고<br />
          주체적으로 성장해나갈 수 있도록 돕는 교육 공간입니다.
        </p>
      </div>
    </div>
  );
}

function WhyJaram() {
  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-3xl font-bold text-green-700 mb-6">왜 🌱 자람학교인가?</h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
        고교학점제가 전면 도입되었지만,<br />
        중학교 단계에서는 여전히 자기 탐색과 진로 설계 기회가 부족합니다.
        <br /><br />
        <span className="font-semibold text-green-800">🌱 자람학교</span>는 이러한 간극을 메워주는 새로운 교육 공간으로,<br />
        학생들이 <span className="font-bold">자기다움</span>을 발견하고 <span className="font-bold">삶을 주도적으로 설계</span>할 수 있도록 돕습니다.<br /><br />
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left px-6">
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">📌 학교 설립 배경</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>중학생의 삶과 진로 탐색이 가능한 유연한 교육 공간 필요</li>
            <li>고교학점제 대비 중등-고등-대학 간 연계성 부족</li>
            <li>지역 자원 및 마을과의 협력 기반 교육 공간의 수요 증가</li>
            <li>창의적 진로 설계를 위한 자기주도성 교육 강화 필요</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">🌱 자람학교가 지향하는 가치</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li><strong>학생 중심</strong>의 교육 설계</li>
            <li><strong>삶 중심</strong>의 진로 교육</li>
            <li><strong>자기다움</strong>을 발견하고 키워가는 탐색 중심 학교</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/vision" element={<EducationPhilosophy />} />
</Routes>


export default App;
