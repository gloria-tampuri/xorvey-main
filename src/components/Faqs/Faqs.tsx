import{ useState } from "react";
import {
  Docs,
  DownArrow,
  Money,
  Persons,
  Smiley,
  Thumb,
  UpArrow,
} from "../SVGs/Questionsicons";
import styles from "./Faqs.module.css";

const Faqs = () => {
  const questionsArray = [
    {
      icon: <Smiley />,
      question: "What is Stool Land Certification, and why is it important?",
      answer:
        "Stool Land Certification is a process where traditional authorities officially allocate or certify the use of land within their jurisdiction. It's important because it provides legal recognition and protection for land ownership rights, facilitates sustainable development, and preserves cultural heritage within communities.",
    },
    {
      icon: <Money />,
      question: "What fees are associated with the certification process?",
      answer:
        "Fees associated with the certification process may vary depending on the region and the specific requirements of the traditional authorities. It's recommended to inquire locally for accurate fee information.",
    },
    {
      icon: <Docs />,
      question: "What documents are required for the certification process?",
      answer:
        "Documents required for the certification process typically include proof of ownership or occupancy, identification documents, and any relevant permits or agreements. Additional documents may be requested based on specific circumstances.",
    },
    {
      icon: <Persons />,
      question:
        "Can I apply for certification if I'm not a member of the local community?",
      answer:
        "In most cases, Stool Land Certification is intended for members of the local community who have traditional ties to the land. However, some regions may have provisions for non-members to apply under certain conditions. It's advisable to consult with local authorities for eligibility criteria.",
    },
    {
      icon: <Thumb />,
      question:
        "Who conducts the land inspections during the certification process?",
      answer:
        "Land inspections during the certification process are typically conducted by representatives of the traditional authorities or designated surveyors. These individuals assess the land to verify ownership, boundaries, and compliance with relevant regulations.",
    },
  ];

  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Function to toggle answer visibility for a specific question
  const toggleAnswer = (index: any) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
   <div className={styles.wrap}>
     <div className={styles.faqs}>
      <h4>FREQUENTLY ASKED QUESTIONS </h4>
      <p>
        Explore answers to common queries about Stool Land Certification. From
        application procedures to fee payments and eligibility criteria, find
        the information you need to navigate the certification process
        seamlessly. If you have additional questions, feel free to reach out to
        our team for assistance.
      </p>

      <div className={styles.allquestions}>
        {questionsArray.map((question, index) => (
          <div className={`${styles.question} ${openQuestionIndex === index && styles.border}`}  onClick={() => toggleAnswer(index)}  key={index}>
            <div className={styles.icon}>{question.icon}</div>
            <div className={styles.dets}>
              <p className={styles.questionRow}>
                {question.question}{" "}
                <span>
                  {openQuestionIndex === index ? <UpArrow /> : <DownArrow />}
                </span>
              </p>
              {openQuestionIndex === index && (
                <p className={styles.answer}>{question.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Faqs;
