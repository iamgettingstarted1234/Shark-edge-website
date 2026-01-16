"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GlowButton } from "@/components/ui/glow-button";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Clients", href: "#clients" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger
        className={cn(
          "lg:hidden p-2 text-white transition-colors",
          className
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed z-40 inset-0 bg-black/60 backdrop-blur-md"
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.dataset.overlay !== "true"
            ) {
              e.preventDefault();
            }
          }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-10"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          {/* Close Button */}
          <Dialog.Close
            className="absolute top-6 right-6 p-2 text-white hover:text-[#facc15] transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={32} />
          </Dialog.Close>

          <nav className="flex flex-col space-y-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-3xl font-bold uppercase text-white/90 transition-colors ease-out duration-300 hover:text-[#facc15]"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-8">
              <Link href="https://calendly.com/mkthoughts10/discovery-call?embed_domain=localhost&embed_type=Inline" target="_blank" onClick={handleLinkClick}>
                <GlowButton className="min-w-[200px] !text-xl !px-6 !py-5">
                  Let&apos;s Talk
                </GlowButton>
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
