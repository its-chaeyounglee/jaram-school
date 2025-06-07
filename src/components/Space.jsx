import React from 'react';

export default function Space() {
  return (
    <section className="py-20 px-6 bg-white text-green-900 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">학교 공간</h2>
        <p className="text-lg leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">
          <span className="font-semibold text-green-800">🌱 자람학교</span>는 학생 주도 학습과 공동체 활동을 지원하는 공간을 중심으로 설계됩니다.<br />
        </p>

        {/* ✅ 공간 구성 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">🏫 공간 구성</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src="/lounge.png"
                alt="진로 탐색 라운지"
                className="rounded shadow w-full h-64 object-cover"
              />
              <p className="mt-2"><strong>진로 탐색 라운지</strong></p>
            </div>
            <div>
              <img
                src="/pblroom.png"
                alt="PBL 전용 교실"
                className="rounded shadow w-full h-64 object-cover"
              />
              <p className="mt-2"><strong>PBL 전용 교실</strong></p>
            </div>
            <div>
              <img
                src="/coachingzone.png"
                alt="학습코칭존"
                className="rounded shadow w-full h-64 object-cover"
              />
              <p className="mt-2"><strong>학습코칭존</strong></p>
            </div>
            <div>
              <img
                src="/studio.png"
                alt="창작 스튜디오"
                className="rounded shadow w-full h-64 object-cover"
              />
              <p className="mt-2"><strong>창작 스튜디오</strong></p>
            </div>
            <div>
              <img
                src="/teacherlab.png"
                alt="교사 공간"
                className="rounded shadow w-full h-64 object-cover"
              />
              <p className="mt-2"><strong>교사 연구/공유 공간</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
