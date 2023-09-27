import { Section } from "@/data";
import Image from "next/image";

export function Choices({ title, choices }: Section) {
  return (
    <>
      <div className="text-5xl">{title}</div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {choices.map((choice) => (
          <Choices.Card
            key={choice.code}
            icon={choice.icon}
            title={choice.title}
          />
        ))}
      </div>
    </>
  );
}

interface CardProps {
  icon: string;
  title: string;
}
Choices.Card = function Card({ icon, title }: CardProps) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <Image src={icon} alt={title} width={64} height={64} className="mb-2" />
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
    </div>
  );
};
