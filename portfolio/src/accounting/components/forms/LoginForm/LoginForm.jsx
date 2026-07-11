import { FaUser, FaLock } from "react-icons/fa";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import useLoginForm from "../../../hooks/useLoginForm";
import "../AuthForm.scss";

const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useLoginForm();

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Prisijungimas</h2>

      <Input
        label="Vartotojo vardas"
        name="username"
        placeholder="zigmas"
        icon={<FaUser />}
        register={register}
        error={errors.username}
      />

      <Input
        label="Slaptažodis"
        name="password"
        type="password"
        placeholder="********"
        icon={<FaLock />}
        register={register}
        error={errors.password}
      />

      <Button type="submit" loading={isSubmitting}>
        Prisijungti
      </Button>
    </form>
  );
};

export default LoginForm;
