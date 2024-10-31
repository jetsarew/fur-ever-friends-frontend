"use client";

import { PetSitterRegisterValidationSchema, PetSitterRegisterValues } from "@/app/constants/formik/petSitterRegister.formik";
import ValidatedInput from "@/components/Input/ValidatedInput";
import { Toast } from "@/components/Toast/Toast";
import { useQualificationStep } from "@/hooks/useQualificationStep";
import { useAppSelector } from "@/store/hooks";
import { getFieldProps } from "@/utils/getFieldProps";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function PetSitterSignUpPage() {
  const { email, firstName, lastName, phone, password, confirmedPassword } = useAppSelector((state) => state.qualification);

  const { setEmailStore, setFirstNameStore, setLastNameStore, setPhoneStore, setPasswordStore, setConfirmPasswordStore } = useQualificationStep();
  const router = useRouter();

  const onContinueButtonClicked = () => {
    if (!formik.values.email || !formik.values.firstname || !formik.values.lastname || !formik.values.phone) {
      Toast("Please fill in all required fields before proceeding.", "error");
      return;
    }

    setEmailStore(formik.values.email);
    setFirstNameStore(formik.values.firstname);
    setLastNameStore(formik.values.lastname);
    setPhoneStore(formik.values.phone);
    if(formik.values.password)
      setPasswordStore(formik.values.password);
    if(formik.values.confirmPassword)
      setConfirmPasswordStore(formik.values.confirmPassword);

    router.push("/auth/signup/upload-cer");
  };

  const formik = useFormik<PetSitterRegisterValues>({
    initialValues: {
      role: "PETSITTER",
      firstname: firstName ?? "",
      lastname: lastName ?? "",
      phone: phone ?? "",
      email: email ?? "",
      password: password ?? "",
      confirmPassword: confirmedPassword ?? "",
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: PetSitterRegisterValidationSchema,
    onSubmit: onContinueButtonClicked,
  });

  const emailInputProps = getFieldProps(formik, "email");
  const firstNameInputProps = getFieldProps(formik, "firstname");
  const lastNameInputProps = getFieldProps(formik, "lastname");
  const phoneInputProps = getFieldProps(formik, "phone");
  const passwordInputProps = getFieldProps(formik, "password");
  const confirmPasswordInputProps = getFieldProps(formik, "confirmPassword");

  return (
    <form 
      noValidate 
      className="flex flex-col gap-6 w-[442px]"
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
        className="w-full px-6 py-4 mt-2 flex flex-row justify-center items-center text-button text-white bg-bright-blue rounded-lg"
      >
        Continue
      </button>
    </form>
  );
}
