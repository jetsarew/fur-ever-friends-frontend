export type CommonUserModel = {
    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    refreshToken: string;
    role: Role;
    accountStatus: AccountStatus;
    customer?: Customer;
    petsitter?: PetSitter;
    admin?: Admin;
};

export type Customer = {
    id: string;
    userId: string;
    pet: Pet[];
}

export type PetSitter = {
    id: string;
    userId: string;
    information: string;
    rating: number;
    certificateUrl: string;
}

export type Admin = {
    id: string;
    userId: string;
}

export type Pet = {
    id: string;
}

/*
"id": "fa116cec-14d9-44e5-8c8c-51fae3114ad9",
"email": "suzana@gmail.com",
"password": "$2a$10$hlcPR65ZeCTxWwBF8bTJM.o6wGYZLgVvrXERv.uCukvZ.bKyfC5Ke",
"firstname": "Suzana",
"lastname": "Renaud",
"phone": "0123456789",
"state": "PENDING",
"certificateUrl": "93d9ce93-793a-424c-94f1-42848dac7393-Screenshot 2024-10-11 221143.png"
*/
export type QualificationModelResponse = {
    id: string;
    email: string;
    password: string;
    firstname: string;
    lasename: string;
    phone: string;
    state: "PENDING" | "ACCEPTED" | "REJECTED";
    certificateUrl: string;
}

export type AccountStatus = "ACTIVE" | "INACTIVE" | "BANNED";
export type Role = "CUSTOMER" | "PETSITTER" | "ADMIN";
  