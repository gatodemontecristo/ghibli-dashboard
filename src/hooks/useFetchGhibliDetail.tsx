"use client";
import { useEffect, useState } from "react";
import { GhibliFilms } from "../types";
import { getGhibliDetail } from "../helpers";
import { formatMinutesToTime } from "../utils";
import { IconTextProps } from "../types/interfaces";

export const useFetchGhibliDetail = (id: string) => {
  const [detail, setDetail] = useState<GhibliFilms>({} as GhibliFilms);

  const getDetail = async () => {
    const detailGhibli = await getGhibliDetail(id);
    setDetail(detailGhibli);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featureSection: IconTextProps[] = [
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Japanese title",
      subtitle: detail.original_title,
    },
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Original title",
      subtitle: detail.original_title_romanised,
    },
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Director",
      subtitle: detail.director,
    },
  ];

  const extraSection: IconTextProps[] = [
    {
      srcImg: "/ghibli-web/guy.png",
      altImg: "Producer Icon",
      type: "img",
      title: "Producer",
      subtitle: detail.producer,
    },
    {
      srcImg: "year",
      altImg: "",
      type: "icon",
      title: "Realease year",
      subtitle: detail.release_date,
    },
    {
      srcImg: "time",
      altImg: "",
      type: "icon",
      title: "Running time",
      subtitle: String(formatMinutesToTime(detail.running_time)),
    },
  ];

  return { featureSection, extraSection, detail };
};
