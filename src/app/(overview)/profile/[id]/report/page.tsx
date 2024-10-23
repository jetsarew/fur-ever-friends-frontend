"use client";

import {
  createReportValidationSchema,
  CreateReportValues,
  emptyCreateReportValues,
} from "@/app/constants/formik/createReport.formik";
import { reportOptions } from "@/app/constants/reportOption";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { Toast } from "@/components/Toast/Toast";
import { CreateReportDto } from "@/dto/report.dto";
import { getAttachmentSrc } from "@/hooks/useImage";
import { reportService } from "@/services/report.service";
import { userService } from "@/services/user.service";
import { CloseIcon } from "@/shared/Icon";
import { useAppSelector } from "@/store/hooks";
import { CommonUserModel } from "@/types/user.type";
import { getFieldProps } from "@/utils/getFieldProps";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityReportPage({
  params,
}: {
  params: { id: string };
}) {
  const [reportedUserData, setReportedUserData] =
    useState<CommonUserModel | null>(null);
  const [reportImages, setReportImages] = useState<File[]>([]);
  const [reportImageUrls, setReportImageUrls] = useState<string[]>([]);

  const userData = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const handleCreateReport = async () => {
    try {
      const createReportRequest: CreateReportDto = {
        ...formik.values,
      };

      if (reportImages.length) {
        createReportRequest.reportImages = [...reportImages];
      }

      const response = await reportService.createReport(createReportRequest);
      console.log(response);
      router.back();
    } catch (error) {
      Toast("Failed to create the report.", "error");
    }
  };

  const onReportImageUploaded = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const objectUrl = URL.createObjectURL(files[0]);
      setReportImageUrls((prev) => {
        return [...prev, objectUrl];
      })
      setReportImages((prev) => {
        return [...prev, files[0]];
      })
    }
  };

  const onReportImageRemoved = (deletedIndex: number) => {
    setReportImages((prev) => {
      return prev.filter((url, index) => {
        return index != deletedIndex;
      })
    })
    setReportImageUrls((prev) => {
      return prev.filter((url, index) => {
        return index != deletedIndex;
      })
    })
  };

  const formik = useFormik<CreateReportValues>({
    initialValues: {
      ...emptyCreateReportValues,
      reportedId: params.id,
      reporterId: userData?.id ?? "",
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: createReportValidationSchema,
    onSubmit: handleCreateReport,
  });

  useEffect(() => {
    const fetchReportedUser = async () => {
      try {
        const response = await userService.getUser(params.id);
        setReportedUserData(response);
      } catch (error) {
        Toast("You can not report this account.", "error");
        router.back();
      }
    };

    fetchReportedUser();
  }, [params.id]);

  const contentInputProps = getFieldProps(formik, "content");

  return (
    <form noValidate onSubmit={formik.handleSubmit} className="w-[680px] mx-auto flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-start gap-8">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={
              reportedUserData?.avatar
                ? getAttachmentSrc(reportedUserData.avatar)
                : "/default_profile.jpg"
            }
            width={120}
            height={120}
            alt={"pet sitter profile"}
            className="w-[60px] h-[60px] rounded-full border-[3px] border-bright-blue object-cover"
          />
          <p className="text-subheading text-bright-blue">
            Kirana Jasmine Chewter
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-8">
        <div className="w-[324px] relative">
          <label className="text-body-bold" htmlFor="report type">
            Report type
          </label>
          <select
            name="report type"
            className="w-full border rounded-[8px] px-[18px] py-[15px] mt-3"
            onChange={(e) => formik.setFieldValue("type", e.target.value)}
            value={formik.values.type}
            required
          >
            {reportOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
        <ValidatedInput
          {...contentInputProps}
          label="Description"
          containerStyle="relative w-full flex flex-col gap-3"
          height="h-[136px]"
          labelStyle="text-body-bold"
          value={formik.values.content}
          onTextAreaChange={(e) =>
            formik.setFieldValue("content", e.target.value)
          }
          type="textarea"
        />
      </div>
      <div className="w-[680px] flex flex-col gap-3">
          <label className="text-body-bold">
            Additional Images
          </label>
          <div className="px-6 py-8 flex flex-col gap-4 border-2 border-dashed border-bd-gray rounded-lg">
            <div className="relative flex flex-row justify-center items-center text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] justify-self-center px-6 text-button cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={onReportImageUploaded}
                className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer opacity-0"
              />
              Upload Image
            </div>
            {reportImages.length == 0 && 
            (
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={"/empty-cover-image.svg"}
                  width={300}
                  height={300}
                  alt={"empty cover image"}
                />
                <p className="text-center text-soft-gray">
                    Add an image to support your report and provide more clarity!
                </p>
              </div>
            )}
            {reportImageUrls.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative bg-[#F5F5F5] hover:shadow-custom"
                >
                  <Image
                    src={image}
                    width={700}
                    height={700}
                    alt="cover images"
                    className="w-full h-[366px] object-contain"
                  />
                  <button
                    type="button"
                    className={`w-8 h-8 bg-[#0f1419bf] hover:bg-[#272c30bf] rounded-full flex flex-row justify-center items-center absolute top-2 right-2`}
                    onClick={() => onReportImageRemoved(index)}
                  >
                    <CloseIcon customStyle="w-[18px] h-[18px]" color="white" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      <button type="submit" className="px-6 py-4 flex flex-row justify-between items-center rounded-lg text-button text-white bg-bright-red">
        Send report
      </button>
    </form>
  );
}
