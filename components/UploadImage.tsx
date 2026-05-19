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

  path: string;

  onUpload: (
    url: string
  ) => void;
};

export default function UploadImage({

  bucket,
  path,
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
        "Max file size is 4MB"
      );

      return;
    }

    try {

      setLoading(true);

      const fileExt =
        file.name.split(".").pop();

      const fileName =

        `${path}-${Date.now()}.${fileExt}`;

      const {
        error,
      } = await supabase
        .storage
        .from(bucket)
        .upload(

          fileName,
          file,
          {
            upsert: true,
          }
        );

      if (error) {

        alert(error.message);

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

      onUpload(
        data.publicUrl
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div>

      <input
        type="file"
        accept="image/*"
        onChange={
          handleUpload
        }
        className="
          w-full
          rounded-2xl
          border
          border-cyan-500/20
          bg-black
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

          Uploading...

        </p>

      )}

    </div>
  );
}