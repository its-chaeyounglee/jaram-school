export default function ExpectationAndInsight() {
  return (
    <section className="py-20 px-6 bg-white text-center text-green-900" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8">
          기대 효과와 시사점
        </h2>

        <p
          className="text-lg leading-relaxed mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="font-semibold text-green-800">🌱 자람학교</span>는 학생 개인의 성장을 넘어,<br />
          중등 교육의 새로운 가능성을 제시합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* 🌿 학생의 성장 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-green-800 text-center mb-4">
              🌿 학생의 성장
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>자기이해 및 진로 설계 역량 강화</li>
              <li>공동체성 및 사회성 함양</li>
              <li>자기 주도적 학습 능력 향상</li>
              <li>고교학점제 연계 기반 마련</li>
            </ul>
            <img
              src="/growth.png"
              alt="학생 성장 이미지"
              className="mt-6 rounded-lg shadow mx-auto w-full h-64 object-cover"
            />
          </div>

          {/* 📌 한국 교육에 주는 시사점 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-green-800 text-center mb-4">
              📌 한국 교육에 주는 시사점
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>중학교 단계에서의 진로 설계 강화</li>
              <li>교사 공동 운영 및 마을 연계 실현</li>
              <li>고교학점제 시대에 적합한 중등 교육 모델</li>
              <li>학생 중심 교육의 대안 제시</li>
            </ul>
            <img
              src="/insight.png"
              alt="시사점 이미지"
              className="mt-6 rounded-lg shadow mx-auto w-full max-h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
