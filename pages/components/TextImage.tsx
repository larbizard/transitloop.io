import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function TextImage(props: {
  imageLeft: boolean;
  imageSrc: string;
  header: string;
  body: any;
}) {
  const { imageLeft, imageSrc, header, body } = props;
  return (
    <div className="flex flex-row justify-center">
      {imageLeft && <Image
        src={imageSrc}
        className="hidden sm:flex lg:w-1/6"
        width={400}
        height={700}
        alt="Setting on weelchair girl"
      />}
      <div className="p-6 lg:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold">{header}</h1>
        {body}
      </div>
      {!imageLeft && <Image
        src={imageSrc}
        width={400}
        height={700}
        alt="Setting on weelchair girl"
      />}
    </div>
  );
}
