"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add new store to manage produts and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future modal
    </Modal>
  );
};
