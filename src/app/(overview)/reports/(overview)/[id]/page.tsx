'use client'

export default function ReportPage({ params }: {
  params: { id: string }
}) {
  const report = "a";

  return (
    report &&
    <div>
      {/* <p className="text-header text-bright-blue">{report.activity.title}</p> */}
      <p className="text-header text-bright-blue">HEADER</p>
      <div className="grid grid-cols-2">
        <div>

        </div>

        <div className="grid gap-[16px] w-[561px] border border-bd-gray rounded-[8px] py-[24px] px-[16px]">
          <div className="text-subheading text-bright-red">Report</div>
          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Report type</div>
            {/* <div className="text-body text-dark ">{reportMap(report.type)}</div> */}
            <div className="text-body text-dark ">aaaa</div>
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Description</div>
            <div className="text-small-paragraph text-paragraph-gray">
              {/* {report.content} */}
              content
            </div>
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Reported by</div>
            <div className="flex gap-[8px] items-center">
              <div className="w-[24px] h-[24px] rounded-[12px] border border-bright-blue"></div>
              {/* <div className="text-body text-dark">{report.reporter.firstname} {report.reporter.lastname}</div> */}
              <div className="text-body text-dark">firstname lastname</div>

            </div>
          </div>

          <div className="grid gap-[8px]">
            <div className="text-body-bold text-dark">Date</div>
            {/* <div className="text-small text-standard-gray">{formatDate(report.createdAt)}</div> */}
            <div className="text-small text-standard-gray">20/10/2024</div>
          </div>
        </div>
      </div>
    </div>

  );
}
