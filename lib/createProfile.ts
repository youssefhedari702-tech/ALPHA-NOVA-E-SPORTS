import {
  supabase,
} from "@/lib/supabase";

export async function createProfile(

  user: any

) {

  await supabase
    .from("profiles")
    .upsert({

      id: user.id,

      full_name:
        user.user_metadata
          ?.full_name ||

        "Player",

      avatar_url: "",

      role: "user",
    });
}