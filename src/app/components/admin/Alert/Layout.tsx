import { Modal } from "../Modal";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Modal.Layout>
      <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">{children}</div>
    </Modal.Layout>
  );
};
