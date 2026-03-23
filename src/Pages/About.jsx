import React, { useEffect, memo } from "react";
import { FileText, Code, Sparkles, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 p-0 py-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg">
        <img
          src="/logo/me.png"
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                BUKKE GIRIDHAR NAIK
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello! I'm Bukke Giridhar Naik, a passionate Computer Science and Engineering student at Lovely Professional University. I specialize in Backend Development, Full-Stack Engineering, and Artificial Intelligence. My focus is on building scalable web applications, intelligent systems, and efficient backend architectures. I enjoy solving complex problems and transforming innovative ideas into real-world digital products. My experience includes building AI-powered platforms, REST APIs, machine learning pipelines, and modern web dashboards. I am constantly learning and experimenting with technologies that help create high-performance and impactful software solutions.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <a href="#Portfolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10"
                >
                  <Code className="w-5 h-5" /> View Projects
                </button>
              </a>
              <a href="https://docs.google.com/document/d/1ongf4imTxwYYDIbSvQOTOKkc5aBmfXez/edit?usp=drive_link&ouid=108382056500703121054&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="w-full lg:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#a855f7]/50"
                >
                  <FileText className="w-5 h-5" /> Download CV
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* New sections for Education and Internships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Education</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-purple-400 font-medium">2024 - 2027</p>
                <h4 className="text-lg font-bold text-gray-200">Bachelor of Technology in CSE</h4>
                <p className="text-gray-400">Lovely Professional University</p>
                <p className="text-sm text-gray-500">CGPA: 6.42</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-purple-400 font-medium">2021 - 2024</p>
                <h4 className="text-lg font-bold text-gray-200">Diploma in CSE</h4>
                <p className="text-gray-400">Andhra Polytechnic, Kakinada</p>
                <p className="text-sm text-gray-500">Percentage: 73.11%</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-purple-400 font-medium">2020 - 2021</p>
                <h4 className="text-lg font-bold text-gray-200">Secondary School Certificate</h4>
                <p className="text-gray-400">Saibaba High School, Kadapa</p>
                <p className="text-sm text-gray-500">Percentage: 98.83%</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Internships</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">Dec 2025 - Jan 2026</p>
                  <a href="https://drive.google.com/file/d/1hq2MzQ2zyPtwXCi6cNnXlPDJ1YiaIRiu/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">Cybersecurity Intern (Gen AI)</h4>
                <p className="text-gray-400">Edunet Foundation (VOIS for Tech)</p>
                <p className="text-sm text-gray-500">Trained in cybersecurity fundamentals and Gen AI. Developed a cybersecurity project using Wireshark, Social Engineering Toolkit, and BeEF Framework.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">Apr 2025 - Mar 2025</p>
                  <a href="https://drive.google.com/file/d/17Iy_T1s5Hi4Qnd2unkQ3GLQfYDP1v-5H/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">AI & Data Analytics Intern</h4>
                <p className="text-gray-400">Edunet Foundation (Skills4Future)</p>
                <p className="text-sm text-gray-500">Focus on Green Skills, modeling, and visualization. Developed an AI project prototype using Python and Machine Learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Certifications</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">Jan 2026</p>
                  <a href="https://drive.google.com/file/d/1burxZcVimQilt_V_shs1AI70wq0_eKGf/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">Applied AI Internship</h4>
                <p className="text-gray-400">CSRBOX in association with AICTE & IBM SkillsBuild</p>
                <p className="text-sm text-gray-500">Completed the 6-week CSRBOX Applied AI Internship in association with AICTE & IBM SkillsBuild, focused on practical AI concepts and applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">May 2025</p>
                  <a href="https://drive.google.com/file/d/1UU3utItCWN6-XdnafTNRYlUjcdjSVrwX/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">Foundations of AI</h4>
                <p className="text-gray-400">Edunet Foundation (Microsoft Initiative with AICTE)</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">Feb 2025</p>
                  <a href="https://drive.google.com/file/d/1tT7KDhSKfLUXu3hiDpTo0W8avoSdKvwj/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">Introduction to TensorFlow</h4>
                <p className="text-gray-400">LearnTube.ai</p>
                <p className="text-sm text-gray-500">Successfully completed the Introduction of TensorFlow course from LearnTube.ai, demonstrating proficiency in foundational Deep Learning concepts and framework implementation.</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Achievements</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">July 2025</p>
                  <a href="https://drive.google.com/file/d/1CdP9iDYYm8JZW55Lb7jQy6hsQiFfxiyb/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">Data Structures & Algorithms</h4>
                <p className="text-gray-400">Lovely Professional University (LPU)</p>
                <p className="text-sm text-gray-500">Successfully completed the Basics of Data Structures and Algorithms (DSA) course from Lovely Professional University (LPU), achieving an 'A' Grade.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-purple-400 font-medium">Apr 2025</p>
                  <a href="https://drive.google.com/file/d/1m2KDDfEZETynDRkX7kSukaVg7Xw3l-JT/view?usp=drive_link" className="text-gray-400 hover:text-white transition-colors" title="View Certificate" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-gray-200">AI Tools & ChatGPT Workshop</h4>
                <p className="text-gray-400">Be10X</p>
                <p className="text-sm text-gray-500">Completed training in leveraging AI for productivity, demonstrating the ability to create presentations in under 5 minutes, perform data analysis in under 30 minutes, and code/debug solutions in under 10 min.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Problem-Solving', 'Adaptability', 'Teamwork', 'Communication'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
