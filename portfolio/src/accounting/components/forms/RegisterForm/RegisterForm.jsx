import { FaBuilding, FaIdCard, FaUser, FaLock } from "react-icons/fa";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import useRegisterForm from "../../../hooks/useRegisterForm";
import "../AuthForm.scss";

const RegisterForm = () => {
  const { register, handleSubmit, errors, isSubmitting, onsubmit } =
    useRegisterForm();

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Įmonės registracija</h2>

      <Input
        label="Įmonės pavadinimas"
        name="companyName"
        placeholder="MB Lengvas Kodas"
        icon={<FaBuilding />}
        register={register}
        error={errors.companyName}
      />

      <Input
        label="Įmonės kodas"
        name="companyCode"
        placeholder="123456789"
        icon={<FaIdCard />}
        register={register}
        error={errors.companyCode}
      />

      <Input
        label="Vartotojo vardas"
        name="username"
        placeholder="Zigmas"
        icon={<FaUser />}
        register={register}
        error={errors.username}
      />

      <Input
        label="Slaptažodis"
        name="password"
        placeholder="*********"
        icon={<FaLock />}
        register={register}
        error={errors.password}
      />

      <Button type="submit" loading={isSubmitting}>
        Registruoti įmonę
      </Button>
    </form>
  );
};

export default RegisterForm;
