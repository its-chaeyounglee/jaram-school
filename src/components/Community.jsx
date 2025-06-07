export default function Community() {
  return (
    <section 
      className="py-20 px-6 bg-lime-50 text-green-900 text-center"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          민주적 운영과 지역 협력
        </h2>

        <p
          className="text-lg leading-relaxed mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="font-semibold text-green-800">🌱 자람학교</span>는 학생, 학부모, 교사, 지역사회가 함께하는<br />
          <strong className="text-green-800">민주적 거버넌스</strong>를 바탕으로 운영됩니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* 민주적 운영 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">
              🤝 민주적 운영 체계
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>학교운영위원회</strong> 중심의 <strong>공동 의사결정</strong> (월 1회 정기 회의)</li>
              <li><strong>학생 참여</strong>와 <strong>자치 활동</strong>의 제도적 보장</li>
            </ul>
            <img
              src="/committee.png"
              alt="학교운영위원회"
              className="mt-6 rounded-lg shadow mx-auto w-full object-contain max-h-[350px] bg-white"
            />
          </div>

          {/* 지역사회 협력 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">
              🧩 지역사회 연계
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>학부모 대상 <strong>자녀의 강점 찾기 워크샵</strong> 운영</li>
              <li><strong>진로 멘토링 데이</strong>를 통한 지역 전문가와의 만남</li>
              <li><strong>지역기관과 연계한 프로젝트 수업</strong></li>
            </ul>
            <img
              src="/parents.png"
              alt="부모 워크샵"
              className="mt-6 rounded-lg shadow mx-auto w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
