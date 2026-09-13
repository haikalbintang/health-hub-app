const Instructions = ({ instructions }: { instructions: string[] }) => {
  return (
    <ol className="flex flex-col">
      {instructions.map((step, index) => (
        <li
          key={index}
          className="flex gap-4 py-4 border-b border-stone-100 last:border-b-0"
        >
          <span className="flex items-center justify-center shrink-0 h-7 w-7 rounded-full bg-orange-400 text-white text-sm font-semibold">
            {index + 1}
          </span>
          <p className="text-base text-stone-700 leading-relaxed pt-0.5">
            {step}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Instructions;
