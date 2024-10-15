"use client";

import { useState } from "react";
import Image from "next/image";

// Define the interface for formData
interface FormData {
    type: string;
    breed: string;
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
        breed: '',
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
            !formData.breed ||
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
        <div className="flex justify-center bg-white pb-16">      
            <form className="w-[680px]" onSubmit={handleSubmit}>
                <div className="mb-8 flex flex-col items-center gap-4 justify-center">
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
                            src="/paws.png"
                            width={150}
                            height={150}
                            alt="Placeholder image"
                            className="bg-very-light-gray rounded-full border-[3px] border-bright-blue justify-self-center"
                        />
                    )}
                    <div className="relative flex flex-row justify-center items-center text-white bg-bright-blue rounded-[8px] w-[163px] h-[32px] justify-self-center px-6 text-button cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute left-0 right-0 top-0 bottom-0 cursor-pointer opacity-0"
                        />
                        Upload Image
                    </div>
                    <input
                        id="upload-button"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}  // Handle file upload
                        required
                    />
                </div>

                <div className="w-full flex flex-col items-center gap-6">
                    <div className="w-full flex flex-row gap-8">
                        <div className="w-[205px]">
                            <label className="text-bright-blue block text-subheading2" htmlFor="type">
                                Type
                            </label>
                            <select
                                name="type"
                                className="w-full border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.type}
                                required  // Ensure this field is required
                            >
                                <option value="" disabled>Select Type</option>
                                <option value="Dogs">Dogs</option>
                                <option value="Cats">Cats</option>
                                <option value="Rabbits">Rabbits</option>
                                <option value="Rodents">Rodents</option>
                                <option value="Birds">Birds</option>
                                <option value="Reptile">Reptiles</option>
                                <option value="Fish">Fish</option>
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="text-bright-blue block text-subheading2" htmlFor="size">
                                Breed
                            </label>
                            <select
                                name="breed"
                                className="w-full border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.breed}
                                required
                            >
                                <option value="" disabled>Select Breed</option>
                                <option value="golden retriever">Golden Retriever</option>
                                <option value="shiba inu">Shiba Inu</option>
                                <option value="shih tzu">Shih Tzu</option>
                                <option value="saint bernard">Saint Bernard</option>
                                <option value="german shepherd">German Shepherd</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full flex flex-row gap-8">
                        <div className="w-[205px]">
                            <label className="text-bright-blue block text-subheading2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded-[8px] px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-bright-blue block text-subheading2" htmlFor="sex">
                                Sex
                            </label>
                            <select
                                name="sex"
                                className="w-full rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.sex}
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="text-bright-blue block text-subheading2" htmlFor="age">
                                Age (year)
                            </label>
                            <input
                                type="number"
                                name="age"
                                className="w-full rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.age}
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label className="text-bright-blue block text-subheading2" htmlFor="weight">
                                Weight (kg)
                            </label>
                            <input
                                type="number"
                                name="weight"
                                className="w-full rounded-[8px] border px-[18px] py-[15px] mt-3"
                                onChange={handleChange}
                                value={formData.weight}
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-bright-blue block text-subheading2" htmlFor="personality">
                            Personality
                        </label>
                        <textarea
                            name="personality"
                            className="w-full h-[96px] px-[18px] py-[15px] border rounded-[8px] resize-none mt-3"
                            onChange={handleChange}
                            value={formData.personality}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-bright-blue block text-subheading2" htmlFor="allergies">
                            Allergies
                        </label>
                        <textarea
                            name="allergies"
                            className="w-full h-[96px] px-[18px] py-[15px]  border rounded-[8px] resize-none mt-3"
                            onChange={handleChange}
                            value={formData.allergies}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="text-bright-blue block text-subheading2" htmlFor="otherDetails">
                            Other Details
                        </label>
                        <textarea
                            name="otherDetails"
                            className="w-full h-[96px] px-[18px] py-[15px]  border rounded-[8px] resize-none mt-3"
                            onChange={handleChange}
                            value={formData.otherDetails}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-bright-green round-[8px] w-fit h-fit justify-self-center py-3 px-6 rounded-[8px] text-white text-button"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
