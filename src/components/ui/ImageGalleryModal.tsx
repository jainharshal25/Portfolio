/** @jsxImportSource react */
'use client';

import { useState } from 'react';
import AccordionGallery, { type AccordionItem } from './AccordianGallery';
import { Modal, ModalBody, ModalContent, ModalFooter, useModal } from './animated-modal';
import '../../styles/image-modal.css';

type ImageModalContentProps = {
  item: AccordionItem | null;
  kind: 'Poster' | 'Logo';
};

const ImageModalContent = ({ item, kind }: ImageModalContentProps) => {
  const { setOpen } = useModal();
  if (!item) return null;

  return (
    <>
      <ModalContent className="image-modal__content">
        <p className="image-modal__eyebrow">{kind}</p>
        <h3 className="image-modal__title">{item.label}</h3>
        <div className="image-modal__media">
          <img src={item.image} alt={item.alt || item.label} />
        </div>
      </ModalContent>
      <ModalFooter className="image-modal__footer">
        <button type="button" className="image-modal__button" onClick={() => setOpen(false)}>Close</button>
      </ModalFooter>
    </>
  );
};

function ImageGalleryModalContent({
  items,
  kind,
  defaultIndex = 0,
}: {
  items: AccordionItem[];
  kind: 'Poster' | 'Logo';
  defaultIndex?: number;
}) {
  const [selected, setSelected] = useState<AccordionItem | null>(null);
  const { setOpen } = useModal();

  const openImage = (item: AccordionItem) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <>
      <AccordionGallery
        items={items}
        defaultIndex={defaultIndex}
        accentColor="#56a8ff"
        overlayColor="#071426"
        onItemClick={openImage}
      />
      <ModalBody className="image-modal__body">
        <ImageModalContent item={selected} kind={kind} />
      </ModalBody>
    </>
  );
}

export default function ImageGalleryModal({
  items,
  kind,
  defaultIndex = 0,
}: {
  items: AccordionItem[];
  kind: 'Poster' | 'Logo';
  defaultIndex?: number;
}) {
  return (
    <Modal>
      <ImageGalleryModalContent items={items} kind={kind} defaultIndex={defaultIndex} />
    </Modal>
  );
}

export function ImageGalleryModalRoot({
  items,
  kind,
  defaultIndex = 0,
}: {
  items: AccordionItem[];
  kind: 'Poster' | 'Logo';
  defaultIndex?: number;
}) {
  return (
    <Modal>
      <ImageGalleryModalContent items={items} kind={kind} defaultIndex={defaultIndex} />
    </Modal>
  );
}
