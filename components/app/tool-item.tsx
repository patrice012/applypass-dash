import UploadResumeModal from "../dialogs/upload-resume";
import { Button } from "../ui/button";

interface ToolItemProps {
  title: string;
  image: string;
  description: string;
  buttonText: string;
  bg?: boolean;
}

const ToolItem = ({
  title,
  image,
  description,
  buttonText,
  bg,
}: ToolItemProps) => {
  return (
    <div className="flex gap-5 rounded-xl p-5 border bg-[#FBFAF8]">
      <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl size-16 shadow-2xl">
        <img className="" src={image} alt="Resume Icon" />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <h3 className="text-xl font-bold text-[#4B5563]">{title}</h3>
        <p className="text-[15px] font-light text-[#4B5563]">{description}</p>
        <UploadResumeModal>
          <Button
            className={`w-full md:max-w-max mt-2 rounded-[100px] border border-[#6805DA] py-2 px-5 ${
              bg
                ? "bg-[#6805DA] hover:bg-[#6805DA]/60"
                : "bg-transparent hover:bg-transparent"
            }`}
          >
            <span className={`${!bg && "text-[#6805DA]"} `}>{buttonText}</span>
          </Button>
        </UploadResumeModal>
      </div>
    </div>
  );
};

export default ToolItem;
