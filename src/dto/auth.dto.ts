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
  information?: string;
}

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