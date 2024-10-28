"use client";

import { convertUTCToTimeRemaining } from "@/hooks/useConvertTime";
import { useAppSelector } from "@/store/hooks";
import { ActivityModelResponse, ActivityState } from "@/types/response.type";
import Link from "next/link";
import { Toast } from "../Toast/Toast";
import { activityService } from "@/services/activity.service";
import { useRouter } from "next/navigation";
import ShowRequestPopUpButton from "../Button/ShowRequestPopUpButton";

interface ActivityStateBarInterface {
  activity: ActivityModelResponse;
}

export default function ActivityStateBar({
  activity,
}: ActivityStateBarInterface) {
  const userData = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  const statePriority = {
    PENDING: 0,
    ASSIGNED: 1,
    IN_PROGRESS: 2,
    RETURNING: 3,
    COMPLETED: 4,
    REJECTED: -1,
    FAILED: -1,
    CANCELLED: -1,
  };

  const onReturnButtonClicked = async () => {
    try {
        //const response = 
    } catch(error) {
        Toast("Failed to update activity state.", "error");
    }
  }

  const onReceiveButtonClicked = async () => {
    try {
        const response = activityService.updateActivityState(activity.id, {
            state: "COMPLETED"
        });
        console.log(response);
        Toast("The activity has been completed.", "success");
        router.push("/activity/completed");
    } catch(error) {
        Toast("Failed to update activity state.", "error");
    }
  }

  const pastDotElement = (
    <div className="w-3 h-3 rounded-full bg-dark-blue"></div>
  );
  const activeDotElement = (
    <div className="w-6 h-6 rounded-full bg-bright-blue"></div>
  );
  const inactiveDotStyleElement = (
    <div className="w-3 h-3 border-[2px] border-light-gray1 rounded-full"></div>
  );
  const pastLineElement = <div className="w-[2px] h-[48px] bg-dark-blue"></div>;
  const activeLineElement = (
    <div className="w-[2px] h-[120px] bg-light-gray1"></div>
  );
  const inactiveLineElement = (
    <div className="w-[2px] h-[48px] bg-light-gray1"></div>
  );

  const activeUnassignedElement = (
    <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
      <p className="text-subheading text-bright-blue">{`${
        userData?.role == "PETSITTER" ? "Requested" : "Unassigned"
      }`}</p>
      {userData?.role == "PETSITTER" ? (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            Waiting for pet owner approval
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            Please choose a pet sitter at least 24 hours before the activity
            begins
          </p>
          <ShowRequestPopUpButton activityId={activity.id} requests={activity.requests}/>
        </div>
      )}
    </div>
  );
  const startTimeRemaining = convertUTCToTimeRemaining(activity.startDateTime);
  const activeAssignedElement = (
    <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
      <p className="text-subheading text-bright-blue">{`${
        userData?.role == "PETSITTER" ? "Scheduled" : "Assigned"
      }`}</p>
      <div className="flex flex-row justify-end flex-wrap items-baseline gap-1 gap-y-2 text-body">
        <p>The activity starts in</p>
        <div className="flex flex-row justify-end items-baseline gap-1 text-body">
          {startTimeRemaining.day ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{startTimeRemaining.day}</p>
              <p>{`day${startTimeRemaining.day > 1 ? "s" : ""}${startTimeRemaining.hour ? " and" : ""}`}</p>
            </div>
          ): null}
          {startTimeRemaining.hour ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{startTimeRemaining.hour}</p>
              <p>{`hour${startTimeRemaining.hour > 1 ? "s" : ""}${startTimeRemaining.minute ? " and" : ""}`}</p>
            </div>
          ): null}
          {startTimeRemaining.minute ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{startTimeRemaining.minute}</p>
              <p>{`minute${startTimeRemaining.minute > 1 ? "s" : ""}`}</p>
            </div>
          ): null}
        </div>
      </div>
    </div>
  );

  const endTimeRemaining = convertUTCToTimeRemaining(activity.endDateTime);
  const activeInProgressElement = (
    <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
      <p className="text-subheading text-bright-blue">In progress</p>
      <div className="flex flex-row justify-end flex-wrap items-baseline gap-1 gap-y-2 text-body">
        <p>The activity ends in</p>
        <div className="flex flex-row justify-end items-baseline gap-1 text-body">
          {endTimeRemaining.day ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{endTimeRemaining.day}</p>
              <p>{`day${endTimeRemaining.day > 1 ? "s" : ""}${endTimeRemaining.hour ? " and" : ""}`}</p>
            </div>
          ): null}
          {endTimeRemaining.hour ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{endTimeRemaining.hour}</p>
              <p>{`hour${endTimeRemaining.hour > 1 ? "s" : ""}${endTimeRemaining.minute ? " and" : ""}`}</p>
            </div>
          ): null}
          {endTimeRemaining.minute ? (
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
              <p className="text-subheading">{endTimeRemaining.minute}</p>
              <p>{`minute${endTimeRemaining.minute > 1 ? "s" : ""}`}</p>
            </div>
          ): null}
        </div>
      </div>
    </div>
  );

  const activeReturningElement = (
    <div className="h-[151px] pt-[1px] flex flex-col items-end gap-4">
      <p className="text-subheading text-bright-blue">Returning</p>
      {userData?.role == "PETSITTER" ? (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            Have you returned all the pets to the owner yet?
          </p>
          <button 
            type="button"
            onClick={onReturnButtonClicked}
            className="px-6 py-2 rounded-lg bg-bright-green text-button text-white"
          >
            I have returned all pets
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            Have all your pets been returned to you yet?
          </p>
          <button 
            type="button" 
            onClick={onReceiveButtonClicked}
            className="px-6 py-2 rounded-lg bg-bright-green text-button text-white"
          >
            I have received my pets
          </button>
          <Link
            href={`/profile/${activity.petsitter?.id}/report`}
            className="h-8 px-6 py-2 flex flex-row justify-center items-center rounded-lg border-[2px] border-bright-red text-body-bold text-bright-red"
          >Report an issue
          </Link>
        </div>
      )}
    </div>
  );

  const activeCompletedElement = (
    <div className="h-[149px] pt-[2px] flex flex-col items-end gap-4">
      <p className="text-subheading text-bright-blue">Completed</p>
      {userData?.role == "PETSITTER" ? (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            You have successfully completed the activity
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-1">
          <p className="text-end text-body-paragraph">
            Please review the pet sitter
          </p>
          <Link 
            href={`/activity/${activity.id}/review/${activity.petsitter?.user.id}`}
            className="px-6 py-2 rounded-lg bg-golden-yellow text-button text-white">
            Rate pet sitter
          </Link>
        </div>
      )}
    </div>
  );

  const inactiveUnassignedElement = (
    <div className="h-[68px]">
      <p
        className={`text-body ${
          statePriority[activity.state] < statePriority["PENDING"]
            ? "text-soft-gray"
            : "text-dark-blue"
        }`}
      >{`${userData?.role == "PETSITTER" ? "Requested" : "Unassigned"}`}</p>
    </div>
  );

  const inactiveAssignedElement = (
    <div className="h-[68px]">
      <p
        className={`text-body ${
          statePriority[activity.state] < statePriority["ASSIGNED"]
            ? "text-soft-gray"
            : "text-dark-blue"
        }`}
      >{`${userData?.role == "PETSITTER" ? "Scheduled" : "Assigned"}`}</p>
    </div>
  );

  const inactiveInProgressElement = (
    <div className="h-[68px]">
      <p
        className={`text-body ${
          statePriority[activity.state] < statePriority["IN_PROGRESS"]
            ? "text-soft-gray"
            : "text-dark-blue"
        }`}
      >
        In progress
      </p>
    </div>
  );

  const inactiveReturningElement = (
    <div className="h-[68px]">
      <p
        className={`text-body ${
          statePriority[activity.state] < statePriority["RETURNING"]
            ? "text-soft-gray"
            : "text-dark-blue"
        }`}
      >
        Returning
      </p>
    </div>
  );

  const inactiveCompletedElement = (
    <div className="h-[68px]">
      <p className="text-body text-soft-gray">Completed</p>
    </div>
  );

  const renderState = (
    checkedState: ActivityState,
    activeElement: JSX.Element,
    inactiveElement: JSX.Element
  ) => {
    return statePriority[activity.state] === statePriority[checkedState]
      ? activeElement
      : inactiveElement;
  };

  const renderDot = (checkedState: ActivityState) => {
    if (statePriority[activity.state] > statePriority[checkedState])
      return pastDotElement;
    if (statePriority[activity.state] == statePriority[checkedState])
      return activeDotElement;
    return inactiveDotStyleElement;
  };

  const renderLine = (checkedState: ActivityState) => {
    if (statePriority[activity.state] > statePriority[checkedState])
      return pastLineElement;
    if (statePriority[activity.state] == statePriority[checkedState])
      return activeLineElement;
    return inactiveLineElement;
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="w-[382px] flex flex-col items-end">
        {renderState(
          "PENDING",
          activeUnassignedElement,
          inactiveUnassignedElement
        )}
        {renderState(
          "ASSIGNED",
          activeAssignedElement,
          inactiveAssignedElement
        )}
        {renderState(
          "IN_PROGRESS",
          activeInProgressElement,
          inactiveInProgressElement
        )}
        {renderState(
          "RETURNING",
          activeReturningElement,
          inactiveReturningElement
        )}
        {renderState(
          "COMPLETED",
          activeCompletedElement,
          inactiveCompletedElement
        )}
      </div>
      <div className="pt-[2px] flex flex-col items-center gap-1">
        {renderDot("PENDING")}
        {renderLine("PENDING")}
        {renderDot("ASSIGNED")}
        {renderLine("ASSIGNED")}
        {renderDot("IN_PROGRESS")}
        {renderLine("IN_PROGRESS")}
        {renderDot("RETURNING")}
        {renderLine("RETURNING")}
        {renderDot("COMPLETED")}
      </div>
    </div>
  );
}
