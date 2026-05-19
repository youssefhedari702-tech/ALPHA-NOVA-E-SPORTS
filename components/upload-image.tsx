"use client";

import {
  useState,
} from "react";

import {
  supabase,
} from "@/lib/supabase";

interface Props {

  bucket:
    string;

  folder?:
    string;

  onUpload:
    (
      url: string
    ) => void;
}

export default function UploadImage({

  bucket,

  folder,

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

    const path =

      folder
        ? `${folder}/${fileName}`
        : fileName;

    const {
      error,
    } = await supabase
      .storage
      .from(bucket)
      .upload(
        path,
        file
      );

    setLoading(false);

    if (error) {

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
        path
      );

    onUpload(
      data.publicUrl
    );
  }

  return (

    <div>

      <input
        type="file"
        accept="image/*"
        onChange={
          uploadFile
        }
        className="
          w-full
          rounded-2xl
          border
          border-cyan-500/20
          bg-black/40
          p-4
        "
      />

      {loading && (

        <p
          className="
            mt-3
            text-cyan-400
          "
        >

          UPLOADING...

        </p>

      )}

    </div>
  );
}