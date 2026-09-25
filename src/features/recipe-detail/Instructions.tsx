import InstructionsTimer from "@/features/recipe-detail/InstructionsTimer";

const Instructions = ({ instructions }: { instructions: string[] }) => {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-stone-900">Instructions</h2>
        <InstructionsTimer />
      </div>
      <ol className="flex flex-col divide-y divide-stone-100">
        {instructions.map((step, index) => (
          <li
            key={index}
            className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
          >
            <span className="flex items-center justify-center shrink-0 h-8 w-8 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              {index + 1}
            </span>
            <p className="text-sm flex-1 text-stone-800 leading-relaxed">
              {step.replace(/^\s*\d+\s*[.)\-]?\s*/, "")}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;