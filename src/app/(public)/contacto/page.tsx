import ContactCover from "@/app/components/contact/ContactCover";
import ContactForm from "@/app/components/contact/ContactForm";
import { ContentLayout } from "../../components/common/ContentLayout";

const Contacto = () => {
  return (
    <main className="dark:bg-[#e6e6e6] bg-[#e6e6e6]">
      <ContactCover />
      <ContentLayout centered paddingTop="pt-[300px]" paddingBottom="pb-[450px]">
        <ContactForm />
      </ContentLayout>
    </main>
  );
};

export default Contacto;
