import React, { useState, useEffect } from "react";
import Image from "next/image";
import PuzzleImage from "@/public/ivy-images/puzzle.png";
import CostImage from "@/public/ivy-images/money.png";

const PieIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#C8D4B4" />
      <path d="M60 60 L60 2 A58 58 0 0 1 110 38 Z" fill="#0E6B4A" />
    </svg>
  );
};

const SolidCircle = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-full bg-[#0E6B4A] ${className ?? ""}`} />
  );
};

const WhyYouShouldHireSection = () => {
  const [count, setCount] = useState(0);
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second
    const target = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing function: easeOutQuad (fast start, slow end)
      const eased = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(eased * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  useEffect(() => {
    const duration = 1000;
    const target = 50000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(eased * target);
      setApplicationsCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  useEffect(() => {
    const duration = 1000;
    const target = 150;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(eased * target);
      setCountriesCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const salaryData = [
    { school: "Penn", value: 103246 },
    { school: "Princeton", value: 81689 },
    { school: "Cornell", value: 87176 },
    { school: "Dartmouth", value: 58627 },
    { school: "Columbia", value: 79871 },
    { school: "Yale", value: 88655 },
    { school: "Harvard", value: 64918 },
    { school: "Brown", value: 54943 },
  ];
  const chartMin = 50000;
  const chartMax = 100000;

  return (
    <div className="w-full space-y-16">
      <section className="border-t-2 border-[#0E2B2B] pt-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0E2B2B] tracking-tight text-center lg:text-left">
          High School Counselors Have Limited Capacity
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          <p className="text-lg leading-tight text-[#0E2B2B] lg:col-span-1">
            <span className="font-semibold">Jack’s counselor cared.</span><br></br>
            But like most high school counselors, they had hundreds of students to support and many responsibilities beyond college admissions.
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">
            <div className="flex justify-center items-center flex-col">
              <div className="flex items-center">
                {/* <PieIcon className="w-16 h-16" /> */}
                <p className="text-5xl sm:text-6xl font-extrabold text-[#07306A]">
                  {count}<span className="text-5xl sm:text-6xl text-[#0E2B2B]"> :1</span>
                </p>
              </div>
              <p className="mt-3 text-sm text-[#0E2B2B]">
                The average student-to-counselor ratio
              </p>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex justify-center items-center flex-col">
                <div className="flex items-center">
                  {/* <SolidCircle className="w-16 h-16" /> */}
                  <p className="text-5xl sm:text-6xl font-extrabold text-[#07306A]">
                    24/7
                  </p>
                </div>
                <p className="mt-3 text-sm text-[#0E2B2B] text-center">
                  Many college consultants are available to students and parents around the clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-[#0E2B2B] pt-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0E2B2B] tracking-tighter text-center lg:text-left">
          Admissions Rates Are Exceptionally Low
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          <div className="text-lg leading-tight text-[#0E2B2B] lg:col-span-1">
            <p className="font-medium">
              <strong>Jack</strong> wasn't competing against a handful of students.
            </p>
            <p className="mt-4">
              He was competing against tens of thousands globally.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2">
            <div className="flex justify-center items-center flex-col">
              <p className="text-5xl sm:text-6xl font-extrabold text-[#07306A]">
                {applicationsCount.toLocaleString("en-US")}<span className="text-3xl sm:text-4xl">+</span>
              </p>
              <p className="text-lg font-semibold text-[#0E2B2B] mt-2">
                Applications
              </p>
              <p className="text-sm text-[#0E2B2B] mt-4 leading-tight text-center">
                Top U.S. universities now receive tens of thousands of applications for just a few thousand seats.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="text-5xl sm:text-6xl font-extrabold text-[#07306A]">
                {countriesCount.toLocaleString("en-US")}<span className="text-3xl sm:text-4xl">+</span>
              </p>
              <p className="text-lg font-semibold text-[#0E2B2B] mt-2">
                Countries Represented
              </p>
              <p className="text-sm text-[#0E2B2B] mt-4 leading-tight text-center">
                Elite colleges evaluate students from around the world, not just one school, city, or country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-t-2 border-[#0E2B2B] pt-8">
        <p className="text-lg font-semibold text-[#0E2B2B]">
          Overall Acceptance Rate
        </p>
        <p className="text-sm text-[#0E2B2B]">
          (Source: Ivy Coach's Ivy League Statistics)
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse min-w-full">
            <thead>
              <tr>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-left text-lg font-bold text-[#0E2B2B]" />
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2019</th>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2021</th>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2023</th>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2025</th>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2027</th>
                <th className="border-b-2 border-[#0E2B2B]  px-4 py-3 text-center text-lg font-bold text-[#0E2B2B] whitespace-nowrap">Class of 2029</th>
              </tr>
            </thead>
            <tbody>
              {[
                { school: "Brown", rates: ["8.60%", "8.30%", "6.60%", "5.40%", "5.08%", "5.65%"] },
                { school: "Columbia", rates: ["6.10%", "5.80%", "5.10%", "3.70%", "3.93%", "4.29%"] },
                { school: "Cornell", rates: ["14.90%", "12.50%", "10.60%", "NYP", "NYP", "NYP"] },
                { school: "Dartmouth", rates: ["10.30%", "10.40%", "7.90%", "6.20%", "6.07%", "6.00%"] },
                { school: "Harvard", rates: ["5.30%", "5.20%", "4.50%", "3.40%", "3.41%", "NYP"] },
                { school: "Penn", rates: ["9.90%", "9.20%", "7.40%", "5.70%", "NYP", "4.90%"] },
                { school: "Princeton", rates: ["7.00%", "6.10%", "5.80%", "4.00%", "4.50%", "NYP"] },
                { school: "Yale", rates: ["6.50%", "6.90%", "5.90%", "4.60%", "4.35%", "4.60%"] },
              ].map((row) => (
                <tr key={row.school} className="border-b border-[#D0D0D0]">
                  <td className="px-4 py-3 text-base font-bold text-[#0E2B2B]">
                    {row.school}
                  </td>
                  {row.rates.map((rate, idx) => (
                    <td
                      key={idx}
                      className="px-4 py-3 text-center text-base font-semibold text-[#0E2B2B]"
                    >
                      {rate}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      <section className="border-t-2 border-[#0E2B2B] py-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0E2B2B] tracking-tighter text-center lg:text-left">
          Weaving the Threads
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg leading-tight text-[#0E2B2B]">
              Grades, course rigour, test scores, essays, recommendations, activities, interviews all matter.
              But none of them is evaluated in isolation.
            </p>
            <p className="mt-4 text-lg leading-tight text-[#0E2B2B]">
              Admissions officers aren't assembling a checklist.
              They're reading for coherence.
            </p>
            <p className="mt-4 text-lg leading-tight text-[#0E2B2B]">
              A strong application weaves every thread—academic choices, interests, experiences, and voice—
              into a single, credible story about who a student is and where they're headed.
            </p>
            <p className="mt-4 text-lg leading-tight text-[#0E2B2B]">
              <strong>This is where college counseling matters.</strong>
            </p>
            <p className="mt-4 text-lg leading-tight text-[#0E2B2B]">
              A college counselor doesn't just help improve individual components. They ensure every decision
              supports the same narrative.
            </p>
            <p className="mt-4 text-lg leading-tight text-[#0E2B2B]">
              <strong>At NAVO,</strong> we help students move from a collection of achievements to a story that holds together
              and stands out.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src={PuzzleImage}
              alt="Puzzle illustration"
              className="w-full max-w-md h-auto rotate-3"
            />
          </div>
        </div>
      </section>

      {/* <section className="border-t-2 border-[#0E2B2B] pt-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0E2B2B] tracking-tighter">
          TOP COLLEGES CAN COST $$$, BUT PAY OFF
        </h2>
        <div className="grid grid-cols-6 gap-10 items-center">
          <div className="col-span-2">
            <div className="space-y-8">
              <div>
                <p className="text-base font-semibold text-[#0E2B2B]">
                  Average cost of tuition for the eight Ivy League colleges
                </p>
                <p className="text-sm text-[#0E2B2B]">(Source: Statista)</p>
                <p className="mt-4 text-5xl sm:text-6xl font-extrabold text-[#0E2B2B]">
                  $80,551
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-[#0E2B2B]">
                  Number of U.S. Supreme Court Justices who attended Ivy League
                  schools
                </p>
                <p className="text-sm text-[#0E2B2B]">(Source: CNBC)</p>
                <p className="mt-4 text-5xl sm:text-6xl font-extrabold text-[#0E2B2B]">
                  8
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1" />
          <div className="flex justify-center lg:justify-end col-span-3">
            <Image
              src={CostImage}
              alt="Stacks of money"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section> */}


    </div>
  );
};

export default WhyYouShouldHireSection;


// <section className="border-t-2 border-[#0E2B2B] pt-8">
//   <div className="grid grid-cols-7 gap-10 items-start">
//     <div className="col-span-2">
//       <p className="text-lg font-semibold text-[#0E2B2B]">
//         Ivy League Schools by Salary Potential - Median Earnings 10 Years
//         After Graduation
//       </p>
//       <p className="text-sm text-[#0E2B2B]">(Source: CNBC)</p>
//     </div>
//     <div className="col-span-5 p-8 relative">
//       <div className="grid grid-cols-[auto,1fr] gap-4">
//         <div className="flex flex-col justify-between text-sm font-medium text-[#0E2B2B] pt-2">
//           {[100000, 90000, 80000, 70000, 60000, 50000].map((tick) => (
//             <div key={tick} className="flex items-center gap-2 h-[40px]">
//               <span className="text-left">${(tick / 1000).toFixed(0)},000</span>
//             </div>
//           ))}
//         </div>
//         <div className="relative">
//           {/* Horizontal grid lines */}
//           <div className="absolute inset-0 flex flex-col justify-between pt-2">
//             {[0, 1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="h-[40px] border-b border-[#C8CFBF]" />
//             ))}
//           </div>
//           {/* Bars */}
//           <div className="relative flex h-[280px] items-end justify-between gap-2 px-2 pt-2 z-10">
//             {salaryData.map((item) => {
//               const clamped = Math.min(Math.max(item.value, chartMin), chartMax);
//               const heightPercent = ((clamped - chartMin) / (chartMax - chartMin)) * 100;
//               return (
//                 <div key={item.school} className="flex flex-1 flex-col items-center h-full justify-end">
//                   <div
//                     className="w-6 bg-[#1A6B52] relative z-10"
//                     style={{ height: `${heightPercent}%`, minHeight: '4px' }}
//                   />
//                   <div className="mt-3 text-center text-xs font-semibold text-[#0E2B2B] whitespace-nowrap">
//                     <div>{item.school}</div>
//                     <div className="mt-0.5">${item.value.toLocaleString("en-US")}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
