import { useForm } from "react-hook-form";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const registerData = {
      company: { name: data.companyName, code: data.companyCode },

      user: { username: data.username, password: data.password },
    };

    console.log(registerData);

    // veliau cia eis:
    // await registerUser(data)
    reset();
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
};

export default useRegisterForm;
