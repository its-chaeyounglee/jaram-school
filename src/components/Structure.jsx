// ✅ src/components/Structure.js
function Structure() {
  return (
    <section className="py-20 px-4 bg-white text-center text-green-900">
      <h2 className="text-3xl font-bold mb-8">운영 구조</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        자람학교는 세 가지 핵심 축을 중심으로 운영됩니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-green-50 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🧭 1. 프로젝트 기반 자기탐색</h3>
          <p className="text-gray-700">
            다양한 프로젝트 수업과 교사 코칭을 통해<br />
            자신의 관심과 강점을 탐색합니다.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🎓 2. 배움 중심 공동체 활동</h3>
          <p className="text-gray-700">
            정규 수업과 생활 속에서<br /> 협력과 성찰을 바탕으로<br />
            함께 배우고 성장합니다.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🛤️ 3. 진로 설계 연계 프로그램</h3>
          <p className="text-gray-700">
            고등학교와 연계하여 진로를 구체화하고<br />
            스스로 삶을 설계할 수 있도록 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Structure;
