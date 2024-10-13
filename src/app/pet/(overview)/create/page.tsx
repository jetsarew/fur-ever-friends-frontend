"use client";

import { useState } from "react";
import Image from "next/image";

// Define the interface for formData
interface FormData {
    type: string;
    size: string;
    name: string;
    sex: string;
    age: string;
    weight: string;
    personality: string;
    allergies: string;
    otherDetails: string;
    imageUrl: string | ArrayBuffer | null;  // Add a field for the image URL
}

export default function Add_pet() {
    const [formData, setFormData] = useState<FormData>({
        type: '',
        size: '',
        name: '',
        sex: '',
        age: '',
        weight: '',
        personality: '',
        allergies: '',
        otherDetails: '',
        imageUrl: null,  // Initial value for imageUrl
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate that all required fields are filled
        if (
            !formData.type ||
            !formData.size ||
            !formData.name ||
            !formData.sex ||
            !formData.age ||
            !formData.weight ||
            !formData.personality ||
            !formData.allergies ||
            !formData.otherDetails ||
            !formData.imageUrl
        ) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Process form data (you can log it, send it to an API, etc.)
        console.log(formData);
        alert('Form submitted successfully!');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle image upload and preview
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    imageUrl: reader.result,  // Save image data in the state
                }));
            };
            reader.readAsDataURL(file);  // Read file as data URL for preview
        }
    };

    return (
        <div className="flex justify-center bg-white">
        <div className=" flex justify-center max-w-fit">
            
            <form className="justify-center " onSubmit={handleSubmit}>
                <div className="mb-6 grid justify-center">
                    {formData.imageUrl ? (
                        <Image
                            src={formData.imageUrl as string}  // Cast to string since it may return null
                            width={150}
                            height={150}
                            alt="Uploaded pet image"
                            className="rounded-full border-[3px] border-bright-blue justify-self-center"
                        />
                    ) : (
                        <Image
                            src="/dog.jpg"
                            width={150}
                            height={150}
                            alt="Placeholder image"
                            className="rounded-full border-[3px] border-bright-blue justify-self-center"
                        />
                    )}
                    <label
                        htmlFor="upload-button"
                        className="text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] justify-self-center px-6 my-2 text-button flex items-center justify-center cursor-pointer"
                    >
                        Upload Image
                    </label>
                    <input
                        id="upload-button"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}  // Handle file upload
                        required
                    />
                </div>

                <div className="grid grid-row text-black gap-6">
                    <div className="flex flex-col-2 gap-8">
                        <div>
                            <label className="text-bright-blue block text-subheading2" htmlFor="type">
                                Type
                            </label>
                            <select
                                name="type"
                                className="border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.type}
                                required  // Ensure this field is required
                            >
                                <option value="">Select Type</option>
                                <option value="Dogs">Dogs</option>
                                <option value="Cats">Cats</option>
                                <option value="Rabbits">Rabbits</option>
                                <option value="Rodents">Rodents</option>
                                <option value="Birds">Birds</option>
                                <option value="Reptile">Reptiles</option>
                                <option value="Fish">Fish</option>
                            </select>
                        </div>

                        <div className="w-fit">
                            <label className="text-bright-blue block text-subheading2" htmlFor="size">
                                Breed
                            </label>
                            <select
                                name="breed"
                                className="border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.size}
                                required
                            >
                                <option value="">Select Breed</option>
                                <option value="golden retriever">Golden Retriever</option>
                                <option value="shiba inu">Shiba Inu</option>
                                <option value="shih tzu">Shih Tzu</option>
                                <option value="saint bernard">Saint Bernard</option>
                                <option value="german shepherd">German Shepherd</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col-4 gap-8">
                        <div>
                            <label className="text-bright-blue block text-subheading2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </div>

                        <div>
                            <label className="text-bright-blue block text-subheading2" htmlFor="sex">
                                Sex
                            </label>
                            <select
                                name="sex"
                                className="rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.sex}
                                required
                            >
                                <option value="">Select Sex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-bright-blue block text-subheading2" htmlFor="age">
                                Age (year)
                            </label>
                            <input
                                type="text"
                                name="age"
                                className="rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.age}
                                required
                            />
                        </div>

                        <div>
                            <label className="text-bright-blue block text-subheading2" htmlFor="weight">
                                Weight (kg)
                            </label>
                            <input
                                type="text"
                                name="weight"
                                className="rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.weight}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-bright-blue block text-subheading2" htmlFor="personality">
                            Personality
                        </label>
                        <textarea
                            name="personality"
                            className="w-full border rounded-[8px] resize-none mt-3"
                            onChange={handleChange}
                            value={formData.personality}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-bright-blue block text-subheading2" htmlFor="allergies">
                            Allergies
                        </label>
                        <textarea
                            name="allergies"
                            className="w-full border rounded-[8px] resize-none px-[18px] py-[15px] mt-3"
                            onChange={handleChange}
                            value={formData.allergies}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-bright-blue block text-subheading2" htmlFor="otherDetails">
                            Other Details
                        </label>
                        <textarea
                            name="otherDetails"
                            className="w-full border rounded-[8px] resize-none px-[18px] py-[15px] mt-3"
                            onChange={handleChange}
                            value={formData.otherDetails}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-bright-green round-[8px] w-fit h-fit justify-self-center py-3 px-6 rounded-[8px] text-white text-button"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}
