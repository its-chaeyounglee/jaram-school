export default function Contact() {
  return (
    <section className="py-20 px-6 bg-emerald-50 text-green-900 text-center" id="contact" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4"><span className="font-semibold text-green-800">🌱 자람학교</span>는 2025-1학기 서울대학교 '학교와 학급 경영' 수업의<br />
        <strong>'New Innovative School Project'</strong>의 일환으로 제작되었습니다.<br /><br />
        경청해주셔서 감사합니다.<br /><br /></p>
        <p className="text-md text-gray-700">
          기획 및 디자인&nbsp;&nbsp;|&nbsp;&nbsp;<strong>이바다</strong> (교육행정전공) & <strong>이채영</strong> (간호학과)<br />
        </p>
        <img
              src="/thanks.png"
              alt="감사합니다"
              className="mt-4 rounded-lg shadow mx-auto w-full max-h-[350px] object-contain bg-white"
            />
      </div>
    </section>
  );
}
