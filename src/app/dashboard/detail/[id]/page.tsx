import { CompleteSection } from "@/src/components";
import { getGhibliDetail } from "@/src/helpers";

import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const film = await getGhibliDetail(id);

    return {
      title: `Ghibli Film ${film.title}"`,
      description: `Movie detail section ${film.title}`,
    };
  } catch {
    return {
      title: "Ghibli Film Details",
      description:
        "Unknown movie details. Please check the ID or try again later.",
    };
  }
}

export default async function GhibliDetailPage({ params }: Props) {
  const { id } = await params;
  const film = await getGhibliDetail(id);

  return (
    <div className="flex flex-col flex-wrap  px-10 pt-5 pb-15 w-full justify-center ">
      <CompleteSection film={film}></CompleteSection>
    </div>
  );
}
