import Image from "next/image";
import bg from "/public/background/contact-background.png"
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the witch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            I&#039;m always open to professional and casual opportunities! Whether you are an industry or academia representative who has taken a liking to me, or a fellow student seeking advice in Computer Science, I would love to chat with you!
          </p>
          <Form />
        </div>
      </article>
    </>
  );
}
