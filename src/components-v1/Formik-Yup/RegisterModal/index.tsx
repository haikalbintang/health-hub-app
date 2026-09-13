// import { useState } from "react";
// import { Button } from "../../ui/button";

// import inboxsvg from "../../components/images/svg/email-1-svgrepo-com.svg";
// import locksvg from "../../components/images/svg/4213432_closed_lock_password_protect_secure_icon.svg";

// import * as yup from "yup";
// import { Formik, useFormik } from "formik";
// import useMultistepForm from "@/hooks/useMultistepForm";
// import RegisterModalS1 from "../RegisterModalS1";

// export interface UserData {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   username: string;
//   firstName: string;
//   lastName: string;
//   resetPasswordQuestion: string;
//   resetPasswordAnswer: string;
// }

// const initialValues = {
//   email: "",
//   password: "",
//   confirmPassword: "",
//   username: "",
//   firstName: "",
//   lastName: "",
//   resetPasswordQuestion: "",
//   resetPasswordAnswer: "",
// };

// const onSubmit = (values: UserData) => {
//   console.log(values);
// };

// const validationSchema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().required(),
//   confirmPassword: yup.string().required(),
//   username: yup.string().required(),
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   resetPasswordQuestion: yup.string().required(),
//   resetPasswordAnswer: yup.string().required(),
// });

// type SetToggleMenuType = (
//   value: boolean | ((prev: boolean) => boolean)
// ) => void;

// interface Props {
//   setShowRegisterModal: SetToggleMenuType;
// }

// export default function RegisterModal({ setShowRegisterModal }: Props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema,
//   });

//   const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } =
//     useMultistepForm([
//       <RegisterModalS1 formik={formik} />,
//       <RegisterModalS1 formik={formik} />,
//       <RegisterModalS3 formik={formik} />,
//     ]);

//   return (
//     <>
//       <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={() => setShowRegisterModal(false)}
//         ></div>
//         {/* Modal */}
//         <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-50">
//           {/* Form */}
//           <div className="px-0 sm:px-6 md:px-0 lg:px-6">
//             <div className="justify-center p-5 pb-0">
//               <h1 className="text-3xl font-bold text-slate-700">
//                 REGISTER PAGE
//               </h1>
//               <p className="text-slate-600">Please enter your credentials.</p>
//             </div>
//             <div className="flex flex-col gap-2 p-5">
//               <div className="flex justify-center items-center mt-6 gap-4">
//                 <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
//                 <h2 className="text-base text-slate-700">
//                   Or Sign-in with Email
//                 </h2>
//                 <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
//               </div>
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={onSubmit}
//               >
//                 <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//                   <div className="relative">
//                     <Heading1 title={"Form"} />
//                     <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
//                       <Page
//                         currentPage={currentStepIndex + 1}
//                         totalPage={steps.length}
//                       />
//                       <Form>
//                         {step}
//                         <div className=" flex mt-4 gap-4 justify-end ">
//                           {!isFirstStep && (
//                             <Button
//                               onClick={back}
//                               label={"Back"}
//                               type={"button"}
//                             />
//                           )}
//                           {isLastStep ? (
//                             <Button
//                               onClick={next}
//                               label={"Submit"}
//                               type={"submit"}
//                             />
//                           ) : (
//                             <Button
//                               onClick={next}
//                               label={"Next"}
//                               type={"submit"}
//                             />
//                           )}
//                         </div>
//                       </Form>
//                     </div>
//                   </div>
//                 </div>
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
