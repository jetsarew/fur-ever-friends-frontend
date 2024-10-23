import Image from "next/image";

export default function ReportPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="grid gap-[16px] w-[561px] border border-bd-gray rounded-[8px] py-[24px] px-[16px]">
      <div className="text-subheading text-bright-red">Report</div>
      <div className="py-2 flex flex-row items-center gap-4">
        <Image 
            src="/default_profile.jpg"
            width={80}
            height={80}
            alt="reported"
            className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-body-bold">Kirana Jasmine Chewter</p>
      </div>
      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Report type</div>
        <div className="text-body text-dark">Unprofessional Behavior</div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Description</div>
        <div className="text-small-paragraph text-paragraph-gray">
          The pet sitter showed up late without prior notice and appeared
          distracted during the pet sitting session. They did not follow the
          instructions I provided, such as feeding the pet on time and taking
          them for a walk. Additionally, their attitude was dismissive when I
          raised concerns about the care of my pet
        </div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Reported by</div>
        <div className="flex gap-[8px] items-center">
          <div className="w-[24px] h-[24px] rounded-[12px] border border-bright-blue"></div>
          <div className="text-body text-dark">Anntonia Porsild</div>
        </div>
      </div>

      <div className="grid gap-[8px]">
        <div className="text-body-bold text-dark">Date</div>
        <div className="text-small text-standard-gray">10/10/2024</div>
      </div>
    </div>
  );
}
