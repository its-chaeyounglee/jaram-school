// ✅ src/components/Impact.js
function Impact() {
  return (
    <section className="py-20 px-4 bg-green-50 text-center text-green-900">
      <h2 className="text-3xl font-bold mb-8">기대효과</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        자람학교를 통해 학생들은 다음과 같은 변화를 경험할 수 있습니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🌱 자기이해 및 진로 설계 역량 강화</h3>
          <p className="text-gray-700">
            프로젝트 중심 수업과 상담을 통해<br />
            자신의 강점과 흥미를 이해하고<br />
            삶의 방향성을 구체화할 수 있습니다.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🤝 공동체성 및 사회성 함양</h3>
          <p className="text-gray-700">
            다양한 협업과 성찰의 기회를 통해<br />
            소통과 배려, 책임감 있는 태도를 키웁니다.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">💡 배움에 대한 자기 주도성 향상</h3>
          <p className="text-gray-700">
            스스로 탐구하고 도전하는 경험을 통해<br />
            배움의 주인이 됩니다.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🏫 고교학점제 연계 기반 마련</h3>
          <p className="text-gray-700">
            중학교에서의 진로 탐색 경험이<br />
            고등학교 선택과 집중에 큰 도움이 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;
