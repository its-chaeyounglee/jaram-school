function EducationPhilosophy() {
  return (
    <section className="py-20 px-6 bg-emerald-50 text-green-900 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto"></div>
        <h2 className="text-3xl font-bold text-emerald-800 mb-6 tracking-tight">교육 철학</h2>
        <p className="max-w-3x1 mx-auto text-lg leading-relaxed text-gray-700" data-aos="fade-up" data-aos-delay="100">
        <span className="font-semibold text-green-800">🌱 자람학교</span>는 <strong className="text-emerald-900">‘자기다움을 찾고, 함께 성장하며, 삶을 설계하는 학교’</strong>를 비전으로 합니다.<br /><br />
        우리는 세 가지 핵심 철학을 중심으로 교육을 설계합니다.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div 
          className="p-6 bg-white shadow-lg rounded-xl border border-emerald-100" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">교육은,<br /><span className="font-bold">삶의 방향을 설계하는 과정</span>이다.</h3>
          <p className="text-gray-700 leading-relaxed">
            각자의 고유성과 가능성을 존중하고<br /> 
            자신의 삶을 설계하고 실현해가는<br />
            전인적 성장으로써의 교육을 지향합니다.
          </p>
        </div>

        <div 
          className="p-6 bg-white shadow-lg rounded-xl border border-emerald-100" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">학습은,<br /><span className="font-bold">경쟁이 아니라 협력</span>이다.</h3>
          <p className="text-gray-700 leading-relaxed">
            서로의 강점을 결합한 협력 교육을 통해<br />
            공동체적 감수성과<br />
            사회적 책임감을 키우고자 합니다. 
          </p>
        </div>
        
        <div 
          className="p-6 bg-white shadow-lg rounded-xl border border-emerald-100" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-emerald-700 mb-2">교사는,<br /><span className="font-bold">함께 성장하는 동반자이다.</span></h3>
          <p className="text-gray-700 leading-relaxed">
            교사는 학생의 성장을 돕는 가이드이자 학습 공동체의 일원으로<br />
            끊임없이 배우고 성찰하는 존재입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
export default EducationPhilosophy;
