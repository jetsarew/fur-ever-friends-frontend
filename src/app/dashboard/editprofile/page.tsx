"use client"; 

import { FormEvent } from "react";
import NavBar from "@/app/component/navbar";

export default function ProfilePage() {
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imgElement = document.getElementById("profile-image") as HTMLImageElement;
                if (imgElement) {
                    imgElement.src = reader.result as string;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (event: FormEvent) => {
        event.preventDefault();
        const displayName = (document.getElementById("display-name") as HTMLInputElement).value;
        const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value;
        const imgSrc = (document.getElementById("profile-image") as HTMLImageElement).src;

        console.log("Display Name:", displayName);
        console.log("Phone Number:", phoneNumber);
        console.log("Image URL:", imgSrc);

        
    };

    return (
        <>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                
                <form onSubmit={handleSave} style={{ width: "300px", textAlign: "center" }}>
                    <div>
                        <label htmlFor="upload-image">
                            <div style={{width:"150px",height:"150px",borderRadius: "50%", overflow: "hidden", marginBottom: "30px" ,display: "flex", justifySelf:"center", alignItems: "center"  }}>
                                <img
                                    id="profile-image"
                                    src="/default-profile.png"
                                    style={{ alignContent:"center", objectFit: "cover" }}
                                    //style={{ width: "150%", height: "150%", objectFit: "cover" }}
                                />
                            </div>
                            <input
                                id="upload-image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none"}}
                            />
                            <button type="button" onClick={() => document.getElementById("upload-image")?.click()} style={{
                            padding: "5px 10px",
                            backgroundColor: "#0070f3",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                                Upload image
                                
                            </button>
                        </label>
                    </div>

                    <div style={{ marginBottom: "15px", textAlign: "left", color: "#1C7DBB",  fontWeight: "bold"}}>
                        <label>Display Name</label>
                        
                        <input
                            id="display-name"
                            type="text"
                             
                            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px", textAlign: "left", color: "#1C7DBB",  fontWeight: "bold"}}>
                        <label>Phone Number</label>
                        <input
                            id="phone-number"
                            type="text"
                            
                            style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Save
                    </button>
                </form>
            </div>
            
        </>
    );
}
