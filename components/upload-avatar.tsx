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

export default function UploadAvatar({

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

    if (
      file.size >
      4 * 1024 * 1024
    ) {

      alert(
        "MAX 4MB"
      );

      return;
    }

    try {

      setLoading(true);

      const url =
        await uploadFile(
          file,
          "avatars"
        );

      onUpload(url);

      alert(
        "UPLOAD SUCCESS"
      );

    } catch {

      alert(
        "UPLOAD FAILED"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div>

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
          : "UPLOAD AVATAR"}

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={
            handleUpload
          }
        />

      </label>

    </div>
  );
}