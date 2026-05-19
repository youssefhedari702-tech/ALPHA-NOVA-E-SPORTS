"use client";

import {
  useState,
} from "react";

import {
  uploadFile,
} from "@/lib/upload";

type Props = {

  onUpload: (
    url: string
  ) => void;
};

export default function UploadClan({

  onUpload,

}: Props) {

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleUpload(

    e: React.ChangeEvent<HTMLInputElement>

  ) {

    const file =
      e.target.files?.[0];

    if (!file) {

      return;
    }

    try {

      setLoading(true);

      const url =
        await uploadFile(
          file,
          "clans"
        );

      onUpload(url);

    } finally {

      setLoading(false);
    }
  }

  return (

    <label
      className="
        flex
        cursor-pointer
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-500/20
        bg-black/40
        px-5
        py-5
        font-black
        text-cyan-400
      "
    >

      {loading
        ? "UPLOADING..."
        : "UPLOAD CLAN LOGO"}

      <input
        type="file"
        hidden
        accept="image/*"
        onChange={
          handleUpload
        }
      />

    </label>
  );
}