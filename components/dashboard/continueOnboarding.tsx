import Link from "next/link";

export function ContinueOnboarding() {
  return (
    <div className="fixed bottom-0 w-full py-4 bg-gradient-to-b from-[#fafbfb57] to-[#FAFBFB]">
      <div className="w-full  flex justify-center ">
        <div className="w-auto max-w-[600px] p-7 rounded-md bg-white flex flex-col items-center justify-center gap-5 ">
          <h5 className="text-[clamp(1.35rem,3cqw,1.5rem)] font-semibold text-center">
            Continue onboarding to start applying
          </h5>
          <p className="text-center">
            Answer a few more questions to help us fine tune your search. It
            should take less than 5 minutes.
          </p>

          <Link
            href={"/onboarding//upload-resume"}
            className="p-[.5rem_1.2rem] text-center text-white text-[1rem] rounded-full bg-[var(--base)] hover:bg-[var(--base-hover)] transition-all"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
