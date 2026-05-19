"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

type Props = {

  bucket:
    | "avatars"
    | "clans"
    | "tournaments";

  onUpload: (
    url: string
  ) => void;
};

export default function Uploader({

  bucket,

  onUpload,

}: Props) {

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function uploadFile(
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

    setLoading(true);

    const fileName =

      `${Date.now()}-${file.name}`;

    const {
      error,
    } = await supabase
      .storage
      .from(bucket)
      .upload(
        fileName,
        file
      );

    if (error) {

      setLoading(false);

      alert(
        error.message
      );

      return;
    }

    const {

      data,

    } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(
        fileName
      );

    setLoading(false);

    onUpload(
      data.publicUrl
    );
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
          : "UPLOAD IMAGE"}

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={
            uploadFile
          }
        />

      </label>

    </div>
  );
}