export default function PetCardTextSection({ title, description, padding, border }:{
    title: string;
    description: string;
    padding?: string;
    border?: string;
}){
    return (
        <div className={`${padding}`}>
            <div className={`pb-3 flex flex-col items-start gap-2 ${border == undefined ? "" : border}`}>
                <p className="text-body">{title}</p>
                <p className="text-small-paragraph text-standard-gray">{description}</p>
            </div>
        </div>
    )
}