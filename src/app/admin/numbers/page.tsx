"use client";

import { useState } from "react";
import { Header } from "../../components/admin/Dashboard/Header";
import { Table } from "../../components/admin/Dashboard/Numbers/Table";
import { useAdminNumbers } from "@/lib/hooks/useAdminNumbers";
import { Numbers } from "@/lib/types/numbers";
import Loading from "@/app/components/admin/Dashboard/Posts/Loading";
import ErrorAlert from "@/app/components/admin/ErrorAlert";
import { NumberModal } from "@/app/components/admin/Dashboard/Numbers/NumberModal";

export default function NumbersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    numbers,
    isLoading,
    error,
    editingNumber = null,
    setEditingNumber,
    updateNumber,
  } = useAdminNumbers();

  const handleEdit = (number: Numbers) => {
    setEditingNumber?.(number);
    setIsModalOpen(true);
  };

  const handleUpdate = async (data: Partial<Numbers>) => {
    if (!editingNumber || !updateNumber) return;
    await updateNumber(editingNumber.id, data);
    setIsModalOpen(false);
    setEditingNumber?.(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNumber?.(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header.Layout>
        <Header.Title>Numbers Management</Header.Title>
      </Header.Layout>

      {error && <ErrorAlert error={error} />}

      {isLoading ? (
        <Loading />
      ) : (
        <Table numbers={numbers} onEdit={handleEdit} />
      )}

      <NumberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleUpdate}
        editingNumber={editingNumber}
      />
    </div>
  );
}
