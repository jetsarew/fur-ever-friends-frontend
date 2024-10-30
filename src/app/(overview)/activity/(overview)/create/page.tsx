"use client";

import { createActivityValidationSchema, CreateActivityValues, emptyCreateActivityValues } from "@/app/constants/formik/createActivity.formik";
import AddPetButton from "@/components/Button/AddPetButton";
import AddPetActivityCard from "@/components/Card/AddPetActivityCard";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { Toast } from "@/components/Toast/Toast";
import { CreateActivityDto, CreateServiceDto, ServiceType } from "@/dto/activity.dto";
import { convertToUTC } from "@/hooks/useConvertTime";
import { activityService } from "@/services/activity.service";
import { petService } from "@/services/pet.service";
import { useAppSelector } from "@/store/hooks";
import { PetModelResponse } from "@/types/response.type";
import { getFieldProps } from "@/utils/getFieldProps";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateActivityPage() {
  const [services, setServices] =  useState<CreateServiceDto[]>([]);
  const [petList, setPetList] = useState<PetModelResponse[]>([]);

  const userData = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const isAllowed =
    userData && userData.customer && userData?.role == "CUSTOMER";

  if (!isAllowed) {
    router.push("/");
  }

  const addNewPetToActivity = (petId: string) => {
    setServices((prev) => [...prev, {
      petId: petId,
      tasks: [{
        type: "EXERCISING",
        detail: "",
      }]
    }])
  };

  const handleTaskAdded = (petId: string) => {
    setServices((prev) => {
      return prev.map((service) => {
        if (petId === service.petId) {
          return {
            ...service,
            tasks: [...service.tasks, {
              type: "EXERCISING",
              detail: "",
            }],
          };
        }
        return service;
      });
    })
  }

  const handleTaskTypeEdited = (petId: string, taskIndex: number, type: ServiceType) => {
    setServices((prev) => {
      return prev.map((service) => {
        if (petId === service.petId) {

          const updatedTasks = service.tasks.map((task, index) => {
            if (index === taskIndex) {
              return {
                ...task,
                type: type,
              };
            }
            return task;
          });
  
          return {
            ...service,
            tasks: updatedTasks,
          };
        }
        return service;
      });
    });
  }

  const handleTaskDetailEdited = (petId: string, taskIndex: number, detail: string) => {
    setServices((prev) => {
      return prev.map((service) => {
        if (petId === service.petId) {

          const updatedTasks = service.tasks.map((task, index) => {
            if (index === taskIndex) {
              return {
                ...task,
                detail: detail,
              };
            }
            return task;
          });
  
          return {
            ...service,
            tasks: updatedTasks,
          };
        }
        return service;
      });
    });
  }

  const handleTaskRemoved = (petId: string, taskIndex: number) => {
    
    if(services.filter((service) => service.petId == petId)[0].tasks.length == 1){
      setServices((prev) => prev.filter((service) => service.petId != petId));
    }
    else {
      setServices((prev) => {
        return prev.map((service) => {
          if (petId === service.petId) {
            return {
              ...service,
              tasks: service.tasks.filter((_, index) => index !== taskIndex),
            };
          }
          return service;
        });
      })
    }
  }

  const handleCreateActivity = async () => {
    try {
      const createActivityRequest:CreateActivityDto = {
        title: formik.values.title,
        detail: formik.values.detail,
        startDateTime: convertToUTC(formik.values.startDateTime),
        endDateTime: convertToUTC(formik.values.endDateTime),
        pickupPoint: formik.values.pickupPoint,
        services: services
      };
      await activityService.createActivity(createActivityRequest);
      Toast("Create activity success.", "success");
      router.push("/activity/unassigned");
    } catch(error) {
      Toast(error as string, "error");
    }
  }

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const time = formik.values.startTime

    formik.setFieldValue('startDateTime', `${date}T${time}`);
  };
  
  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    const date = formik.values.startDate;

    formik.setFieldValue('startDateTime', `${date}T${time}`);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const time = formik.values.endTime

    formik.setFieldValue('endDateTime', `${date}T${time}`);
  };
  
  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    const date = formik.values.endDate;

    formik.setFieldValue('endDateTime', `${date}T${time}`);
  };

  const formik = useFormik<CreateActivityValues>({
    initialValues: {
        ...emptyCreateActivityValues,
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: createActivityValidationSchema,
    onSubmit: handleCreateActivity,
  });

  useEffect(() => {
    const fetchPets = async () => {
        try {
            const response = await petService.getPetsByOwner();
            setPetList(response);
        } catch(error) {

        }
    }
    
    fetchPets();
}, []);

  const nameInputProps = getFieldProps(formik, "title");
  const detailInputProps = getFieldProps(formik, "detail");
  // const startDateTimeInputProps = getFieldProps(formik, "startDateTime");
  // const endDateTimeInputProps = getFieldProps(formik, "endDateTime");
  const pickupPointInputProps = getFieldProps(formik, "pickupPoint");

  return (
    <div className="flex justify-center">
      <div className="bg-white w-[680px] h-full flex justify-center">
        <form noValidate onSubmit={formik.handleSubmit} className="justify-center pb-24 w-full bg-white">
          <div className="grid grid-row text-black gap-8  bg-white">
            <ValidatedInput 
              {...nameInputProps}
              label="Activity Name"
              containerStyle="relative flex flex-col gap-3"
              labelStyle="text-dark-blue text-subheading2"
              value={formik.values.title}
              onChange={(e) => formik.setFieldValue("title", e.target.value)}
              type="text"
            />
            <div className="flex flex-col gap-4">
              <label className="text-dark-blue block text-subheading2">
                Duration
              </label>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">Start</p>
                <div className="flex flex-row w-[65%] gap-8">
                  <input
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={(e) => {
                      formik.setFieldValue("startDate", e.target.value);
                      handleStartDateChange(e);
                    }}  
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                  />
                  <input
                    type="time"
                    name="startTime"
                    value={formik.values.startTime}
                    onChange={(e) => {
                      formik.setFieldValue("startTime", e.target.value);
                      handleStartTimeChange(e);
                    }}
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-body-bold">End</p>
                <div className="flex flex-row w-[65%] gap-8">
                  <input
                    type="date"
                    name="endDate"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    value={formik.values.endDate}
                    onChange={(e) => {
                      formik.setFieldValue("endDate", e.target.value);
                      handleEndDateChange(e);
                    }}
                  />
                  <input
                    type="time"
                    name="endTime"
                    className="w-full border rounded-[8px] py-[15px] px-[18px]"
                    value={formik.values.endTime}
                    onChange={(e) => {
                      formik.setFieldValue("endTime", e.target.value);
                      handleEndTimeChange(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-dark-blue block text-subheading2">
                Location
              </label>
              <ValidatedInput 
                {...pickupPointInputProps}
                label="Place"
                containerStyle="relative flex flex-col gap-3"
                labelStyle="text-body-bold"
                value={formik.values.pickupPoint}
                onChange={(e) => formik.setFieldValue("pickupPoint", e.target.value)}
                type="text"
              />
              <ValidatedInput 
                {...detailInputProps}
                label="Detail"
                containerStyle="relative flex flex-col gap-3"
                labelStyle="text-body-bold"
                value={formik.values.detail}
                onChange={(e) => formik.setFieldValue("detail", e.target.value)}
                type="text"
              />
            </div>
            <div>
              <div className="flex justify-between items-baseline pb-8">
                <label className="text-dark-blue block text-subheading2">
                  Pet Activities
                </label>
                <AddPetButton
                  pets={petList}
                  services={services}
                  onAddNewPet={addNewPetToActivity}
                />
              </div>

              <div className="grid gap-6">
                {services.map((service, index) => (
                  <AddPetActivityCard
                    key={index}
                    pet={petList.filter((pet) => pet.id == service.petId)[0]}
                    tasks={service.tasks}
                    handleTaskAdded={handleTaskAdded}
                    handleTaskRemoved={handleTaskRemoved}
                    handleTaskTypeEdited={handleTaskTypeEdited}
                    handleTaskDetailEdited={handleTaskDetailEdited}
                  />
                ))}
                {services.length == 0 && (
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={"/empty.svg"}
                      width={200}
                      height={200}
                      alt={"empty"}
                    />
                    <p className="text-center text-soft-gray">
                      No pets here! Add your pet to make the most of this activity.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-bright-green round-[8px] w-fit h-fit justify-self-center py-3 px-6 rounded-[8px] text-white text-button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
