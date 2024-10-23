import { Role } from "@/types/user.type";

export type LoginDto = {
  email: string;
  password: string;
};
  
export type RegisterDto = {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  role: Role;
  certificateUrl?: string;
};

export type UpdateUserWithRoleDto = {
  petsitterData?: UpdatePetSitterDto;
  role: Role;
  userData?: UpdateUserDto;
  userId?: string;
}

export type UpdatePetSitterDto = {
  password?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  avatar?: string;
  avatarFile?: File;
  coverImageFile?: File[];
  petsitterData?: PetSitterData;
  userId?: string;
}

export type PetSitterData = {
  quote?: string;
  location?: string;
  about?: string;
  experience?: string;
  coverImages?: string[];
  serviceTags?: [];
}

// export type UpdatePetSitterDto = {
//   password?: string;
//   firstname?: string;
//   lastname?: string;
//   phone?: string;
//   avatar?: z.string().optional(),
//     petsitterData: z.object({
//         quote: z.string().optional(),
//         location: z.string().optional(),
//         about: z.string().optional(),
//         experience: z.string().optional(),
//         coverImages: z.array(z.string()).optional(),
//         serviceTags: z.nativeEnum(ServiceType).array().optional(),
//     }).optional(),
// }



export type UpdateUserDto = {
  password?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
}

export type QualificationDto = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  file: File;
};