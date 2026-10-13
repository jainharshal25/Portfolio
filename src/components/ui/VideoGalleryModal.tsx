/** @jsxImportSource react */
'use client';

import { useState } from 'react';
import AccordionGallery, { type AccordionItem } from './AccordianGallery';
import { Modal, ModalBody, ModalContent, ModalFooter, useModal } from './animated-modal';
import '../../styles/video-modal.css';

type VideoItem = AccordionItem & {
  prompt: string;
};

const VideoModalContent = ({ item }: { item: VideoItem | null }) => {
  const { setOpen } = useModal();
  if (!item) return null;

  return (
    <>
      <ModalContent className="video-modal__content">
        <p className="video-modal__eyebrow">AI video generation</p>
        <h3 className="video-modal__title">{item.label}</h3>
        <div className="video-modal__media">
          <video src={item.video} poster={item.image} controls autoPlay muted loop playsInline aria-label={item.label} />
        </div>
        <div className="video-modal__prompt">
          <h4>Prompt</h4>
          <p>{item.prompt}</p>
        </div>
      </ModalContent>
      <ModalFooter className="video-modal__footer">
        <button type="button" className="video-modal__button" onClick={() => setOpen(false)}>Close</button>
      </ModalFooter>
    </>
  );
};

export default function VideoGalleryModal({ items }: { items: VideoItem[] }) {
  const [selected, setSelected] = useState<VideoItem | null>(null);
  const { setOpen } = useModal();

  const openVideo = (item: AccordionItem) => {
    const video = items.find((candidate) => candidate.video === item.video && candidate.label === item.label);
    if (!video) return;
    setSelected(video);
    setOpen(true);
  };

  return (
    <>
      <AccordionGallery
        items={items}
        defaultIndex={0}
        grayscale={false}
        accentColor="#56a8ff"
        overlayColor="#071426"
        onItemClick={openVideo}
      />
      <ModalBody className="video-modal__body">
        <VideoModalContent item={selected} />
      </ModalBody>
    </>
  );
}

export function VideoGalleryModalRoot({ items }: { items: VideoItem[] }) {
  return (
    <Modal>
      <VideoGalleryModal items={items} />
    </Modal>
  );
}
