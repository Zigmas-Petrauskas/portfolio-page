import { useForm } from "react-hook-form";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const loginData = {
      username: data.username,
      password: data.password,
    };

    console.log(loginData);

    // vėliau:
    // await loginUser(loginData)
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};

export default useLoginForm;
