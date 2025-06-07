export default function Organization() {
  return (
    <section className="py-20 bg-white px-4 text-emerald-900" data-aos="fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 tracking-tight">학교 조직</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="100">
          <span className="font-semibold text-green-800">🌱 자람학교</span>는 학교장 중심의 리더십 아래<br /> 
          세 개의 핵심 부서가 유기적으로 협력합니다.
        </p>
        
        <div
          className="flex flex-col items-center space-y-4 text-lg text-gray-800 leaing-relaxed mb-12"
          data-aos="fade up"
          data-aos-delay="200"
        >
          <p className="text-center">
            <span className="text-emerald-800 text-xl">🌿</span><strong className="text-emerald-800"> 진로지원부</strong> - 학생 개별의 성장 경로를 설계하고 상담합니다.
          </p>

          <p className="text-center">
            <span className="text-emerald-800 text-x1">📚</span><strong className="text-emerald-800"> 교육과정부</strong> - 수업과 평가, 교육과정을 운영합니다.
          </p>

          <p className="text-center">
            <span className="text-emerald-800 text-x1">🧑‍🤝‍🧑</span><strong className="text-emerald-800"> 공동체문화부</strong> - 학교와 학부모 및 지역사회가 함께하는 협력 문화를 조성합니다.
          </p>
        </div>

        <div className="flex justify-center mb-12" data-aos="zoom-in" data-aos-delay="300">
          <img
            src="/org_chart.png"
            alt="자람학교 조직도"
            className="w-full max-w-3xl rounded-x1 shadow-lg border border-emerald-100"
          />
        </div>

        <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          모든 교사는 각 부서의 역할과 함께<br /> 
          프로젝트 수업, 생활교육, 진로지도에 공동으로 참여하며,<br />
          학생이 스스로 삶을 설계할 수 있도록<br />
          <strong className="text-emerald-800">통합적인 교육 환경</strong>을 조성합니다.
        </p>
      </div>
    </section>
  );
}
