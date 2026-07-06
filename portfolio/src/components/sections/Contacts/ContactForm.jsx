import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// validacijos schema
const contactSchema = z.object({
  name: z.string().min(2, "Vardas per trumpas"),
  email: z.string().email("Neteisingas el. paštas"),
  subject: z.string().optional(),
  message: z.string().min(10, "Žinutė per trumpa"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    // simulacija (arba EmailJS / API)
    await new Promise((res) => setTimeout(res, 1000));

    reset();
    alert("Žinutė išsiųsta!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input type="text" placeholder="Jūsų vardas" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <input type="email" placeholder="El. paštas" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <input type="text" placeholder="Tema" {...register("subject")} />
      </div>

      <div className="form-group">
        <textarea rows="6" placeholder="Jūsų žinutė" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Siunčiama..." : "Siųsti žinutę"}
      </button>
    </form>
  );
};

export default ContactForm;
