// ✅ src/components/EducationPhilosophy.js
function EducationPhilosophy() {
  return (
    <section className="py-20 px-4 bg-lime-50 text-center text-green-900">
      <h2 className="text-3xl font-bold mb-6">교육 철학</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        자람학교는 학생 한 사람 한 사람이 <strong>자기다움을 실현</strong>할 수 있도록 돕습니다.<br /><br />
        우리는 세 가지 핵심 가치를 중심으로 교육을 설계합니다:
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🌱 자율성</h3>
          <p className="text-gray-700">스스로 선택하고 결정하는 경험을 통해 자기주도성을 키웁니다.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🤝 관계성</h3>
          <p className="text-gray-700">신뢰 기반의 공동체 속에서 서로를 존중하며 성장합니다.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🚀 유능감</h3>
          <p className="text-gray-700">실패를 두려워하지 않고 도전하며 배움의 성취를 경험합니다.</p>
        </div>
      </div>
    </section>
  );
}

export default EducationPhilosophy;
