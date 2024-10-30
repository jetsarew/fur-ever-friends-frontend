"use client";

import { useFormik } from "formik";
import {
  LoginValues,
  emptyLoginValues,
  loginValidationSchema,
} from "@/app/constants/formik/login.formik";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { setAuthUser } from "@/store/auth/auth.slice";
import { authService } from "@/services/auth.service";
//import Cookies from "js-cookie";
import { Toast } from "@/components/Toast/Toast";
import { useRouter } from "next/navigation";
import { getFieldProps } from "@/utils/getFieldProps";
import ValidatedInput from "@/components/Input/ValidatedInput";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await authService.login(formik.values);
      console.log(response);
      dispatch(setAuthUser(response.user));
      //Cookies.set("accessToken", response.token.accessToken, { secure: true, sameSite: 'Strict' });
      router.push("/");
    } catch (error) {
      Toast("Login failed.", "error");
    }
  };

  const formik = useFormik<LoginValues>({
    initialValues: {
      ...emptyLoginValues,
    },
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: loginValidationSchema,
    onSubmit: handleLogin,
  });

  const emailInputProps = getFieldProps(formik, "email");
  const passwordInputProps = getFieldProps(formik, "password");

  return (
    <>
      <div className=" flex flex-col gap-[64px] mx-auto w-[506px] items-center">
        <h2 className="text-header">Welcome to Fur-ever Friends</h2>
        <form
          noValidate
          className="flex flex-col gap-6 w-[442px]"
          onSubmit={formik.handleSubmit}
        >
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
          <div className="mt-2 flex flex-col items-center gap-8">
            <button
              type="submit"
              className="w-full px-6 py-4 text-button text-white bg-bright-blue rounded-lg"
            >
              Log in
            </button>
            <p className="text-small text-soft-gray flex flex-row gap-2 items-baseline">
              Don’t have an account yet?{" "}
              <Link
                href="/auth/signup/pet-owner"
                className="text-body-bold underline text-bright-blue "
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
