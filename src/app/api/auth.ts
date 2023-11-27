// export const baseUrl = "http://192.168.1.99";
export const baseUrl = "https://paban.pythonanywhere.com";

export const login = async (cred: any) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(cred),
  });
  let data;
  if (res) {
    data = await res.json();
  }
  if (res.status === 200) {
    localStorage.setItem("accessToken", data?.Token?.access);
    localStorage.setItem("refreshToken", data?.Token?.refresh);
    if (data?.Student_id) {
      localStorage.setItem("studentId", data?.Student_id);
    } else if (data?.organization_id) {
      localStorage.setItem("orgId", data?.organization_id);
    }
  }
  return {
    status: res.status,
    msg: res.statusText,
    data,
  };
};

export const registerUser = async (body: any) => {
  const res = await fetch(`${baseUrl}/auth/user-create`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (res?.status === 201) {
    localStorage.setItem("accessToken", data?.Token?.access);
    localStorage.setItem("refreshToken", data?.Token?.refresh);
  }
  return {
    status: res.status,
    msg: res.statusText,
    data,
  };
};

export const registerStudent = async (body: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/student/student-register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (res?.status === 201) {
    localStorage.setItem("studentId", data?.id);
    return data;
  }
};

export const registerOrganization = async (body: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/organization/organization-register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (res?.status === 201) {
    localStorage.setItem("orgId", data?.organization_id);
    return data;
  }
};

//get student by id
export const getStudentById = async (id: number | string) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/student/student-register/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
  });

  const data = await res.json();
  if (res?.status === 200) {
    return data;
  }
};

//update student by id
export const updateStudent = async (body: any, id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/student/student-register/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
    body: body,
  });
  const data = await res.json();

  if (res?.status === 200) {
    return data;
  }
};

export const logout = async () => {
  const accessToken = localStorage.getItem("accessToken");
  await fetch(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
  });
};

//get organization by id
export const getOrgById = async (id: number | string) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(
    `${baseUrl}/organization/organization-register/${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken ? accessToken : ""}`,
      },
    }
  );

  const data = await res.json();
  if (res?.status === 200) {
    return data;
  }
};

//update organization by id
export const updateOrganization = async (body: any, id: string) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(
    `${baseUrl}/organization/organization-register/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken ? accessToken : ""}`,
      },
      body: body,
    }
  );
  const data = await res.json();

  if (res?.status === 200) {
    return data;
  }
};

export const addVacancy = async (body: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/vacancy/vacancy-submit`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
    body: body,
  });
  const data = await res.json();
  if (res?.status === 201) {
    return data;
  }
};

//get perticular organization vacancy
export const getOrgVacancy = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/vacancy/vacancy-submit`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
    },
  });

  const data = await res.json();
  if (res?.status === 200) {
    return data;
  }
};

//apply vacancy
export const applyVacancy = async (body: any) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await fetch(`${baseUrl}/application/apply-application`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken ? accessToken : ""}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log("the res", res);

  if (res?.status === 201) {
    return data;
  } else if (res?.status === 400) {
    return res?.status;
  }
};
