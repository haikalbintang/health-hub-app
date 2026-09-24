"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetToggleMenuType } from "@/types/type";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  accountBaseSchema,
  personalInfoSchema,
  securitySchema,
  RegisterData,
  registerDataSchema,
} from "@/features/navbar/schema";
import { API_BASE_URL } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

// Order here MUST match the order steps are rendered below.
const steps = [
  { id: "account", label: "Account", schema: accountBaseSchema },
  { id: "personal", label: "Personal Info", schema: personalInfoSchema },
  { id: "security", label: "Security", schema: securitySchema },
] as const;

const RegisterModal = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const router = useRouter();

  const form = useForm<RegisterData>({
    resolver: zodResolver(registerDataSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      username: "",
      first_name: "",
      last_name: "",
      reset_password_question: "",
      reset_password_answer: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    control,
    formState: { isSubmitting },
  } = form;

  const nextStep = async () => {
    const schema = steps[currentStep].schema;

    const fieldsToValidate = Object.keys(schema.shape) as Array<
      keyof RegisterData
    >;
    const isStepValid = await trigger(fieldsToValidate);
    console.log(isStepValid);

    if (isStepValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    const { confirm_password, ...registrationData } = data;

    try {
      const res = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });

      const result = await res.json();
      if (!res.ok) {
        await Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: result.message || "Something went wrong. Please try again.",
        });
        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully. Please login.",
      });
      router.push("/login");
    } catch (err) {
      console.error("Registration error:", err);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to register. Please try again.",
      });
    }
  };

  return (
    <main className="grid grid-cols-2">
      <div className="w-1/2 m-6 ml-auto mr-6">
        <Image
          height={500}
          width={500}
          src={"/food3.jpg"}
          alt=""
          className="min-w-96 h-full object-cover rounded-l-xl"
        />
      </div>

      <div className="m-6 ml-8 bg-orange-100 rounded-xl w-1/2 flex min-w-96 flex-col justify-center items-center mx-auto p-11 relative">
        <h1 className="text-2xl mb-10">Register New Account</h1>

        {/* Step indicator */}
        <div className="w-full max-w-sm mb-6">
          <div className="text-lg flex items-center justify-between mb-2">
            <span className="font-medium text-muted-foreground">
              {steps[currentStep].label}
            </span>
            <span className="text-base text-muted-foreground">
              {currentStep + 1} / {steps.length}
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm space-y-4"
          >
            {/* STEP 1: ACCOUNT */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* STEP 2: PERSONAL INFO */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <FormField
                  control={control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* STEP 3: SECURITY */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <FormField
                  control={control}
                  name="reset_password_question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Security Question</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. What was your first pet's name?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="reset_password_answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* NAVIGATION CONTROLS */}
            <div className="flex gap-3 pt-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                >
                  Back
                </Button>
              )}

              {!isLastStep ? (
                <Button type="button" onClick={nextStep} className="flex-1">
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
                </Button>
              )}
            </div>
            <div className="">
              <p className="text-sm text-gray-700">
                Already have an account? Login{" "}
                <Link
                  href={"/login"}
                  // onClick={() => goToRegisterFromLogin()}
                  className="text-red-500 hover:text-red-600 cursor-pointer hover:font-semibold"
                >
                  here
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default RegisterModal;
