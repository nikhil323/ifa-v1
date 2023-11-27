import React from "react";
import VacancyList from "./VacancyList";
import { baseUrl } from "@/app/api/auth";

async function getVacancyDetailById(id: number) {
  const res = await fetch(`${baseUrl}/vacancy/public-vacancy/${id}`);

  if (res.ok) {
    return res.json();
  }
}

const VacancyDetail = async ({ params }: { params: { id: number } }) => {
  const vacancy = await getVacancyDetailById(params?.id);
  console.log("page vacancy", vacancy);
  return (
    <div>
      <VacancyList vacancy={vacancy} />
    </div>
  );
};

export default VacancyDetail;
