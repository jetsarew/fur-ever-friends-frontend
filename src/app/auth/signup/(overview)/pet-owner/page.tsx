"use client";

import {
  emptyRegisterValues,
  registerValidationSchema,
  RegisterValues,
} from "@/app/constants/formik/register.formik";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { Toast } from "@/components/Toast/Toast";
import { useAuth } from "@/hooks/useAuth";
import { getFieldProps } from "@/utils/getFieldProps";
import { setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch } from "@/store/hooks";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function PetOwnerSignUpPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { registerMutation } = useAuth();

  const handleRegister = async () => {
    try {
        const { confirmPassword, ...parsedFormik} = formik.values;
        console.log(confirmPassword);
        const response = await registerMutation.mutateAsync(parsedFormik);
        console.log(response);
        dispatch(setAuthUser(response.user));
        Cookies.set("accessToken", response.token.accessToken, { secure: true, sameSite: 'Strict' });
        router.push("/");
    } catch (error) {
        if(error) {
            Toast(error as string, "error");
        }
        else {
            Toast("Failed to register", "error");
        }
    }
  };

  const formik = useFormik<RegisterValues>({
    initialValues: {
      ...emptyRegisterValues,
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: registerValidationSchema,
    onSubmit: handleRegister,
  });
  
  const emailInputProps = getFieldProps(formik, "email");
  const passwordInputProps = getFieldProps(formik, "password");
  const confirmPasswordInputProps = getFieldProps(formik, "confirmPassword");
  const firstNameInputProps = getFieldProps(formik, "firstname");
  const lastNameInputProps = getFieldProps(formik, "lastname");
  const phoneInputProps = getFieldProps(formik, "phone");

  return (
    <form
      noValidate
      className="flex flex-col items-stretch gap-6 w-[442px]"
      onSubmit={formik.handleSubmit}
    >
      <ValidatedInput 
        {...firstNameInputProps}
        label="First Name"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.firstname}
        onChange={(e) => formik.setFieldValue("firstname", e.target.value)}
        type="text"
      />
      <ValidatedInput 
        {...lastNameInputProps}
        label="Last Name"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.lastname}
        onChange={(e) => formik.setFieldValue("lastname", e.target.value)}
        type="text"
      />
      <ValidatedInput 
        {...emailInputProps}
        label="Email"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.email}
        onChange={(e) => formik.setFieldValue("email", e.target.value)}
        type="email"
      />
      <ValidatedInput 
        {...passwordInputProps}
        label="Password"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.password}
        onChange={(e) => formik.setFieldValue("password", e.target.value)}
        type="password"
      />
      <ValidatedInput 
        {...confirmPasswordInputProps}
        label="Confirm Password"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.confirmPassword}
        onChange={(e) => formik.setFieldValue("confirmPassword", e.target.value)}
        type="password"
      />
      <ValidatedInput 
        {...phoneInputProps}
        label="Phone Number"
        containerStyle="relative flex flex-col gap-2"
        labelStyle="text-subheading2 text-dark-blue"
        value={formik.values.phone}
        onChange={(e) => formik.setFieldValue("phone", e.target.value)}
        type="text"
      />
      <button
        type="submit"
        className="w-full px-6 py-4 mt-2 text-button text-white bg-bright-blue rounded-lg"
      >
        Create account
      </button>
    </form>
  );
}
