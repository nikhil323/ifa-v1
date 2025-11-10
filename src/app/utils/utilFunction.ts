//handle input change
export const handleInputChange = (e: any, formData: any, setFormData: any) => {
  const { name, value } = e?.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

export const getUserStatus = () => {
  if (typeof window !== "undefined") {
    if (!localStorage) {
      return;
    }
    const studentId = localStorage.getItem("studentId");
    const orgId = localStorage.getItem("orgId");
    // const isAuth = studentId  || orgId
    return {
      studentId: studentId ? studentId : null,
      orgId: orgId ? orgId : null,
    };
  }
};
