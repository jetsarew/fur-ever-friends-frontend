type activityState = "Unassigned" | "Assigned" | "In progress" | "Returning" | "Completed" | "Requested" | "Scheduled";

export default function ActivityStateBar(){
    const currentState = "Requested";
    const role: "pet sitter" | "pet owner" = "pet sitter";

    const statePriority = {
        "Unassigned": 0,
        "Assigned": 1,
        "In progress": 2,
        "Returning": 3,
        "Completed": 4,
        "Requested": 0,
        "Scheduled": 1,
    };

    const pastDotElement = <div className="w-3 h-3 rounded-full bg-dark-blue"></div>;
    const activeDotElement = <div className="w-6 h-6 rounded-full bg-bright-blue"></div>;
    const inactiveDotStyleElement = <div className="w-3 h-3 border-[2px] border-light-gray1 rounded-full"></div>;
    const pastLineElement = <div className="w-[2px] h-[48px] bg-dark-blue"></div>;
    const activeLineElement = <div className="w-[2px] h-[120px] bg-light-gray1"></div>;
    const inactiveLineElement = <div className="w-[2px] h-[48px] bg-light-gray1"></div>;

    const activeUnassignedElement = (
        <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
            <p className="text-subheading text-bright-blue">{`${role == "pet sitter" ? "Requested" : "Unassigned"}`}</p>
            {
                role == "pet sitter" ? 
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">Waiting for pet owner approval</p> 
                </div>
                :
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">Please choose a pet sitter at least 24 hours before the activity begins</p> 
                    <button className="px-6 py-2 rounded-lg bg-bright-blue text-button text-white">See all request</button>
                </div>
            }
            
        </div>
    );

    const activeAssignedElement = (
        <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
            <p className="text-subheading text-bright-blue">{`${role == "pet sitter" ? "Scheduled" : "Assigned"}`}</p>
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
                <p>The activity starts in</p>
                <p className="text-subheading">8</p>
                <p>hours and</p>
                <p className="text-subheading">30</p>
                <p>minutes</p>
            </div>
        </div>
    );

    const activeInProgressElement = (
        <div className="h-[151px] pt-[2px] flex flex-col items-end gap-4">
            <p className="text-subheading text-bright-blue">In progress</p>
            <div className="flex flex-row justify-end items-baseline gap-1 text-body">
                <p>The activity ends in</p>
                <p className="text-subheading">1</p>
                <p>hours and</p>
                <p className="text-subheading">30</p>
                <p>minutes</p>
            </div>
        </div>
    );

    const activeReturningElement = (
        <div className="h-[151px] pt-[1px] flex flex-col items-end gap-4">
            <p className="text-subheading text-bright-blue">Returning</p>
            {
                role == "pet sitter" ?
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">Have you returned all the pets to the owner yet?</p> 
                    <button className="px-6 py-2 rounded-lg bg-bright-green text-button text-white">I have returned all pets</button>
                </div>
                :
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">Have all your pets been returned to you yet?</p> 
                    <button className="px-6 py-2 rounded-lg bg-bright-green text-button text-white">I have received my pets</button>
                    <button className="h-8 px-6 py-2 flex flex-row justify-center items-center rounded-lg border-[2px] border-bright-red text-body-bold text-bright-red">Report an issue</button>
                </div>
            }
        </div>
    );

    const activeCompletedElement = (
        <div className="h-[149px] pt-[2px] flex flex-col items-end gap-4">
            <p className="text-subheading text-bright-blue">Completed</p>
            {
                role == "pet sitter" ?
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">You have successfully completed the activity</p> 
                </div>
                :
                <div className="flex flex-col items-end gap-1">
                    <p className="text-end text-body-paragraph">Please review the pet sitter</p> 
                    <button className="px-6 py-2 rounded-lg bg-golden-yellow text-button text-white">Rate pet sitter</button>
                </div>
            }
            
        </div>
    );

    const inactiveUnassignedElement = (
        <div className="h-[68px]">
            <p className={`text-body ${statePriority[currentState] < statePriority["Unassigned"] ? "text-soft-gray" : "text-dark-blue"}`}>{`${role == "pet sitter" ? "Requested" : "Unassigned"}`}</p>
        </div>
    );

    const inactiveAssignedElement = (
        <div className="h-[68px]">
            <p className={`text-body ${statePriority[currentState] < statePriority["Assigned"] ? "text-soft-gray" : "text-dark-blue"}`}>{`${role == "pet sitter" ? "Scheduled" : "Assigned"}`}</p>
        </div>
    );

    const inactiveInProgressElement = (
        <div className="h-[68px]">
            <p className={`text-body ${statePriority[currentState] < statePriority["In progress"] ? "text-soft-gray" : "text-dark-blue"}`}>In progress</p>
        </div>
    );

    const inactiveReturningElement = (
        <div className="h-[68px]">
            <p className={`text-body ${statePriority[currentState] < statePriority["Returning"] ? "text-soft-gray" : "text-dark-blue"}`}>Returning</p>
        </div>
    );

    const inactiveCompletedElement = (
        <div className="h-[68px]">
            <p className="text-body text-soft-gray">Completed</p>
        </div>
    );

    const renderState = (checkedState: activityState, activeElement: JSX.Element, inactiveElement: JSX.Element) => {
        return statePriority[currentState] === statePriority[checkedState] ? activeElement : inactiveElement;
    }

    const renderDot = (checkedState: activityState) => {
        if(statePriority[currentState] > statePriority[checkedState]) return pastDotElement;
        if(statePriority[currentState] == statePriority[checkedState]) return activeDotElement;
        return inactiveDotStyleElement;
    };

    const renderLine = (checkedState: activityState) => {
        if(statePriority[currentState] > statePriority[checkedState]) return pastLineElement;
        if(statePriority[currentState] == statePriority[checkedState]) return activeLineElement;
        return inactiveLineElement;
    };

    return (
        <div className="flex flex-row gap-2">
            <div className="w-[382px] flex flex-col items-end">
                {renderState("Unassigned", activeUnassignedElement, inactiveUnassignedElement)}
                {renderState("Assigned", activeAssignedElement, inactiveAssignedElement)}
                {renderState("In progress", activeInProgressElement, inactiveInProgressElement)}
                {renderState("Returning", activeReturningElement, inactiveReturningElement)}
                {renderState("Completed", activeCompletedElement, inactiveCompletedElement)}
            </div>
            <div className="pt-[2px] flex flex-col items-center gap-1">
                {renderDot("Unassigned")}
                {renderLine("Unassigned")}
                {renderDot("Assigned")}
                {renderLine("Assigned")}
                {renderDot("In progress")}
                {renderLine("In progress")}
                {renderDot("Returning")}
                {renderLine("Returning")}
                {renderDot("Completed")}
            </div>
        </div>
    )
}