import ContactCover from "@/app/components/contact/ContactCover";
import ContactForm from "@/app/components/contact/ContactForm";
import { ContentLayout } from "../../components/common/ContentLayout";

const Contacto = () => {
  return (
    <main>
      <ContactCover />
      <ContentLayout centered paddingTop="pt-[300px]">
        <ContactForm />
      </ContentLayout>
    </main>
  );
};

export default Contacto;
