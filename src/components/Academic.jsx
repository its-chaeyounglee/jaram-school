import React from 'react';

export default function Academic() {
  return (
    <section className="py-20 px-6 bg-white text-green-900 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">학사 운영</h2>
        <p className="text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">
          <span className="font-semibold text-green-800">🌱 자람학교</span>는 유연한 학사 구조와 소규모 수업 운영 체계를 통해 학생 중심 교육을 실현합니다.<br />
        </p>

        {/* ✅ 학사 운영 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src="/smallclass.png"
              alt="소규모 학급"
              className="rounded shadow w-full h-64 object-cover"
            />
            <p className="mt-2"><strong>소규모 학급 편성</strong> (학급당 10인 내외)</p>
          </div>
          <div>
            <img
              src="/teacher.png"
              alt="협력 지도"
              className="rounded shadow w-full h-64 object-cover"
            />
            <p className="mt-2"><strong>3년 담임제</strong> (전담 교사 협력 지도)</p>
          </div>
          <div>
            <img
              src="/threesemester.png"
              alt="진로 중심 프로젝트"
              className="rounded shadow w-full h-64 object-cover"
            />
            <p className="mt-2"><strong>3학기제 운영</strong> (시기별 진로 중심 프로젝트)</p>
          </div>
          <div>
            <img
              src="/blockclass.png"
              alt="블록 수업"
              className="rounded shadow w-full h-64 object-cover"
            />
            <p className="mt-2"><strong>블록 수업제</strong> (주제별 집중 탐구형)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
