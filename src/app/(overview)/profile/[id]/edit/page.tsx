import PetOwnerEditProfilePage from "@/components/Page/PetOwnerEditProfilePage";
//import PetSitterEditProfilePage from "@/components/Page/PetSitterEditProfilePage";

export default function ProfilePage({ params }: {
  params: { id: string }
}) {
  console.log(params.id);

  return (
    <PetOwnerEditProfilePage />
    //<PetSitterEditProfilePage />
  );
}
