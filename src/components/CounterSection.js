import { useState, useEffect, useRef } from "react";

export default function CounterSection() {
  const [lectures, setLectures] = useState(10);
  const [collaborators, setCollaborators] = useState(1);
  const [students, setStudents] = useState(10);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (!isVisible) setIsVisible(entry.isIntersecting);
  };

  const options = { root: null, rootMargin: "0px", threshold: 1.0 };

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  });

  const time = 1750;
  const lecturesTotal = 50;
  const collaboratorsTotal = 10;
  const studentsTotal = 100;

  useEffect(() => {
    if (isVisible) {
      lectures < lecturesTotal &&
        setTimeout(() => setLectures(lectures + 1), time / (lecturesTotal - 1));
      collaborators < collaboratorsTotal &&
        setTimeout(
          () => setCollaborators(collaborators + 1),
          time / (collaboratorsTotal - 1)
        );
      students < studentsTotal &&
        setTimeout(
          () => setStudents(students + 1),
          (time - 200) / studentsTotal
        );
    }
  }, [isVisible, lectures, collaborators, students]);

  return (
    <section
      className="mx-auto mb-24 px-8 max-w-[320px] min-[820px]:max-w-full"
      ref={containerRef}
    >
      <ul
        className={`mx-auto max-w-[988px] flex flex-col min-[820px]:flex-row md:justify-between font-nunito font-bold translatey(50%) ${
          isVisible && lectures < lecturesTotal ? "animate-slideup" : ""
        } ${!isVisible && "invisible"}`}
      >
        <li className="flex items-center lg:w-1/3">
          <span className="text-[3.4375rem] text-academy-gold">{lectures}</span>
          <span
            className={
              lectures === lecturesTotal
                ? "relative -top-9 -left-1 text-[2.5rem] text-academy-gold animate-slideup"
                : "text-[2.5rem] invisible"
            }
          >
            +
          </span>
          <span className="text-[1.375rem] text-academy-blue">
            Lectures Done
          </span>
        </li>
        <li className="flex gap-6 min-w-[230px] items-center lg:justify-center lg:w-1/3">
          <span className="text-[3.4375rem] min-w-[66px] text-right text-academy-gold">
            {collaborators}
          </span>
          <span className="text-[1.375rem] text-academy-blue">
            Collaborators
          </span>
        </li>
        <li className="flex items-center lg:justify-end lg:w-1/3 ">
          <span className="text-[3.4375rem] text-academy-gold">{students}</span>
          <span
            className={
              students === studentsTotal
                ? "relative -top-9 -left-1 text-[2.5rem] text-academy-gold animate-slideup"
                : "text-[2.5rem] invisible"
            }
          >
            +
          </span>
          <span className=" text-[1.375rem] text-academy-blue">Students</span>
        </li>
      </ul>
    </section>
  );
}
