import React from 'react';

export default function Curriculum() {
  return (
    <section className="py-20 px-6 bg-lime-50 text-green-900 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">교육 과정 및 교수학습 운영</h2>
        <p className="text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">
          <span className="font-semibold text-green-800">🌱 자람학교</span>의 교육과정은 학생의 자기 탐색과 삶의 설계를 돕는 데 중점을 둡니다.<br />
          수업은 <strong className="text-green-800">프로젝트 기반 학습(PBL)</strong>을 중심으로 운영되며,<br />
          평가는 <strong className="text-green-800">성찰과 피드백</strong> 중심으로 이루어집니다.
        </p>

        {/* 수업 구성 + 5대 키워드 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 수업 구성 */}
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-green-800 text-center mb-4">📚 수업 구성</h3>
            <ul className="list-disc list-inside text-gray-700 text-center space-y-2 mb-4">
              <li>프로젝트 기반 학습(PBL) 중심 수업</li>
              <li>블록 수업 및 학생 자율형 선택 수업</li>
            </ul>
            <img
              src="/pbl.png"
              alt="PBL 수업지도안 예시"
              className="mt-4 rounded-lg shadow mx-auto w-full max-h-[350px] object-contain bg-white"
            />
          </div>

          {/* 5대 키워드 */}
          <div 
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300" 
            data-aos="fade-left" 
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">🌟 수업 설계 5대 키워드</h3>
            
            <div className="flex justify-center gap-4 mb-2">
              <div className="bg-lime-100 px-4 py-2 rounded-full text-sm text-green-900 font-medium">
                학생 개별성 존중
              </div>
              <div className="bg-lime-100 px-4 py-2 rounded-full text-sm text-green-900 font-medium">
                학습 내용과 진로 연계
              </div>
            </div>

            <div className="flex justify-center mb-2">
              <div className="bg-lime-100 px-4 py-2 rounded-full text-sm text-green-900 font-medium">
                모둠 프로젝트 수업을 통한 협력적 태도
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <div className="bg-lime-100 px-4 py-2 rounded-full text-sm text-green-900 font-medium">
                성장 과정 중심의 가치
              </div>
              <div className="bg-lime-100 px-4 py-2 rounded-full text-sm text-green-900 font-medium">
                자기주도학습 역량
              </div>
            </div>

            <img
              src="/timetable.png"
              alt="정규시간표 예시"
              className="mt-4 rounded-lg shadow mx-auto w-full max-h-[350px] object-contain bg-white"
            />
          </div>
        </div>

        {/* 평가 + 포트폴리오 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 평가 방식 */}
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-green-800 text-center mb-4">📝 평가 방식</h3>
            <ul className="list-disc list-inside text-gray-700 text-center space-y-2">
              <li>루브릭 기반 성찰 중심 평가</li>
              <li>과정 중심 평가 및 피드백 강화</li>
              <li>학생 개별 성장 포트폴리오 구축</li><br />
            </ul>
            <img
              src="/evalrubric.png"
              alt="평가 루브릭 예시"
              className="mt-4 rounded-lg shadow mx-auto w-full h-64 object-cover"
            />
          </div>

          {/* 포트폴리오 */}
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">📁 포트폴리오</h3>
            <p className="text-gray-700 mb-4 text-center">
              학기별 프로젝트 결과물은<br />
              학생의 성장 여정을 보여주는 포트폴리오로 축적됩니다.
            </p>
            <img
              src="/portfolio.png"
              alt="학생 포트폴리오"
              className="rounded-lg shadow mx-auto w-full h-64 object-cover"
            /><br />
            <img
              src="/popol.png"
              alt="학생 포트폴리오 마무리"
              className="rounded-lg shadow mx-auto w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
