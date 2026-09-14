import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/features/navbar/Modal";
import { SetToggleMenuType } from "@/types/type";
import Close from "@/components/Close";
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
  accountSchema,
  personalInfoSchema,
  securitySchema,
  RegisterData,
} from "./schema";

// Order here MUST match the order steps are rendered below.
const steps = [
  { id: "account", label: "Account", schema: accountSchema },
  { id: "personal", label: "Personal Info", schema: personalInfoSchema },
  { id: "security", label: "Security", schema: securitySchema },
] as const;

const RegisterModal = ({
  setShowRegisterModal,
}: {
  setShowRegisterModal: SetToggleMenuType;
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const form = useForm<RegisterData>({
    resolver: zodResolver(steps[currentStep].schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      firstName: "",
      lastName: "",
      resetPasswordQuestion: "",
      resetPasswordAnswer: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    control,
    formState: { isSubmitting },
  } = form;

  const nextStep = async () => {
    const fieldsToValidate = Object.keys(
      steps[currentStep].schema.shape,
    ) as Array<keyof RegisterData>;
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
    console.log("Final Form Submitted Successfully Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Modal setShowModal={setShowRegisterModal}>
      <div className="w-1/2">
        <Image
          height={500}
          width={500}
          src={"/food3.jpg"}
          alt=""
          className="min-w-96 h-full object-cover rounded-l-xl"
        />
      </div>

      <div className="w-1/2 flex min-w-96 flex-col justify-center items-center mx-auto p-11 relative">
        <div className="absolute top-1 right-1">
          <button
            onClick={() => setShowRegisterModal(false)}
            type="button"
            className="bg-transparent rounded-md m-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
          >
            <Close />
          </button>
        </div>

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
                  name="confirmPassword"
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
                  name="firstName"
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
                  name="lastName"
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
                  name="resetPasswordQuestion"
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
                  name="resetPasswordAnswer"
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
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
