import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import EducationPhilosophy from './components/EducationPhilosophy';
import Organization from './components/Organization';
import Curriculum from './components/Curriculum';
import Impact from './components/Impact';
import Space from './components/Space';
import Academic from './components/Academic';
import Community from './components/Community';
import Contact from './components/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ 
      once: false,
      duration: 800,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-green-800">
        {/* ✅ 상단 네비게이션 */}
        <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-emerald-100">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link 
                to="/" 
                className="text-xl font-bold text-emerald-700 hover:text-emerald-900 transition duration-200"
              >
                🌱 자람학교
              </Link>
            <nav className="space-x-4 text-sm font-medium">
              <Link to="/" className="text-emerald-700 hover:text-emerald-600 transition">홈</Link>
              <Link to="/why" className="text-emerald-700 hover:text-emerald-600 transition">왜 자람학교인가</Link>
              <Link to="/vision" className="text-emerald-700 hover:text-emerald-600 transition">교육철학</Link>
              <Link to="/organization" className="text-emerald-700 hover:text-emerald-600 transition">조직</Link>
              <Link to="/space" className="text-emerald-700 hover:text-emerald-600 transition">공간</Link>
              <Link to="/academic" className="text-emerald-700 hover:text-emerald-600 transition">학사운영</Link>
              <Link to="/curriculum" className="text-emerald-700 hover:text-emerald-600 transition">교육과정</Link>
              <Link to="/community" className="text-emerald-700 hover:text-emerald-600 transition">커뮤니티</Link>
              <Link to="/impact" className="text-emerald-700 hover:text-emerald-600 transition">시사점</Link>
              <Link to="/contact" className="text-emerald-700 hover:text-emerald-600 transition">문의</Link>
            </nav>
          </div>
        </header>

        <main className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why" element={<WhyJaram />} />
            <Route path="/vision" element={<EducationPhilosophy />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/space" element={<Space />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/community" element={<Community />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="flex h-screen">
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
        alt="자연 배경"
        className="w-1/2 h-full object-cover object-top"
        data-aos="fade-up"
      />

      {/* 오른쪽 텍스트 영역 (👉 애니메이션 적용) */}
      <div
        className="w-1/2 bg-green-900 bg-opacity-90 flex flex-col justify-center items-center text-white px-4 text-center"
        data-aos="fade-left"
      >
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
    <section className="py-20 text-center bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-green-800 mb-6">왜 🌱 자람학교인가?</h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
        고교학점제가 전면 도입되었지만,<br />
        중학교 단계에서는 여전히 자기 탐색과 진로 설계 기회가 부족합니다.
        <br /><br />
        <span className="font-semibold text-green-800">🌱 자람학교</span>는 이러한 간극을 메워주는 새로운 교육 공간으로,<br />
        <span className="font-bold">'자율 + 성장 + 바람(꿈)'</span>이라는 키워드를 기반으로 하여<br />
        학생들이 <span className="font-bold">자기다움</span>을 발견하고 <span className="font-bold">삶을 주도적으로 설계</span>할 수 있도록 돕습니다.<br /><br />
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-center px-6 mt-12">
        <div className="bg-lime-50 rounded-x1 p-6 shadow" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold text-green-700 mb-4">📌 학교 설립 배경</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-left">
            <li>중학생의 삶과 진로 탐색이 가능한 유연한 교육 공간 필요</li>
            <li>고교학점제 대비 중등-고등-대학 간 연계성 부족</li>
            <li>지역 자원 및 마을과의 협력 기반 교육 공간의 수요 증가</li>
            <li>창의적 진로 설계를 위한 자기주도성 교육 강화 필요</li>
          </ul>
        </div>

        <div className="bg-lime-50 rounded-x1 p-6 shadow" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold text-green-700 mb-4">🌱 자람학교가 지향하는 가치</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-left">
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
