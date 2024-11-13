"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface ModalCvProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

export default function ModalCv({
  isOpen,
  onClose,
  fileUrl,
}: ModalCvProps) {
  return (
    <div className="relative">
      <Dialog open={isOpen} onClose={onClose}>
        <DialogBackdrop
          transition
          className="fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-full items-center">
            <DialogPanel
              transition
              className="overflow-hidden rounded-2xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <iframe
                className="w-[50vw] h-[80vh]"
                src={fileUrl}
                title="CV"
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
